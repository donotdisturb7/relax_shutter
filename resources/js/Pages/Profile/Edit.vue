<!-- Code Original -->
<!-- 
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Profile
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <div
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                >
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                </div>

                <div
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                >
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                >
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>  -->
<!-- ------------------------------- -->

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import DeleteUserForm from "./Partials/DeleteUserForm.vue";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.vue";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const activeTab = ref("profile");
</script>
<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const { locale, t } = useI18n();
        const selected_language = ref(locale.value);

        const change_language = () => {
           
            locale.value = selected_language.value;
        };

        return {
            selected_language,
            change_language,
        };
    },
};
</script>
<template>
    <Head title="Profile" />
    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Profile Settings
            </h2>
        </template>


        <div class="py-12">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <!-- Navigation Tabs -->
                <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px" role="tablist">
                        <li class="mr-2">
                            <button
                                @click="activeTab = 'profile'"
                                :class="[
                                    'inline-block p-4 rounded-t-lg',
                                    activeTab === 'profile'
                                        ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                        : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                                ]"
                            >
                                Profile Info
                            </button>
                        </li>
                        <li class="mr-2">
                            <button
                                @click="activeTab = 'password'"
                                :class="[
                                    'inline-block p-4 rounded-t-lg',
                                    activeTab === 'password'
                                        ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                        : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                                ]"
                            >
                                Password
                            </button>
                        </li>
                        <li>
                            <button
                                @click="activeTab = 'delete'"
                                :class="[
                                    'inline-block p-4 rounded-t-lg',
                                    activeTab === 'delete'
                                        ? 'text-red-600 border-b-2 border-red-600 dark:text-red-500 dark:border-red-500'
                                        : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                                ]"
                            >
                                Delete Account
                            </button>
                        </li>
                    </ul>
                </div>

                <!-- Tab Content -->
                <div
                    v-show="activeTab === 'profile'"
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                >
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                </div>

                <div
                    v-show="activeTab === 'password'"
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                >
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div
                    v-show="activeTab === 'delete'"
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                >
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
