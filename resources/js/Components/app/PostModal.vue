<script setup>
import { computed, ref, watch } from "vue";
import {
    XMarkIcon,
    PaperClipIcon,
    ArrowUturnLeftIcon,
} from "@heroicons/vue/24/solid";
import PostUserHeader from "@/Components/app/PostUserHeader.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { isImage } from "@/helpers.js";
import axiosClient from "@/axiosClient.js";
import BaseModal from "@/Components/app/BaseModal.vue";


const props = defineProps({
    post: {
        type: Object,
        required: true,
    },

    modelValue: Boolean,
});

// Fetch attachment extensions and provide a fallback if undefined
const attachmentExtensions = usePage().props.attachmentExtensions || [];

if (!attachmentExtensions.length) {
    console.warn("attachmentExtensions is undefined or empty.");
}

/**
 * {
 *     file: File,
 *     url: '',
 * }
 * @type {Ref<UnwrapRef<*[]>>}
 */
const attachmentFiles = ref([]);
const attachmentErrors = ref([]);
const formErrors = ref({});


const form = useForm({
    body: "",
    attachments: [],
    deleted_file_ids: [],
    preview: {},
    preview_url: null,
    _method: "POST",
});

const show = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
});

const computedAttachments = computed(() => {
    return [...attachmentFiles.value, ...(props.post.attachments || [])];
});

const showExtensionsText = computed(() => {
    for (let myFile of attachmentFiles.value) {
        const file = myFile.file;
        let parts = file.name.split(".");
        let ext = parts.pop().toLowerCase();
        if (!attachmentExtensions.includes(ext)) {
            return true;
        }
    }
    return false;
});

const emit = defineEmits(["update:modelValue", "hide"]);

watch(
    () => props.post,
    () => {
        form.body = props.post.body || "";
        onInputChange();
    }
);

function closeModal() {
    show.value = false;
    emit("hide");
    resetModal();
}

function resetModal() {
    form.reset();
    formErrors.value = {};
    attachmentFiles.value = [];
    attachmentErrors.value = [];
    if (props.post.attachments) {
        props.post.attachments.forEach((file) => (file.deleted = false));
    }
}

function submit() {
    form.attachments = attachmentFiles.value.map((myFile) => myFile.file);
    if (props.post.id) {
        form._method = "PUT";
        form.post(route("post.update", props.post.id), {
            preserveScroll: true,
            onSuccess: (res) => {
                closeModal();
            },
            onError: (errors) => {
                processErrors(errors);
            },
        });
    } else {
        form.post(route("post.create"), {
            preserveScroll: true,
            onSuccess: (res) => {
                closeModal();
            },
            onError: (errors) => {
                processErrors(errors);
            },
        });
    }
}

function processErrors(errors) {
    formErrors.value = errors;
    for (const key in errors) {
        if (key.includes(".")) {
            const [, index] = key.split(".");
            attachmentErrors.value[index] = errors[key];
        }
    }
}

async function onAttachmentChoose($event) {
    for (const file of $event.target.files) {
        const myFile = {
            file,
            url: await readFile(file),
        };
        attachmentFiles.value.push(myFile);
    }
    $event.target.value = null;
}

async function readFile(file) {
    return new Promise((res, rej) => {
        if (isImage(file)) {
            const reader = new FileReader();
            reader.onload = () => {
                res(reader.result);
            };
            reader.onerror = rej;
            reader.readAsDataURL(file);
        } else {
            res(null);
        }
    });
}

function removeFile(myFile) {
    if (myFile.file) {
        attachmentFiles.value = attachmentFiles.value.filter(
            (f) => f !== myFile
        );
    } else {
        form.deleted_file_ids.push(myFile.id);
        myFile.deleted = true;
    }
}

function undoDelete(myFile) {
    myFile.deleted = false;
    form.deleted_file_ids = form.deleted_file_ids.filter(
        (id) => myFile.id !== id
    );
}

