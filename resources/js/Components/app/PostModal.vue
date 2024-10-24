<script setup>
import { computed, ref, watch } from "vue";
import {
    XMarkIcon,
    PaperClipIcon,
    BookmarkIcon,
    ArrowUturnLeftIcon,
} from "@heroicons/vue/24/solid";
import PostUserHeader from "@/Components/app/PostUserHeader.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { isImage } from "@/helpers.js";
import axiosClient from "@/axiosClient.js";
import UrlPreview from "@/Components/app/UrlPreview.vue";
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
        :title="post.id ? 'Update Post' : 'Relax shutter !'"
        v-model="show"
        @hide="closeModal"
    >
        <div class="p-4">
            <PostUserHeader
                :post="post"
                :show-time="false"
                class="mb-4 dark:text-gray-100"
            />

            <div
                v-if="showExtensionsText"
                class="border-l-4 border-amber-500 py-2 px-3 bg-amber-100 mt-3 text-gray-800"
            >
                Files must be one of the following extensions <br />
                <small>{{ attachmentExtensions.join(", ") }}</small>
            </div>

            <div
                v-if="formErrors.attachments"
                class="border-l-4 border-red-500 py-2 px-3 bg-red-100 mt-3 text-gray-800"
            >
                {{ formErrors.attachments }}
            </div>

            <div
                class="grid gap-3 my-3"
                :class="[
                    computedAttachments.length === 1
                        ? 'grid-cols-1'
                        : 'grid-cols-2',
                ]"
            >
                <div v-for="(myFile, ind) of computedAttachments" :key="ind">
                    <div
                        class="group aspect-square bg-blue-100 flex flex-col items-center justify-center text-gray-500 relative border-2"
                        :class="attachmentErrors[ind] ? 'border-red-500' : ''"
                    >
                        <div
                            v-if="myFile.deleted"
                            class="absolute z-10 left-0 bottom-0 right-0 py-2 px-3 text-sm bg-black text-white flex justify-between items-center"
                        >
                            To be deleted

                            <ArrowUturnLeftIcon
                                @click="undoDelete(myFile)"
                                class="w-4 h-4 cursor-pointer"
                            />
                        </div>

                        <button
                            @click="removeFile(myFile)"
                            class="absolute z-20 right-3 top-3 w-7 h-7 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/40"
                        >
                            <XMarkIcon class="h-5 w-5" />
                        </button>

                        <img
                            v-if="isImage(myFile.file || myFile)"
                            :src="myFile.url"
                            class="object-contain aspect-square"
                            :class="myFile.deleted ? 'opacity-50' : ''"
                        />
                        <div
                            v-else
                            class="flex flex-col justify-center items-center px-3"
                            :class="myFile.deleted ? 'opacity-50' : ''"
                        >
                            <PaperClipIcon class="w-10 h-10 mb-3" />

                            <small class="text-center">
                                {{ (myFile.file || myFile).name }}
                            </small>
                        </div>
                    </div>
                    <small class="text-red-500">{{
                        attachmentErrors[ind]
                    }}</small>
                </div>
            </div>

            <label
                class="relative w-full mb-4 border-2 border-dashed text-center p-3 block"
                :class="showExtensionsText ? 'border-amber-500' : ''"
            >
                <input
                    class="absolute inset-0 w-full h-full z-10 opacity-0 cursor-pointer"
                    type="file"
                    multiple
                    @change="onAttachmentChoose"
                />
                <PaperClipIcon class="h-6 w-6 mx-auto" />
                <span class="block text-gray-500"
                    >Selectionner une photo ou video</span
                >
            </label>

            <textarea
                class="w-full px-3 py-2 border rounded-lg resize-none"
                :class="formErrors.body ? 'border-red-500' : ''"
                rows="3"
                placeholder="Partage ton week-end !"
                v-model="form.body"
                @input="onInputChange"
            ></textarea>
            <small class="text-red-500">{{ formErrors.body }}</small>

            <UrlPreview v-if="form.preview_url" v-model="form.preview" />

            <div class="flex justify-between items-center py-4">
                <div class="flex gap-4 items-center">
                    <button
                        @click="submit"
                        type="button"
                        class="text-xs bg-sky-500 hover:bg-sky-600 text-white rounded-lg py-2 px-3"
                    >
                        {{ post.id ? "Update" : "Post" }}
                    </button>
                </div>
            </div>
        </div>
    </BaseModal>
</template>