function fetchPreview(url) {
    if (url === form.preview_url) {
        return;
    }

    form.preview_url = url;
    form.preview = {};
    if (url) {
        axiosClient
            .post(route("post.fetchUrlPreview"), { url })
            .then(({ data }) => {
                form.preview = {
                    title: data["og:title"],
                    description: data["og:description"],
                    image: data["og:image"],
                };
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

function onInputChange() {
    let url = matchHref();

    if (!url) {
        url = matchLink();
    }
    fetchPreview(url);
}

function matchHref() {
    // Regular expression to match URLs
    const urlRegex = /<a.+href="((https?):\/\/[^"]+)"/;

    // Match the first URL in the HTML content
    const match = form.body.match(urlRegex);

    // Check if a match is found
    if (match && match.length > 0) {
        return match[1];
    }
    return null;
}

function matchLink() {
    // Regular expression to match URLs
    const urlRegex = /(?:https?):\/\/[^\s<]+/;

    // Match the first URL in the HTML content
    const match = form.body.match(urlRegex);

    // Check if a match is found
    if (match && match.length > 0) {
        return match[0];
    }
    return null;
}
</script>

<template>
  <BaseModal
    title="Créer un post"
    v-model="show"
    @hide="closeModal"
    class="bg-white "
  >
    <div class="p-6">
      <PostUserHeader
        :post="post"
        :show-time="false"
        class="mb-4"
      />


      <div
        v-if="formErrors.attachments"
        class="flex items-center border-l-4 border-red-500 bg-red-100 text-red-800 p-4 rounded mb-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span>{{ formErrors.attachments }}</span>
      </div>

      <small class="text-red-500">{{ formErrors.body }}</small>

    
      <div class="grid gap-4 my-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(myFile, ind) of computedAttachments" :key="ind">
          <div
            class="group relative aspect-square bg-gray-50 flex flex-col items-center justify-center text-gray-500 border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            :class="attachmentErrors[ind] ? 'border-red-500' : 'border-gray-300'"
          >
            <div
              v-if="myFile.deleted"
              class="absolute inset-x-0 bottom-0 bg-black/70 text-white py-2 px-3 text-sm flex justify-between items-center"
            >
              À supprimer
              <ArrowUturnLeftIcon
                @click="undoDelete(myFile)"
                class="w-5 h-5 cursor-pointer hover:text-sky-400"
              />
            </div>

            <button
              @click="removeFile(myFile)"
              class="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/75 transition-colors"
            >
              <XMarkIcon class="h-4 w-4" />
            </button>

            <img
              v-if="isImage(myFile.file || myFile)"
              :src="myFile.url"
              class="object-contain h-full w-full"
              :class="myFile.deleted ? 'opacity-50' : 'opacity-100'"
            />
            <div
              v-else
              class="flex flex-col justify-center items-center px-3 h-full"
              :class="myFile.deleted ? 'opacity-50' : 'opacity-100'"
            >
              <PaperClipIcon class="w-8 h-8 mb-2" />
              <small class="text-center break-words">{{ (myFile.file || myFile).name }}</small>
            </div>
          </div>
          <small class="text-red-500">{{ attachmentErrors[ind] }}</small>
        </div>
      </div>

      <!-- File Upload Zone -->
      <label
        class="relative w-full mb-4 border-2 border-dashed border-gray-300 rounded-lg text-center p-4 flex flex-col items-center justify-center hover:border-sky-500 hover:bg-sky-50 transition-colors cursor-pointer"
        :class="showExtensionsText ? 'border-yellow-500' : 'border-gray-300'"
      >
        <input
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          multiple
          @change="onAttachmentChoose"
        />
        <PaperClipIcon class="h-6 w-6 text-gray-400 mb-2" />
        <span class="text-gray-500">Ajouter des photos ou fichiers</span>
      </label>

      <!-- Action Buttons -->
      <div class="flex justify-end space-x-3 pt-4">
        <button
          @click="closeModal"
          type="button"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          Annuler
        </button>
        <button
          @click="submit"
          type="button"
          class="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors"
        >
          Publier
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<style scoped>


@media (max-width: 640px) {

  .p-6 {
    padding: 1.5rem;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
