<!-- <script setup>
import { ref, computed } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import CreatePost from "@/Components/app/CreatePost.vue";
import PostList from "@/Components/app/PostList.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const props = defineProps({
    posts: Object,
    followings: Array,
});

const showAlert = ref(false);
const alertMessage = ref("");
const alertType = ref("success");

const handlePostCreated = () => {
    showAlert.value = true;
    alertMessage.value = "Votre post a été créé avec succès.";
    alertType.value = "success";
    setTimeout(() => {
        showAlert.value = false;
    }, 3000);
};

const handlePostError = (error) => {
    showAlert.value = true;
    alertMessage.value = `Erreur: ${error}`;
    alertType.value = "error";
    setTimeout(() => {
        showAlert.value = false;
    }, 3000);
};

const followingsCount = computed(() => props.followings.length);
</script>

<template>
    <Head title="Relax Shutter" />
    <AuthenticatedLayout>
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">
                Bienvenue sur Relax Shutter
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <CreatePost
                        @post-created="handlePostCreated"
                        @post-error="handlePostError"
                    />
                    <transition
                        enter-active-class="transition ease-out duration-300"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-200"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                    >
                        <div
                            v-if="showAlert"
                            :class="[
                                'px-4 py-3 rounded relative mt-4',
                                alertType === 'success'
                                    ? 'bg-green-100 border border-green-400 text-green-700'
                                    : 'bg-red-100 border border-red-400 text-red-700',
                            ]"
                            role="alert"
                        >
                            <strong class="font-bold">{{
                                alertType === "success" ? "Succès!" : "Erreur!"
                            }}</strong>
                            <span class="block sm:inline ml-2">{{
                                alertMessage
                            }}</span>
                        </div>
                    </transition>
                    <PostList :posts="posts.data" class="mt-8" />
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        Personnes que vous suivez
                        <span class="ml-auto text-sm font-normal text-gray-500">
                            {{ followingsCount }}
                            {{
                                followingsCount === 1 ? "personne" : "personnes"
                            }}
                        </span>
                    </h2>
                    <ul class="space-y-2">
                        <li
                            v-for="following in followings"
                            :key="following.id"
                            class="transition-colors duration-200 hover:bg-gray-100 rounded-md"
                        >
                            <Link
                                :href="`/profile/${following.id}`"
                                class="flex items-center p-2 text-gray-700 hover:text-blue-600"
                            >
                                <img
                                    :src="
                                        following.avatar ||
                                        'https://via.placeholder.com/40'
                                    "
                                    :alt="`Avatar de ${following.name}`"
                                    class="w-10 h-10 rounded-full mr-3"
                                />
                                <span>{{ following.name }}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 ml-auto"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <Link
                        href="/discover"
                        class="mt-4 block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        Découvrir plus de personnes
                    </Link>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template> -->

<script setup>
import { ref, computed } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import CreatePost from "@/Components/app/CreatePost.vue";
import PostList from "@/Components/app/PostList.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const props = defineProps({
    posts: Object,
    followings: Array,
});

const showAlert = ref(false);
const alertMessage = ref("");
const alertType = ref("success");

const handlePostCreated = () => {
    showAlert.value = true;
    alertMessage.value = "Votre post a été créé avec succès.";
    alertType.value = "success";
    setTimeout(() => {
        showAlert.value = false;
    }, 3000);
};

const handlePostError = (error) => {
    showAlert.value = true;
    alertMessage.value = `Erreur: ${error}`;
    alertType.value = "error";
    setTimeout(() => {
        showAlert.value = false;
    }, 3000);
};

const followingsCount = computed(() => props.followings.length);
</script>

<template>
    <Head title="Relax Shutter" />
    <AuthenticatedLayout>
        <div class="relative min-h-screen">
            <!-- Background image with blur effect -->
            <div
                class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                :style="{
                    backgroundImage: `url('/assets/IMG_8063.JPG')`,
                    filter: 'blur(8px)',
                }"
            ></div>

            <!-- Content overlay -->
            <div class="relative z-10 bg-white bg-opacity-90 min-h-screen">
                <div class="container mx-auto px-4 py-12">
                    <h1 class="text-5xl font-bold mb-8 text-center text-gray-900">
                        Bienvenue sur Relax Shutter
                    </h1>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2">
                            <CreatePost
                                @post-created="handlePostCreated"
                                @post-error="handlePostError"
                            />
                            <transition
                                enter-active-class="transition ease-out duration-300"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-200"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <div
                                    v-if="showAlert"
                                    :class="[
                                        'px-4 py-3 rounded relative mt-4',
                                        alertType === 'success'
                                            ? 'bg-green-100 border border-green-400 text-green-700'
                                            : 'bg-red-100 border border-red-400 text-red-700',
                                    ]"
                                    role="alert"
                                >
                                    <strong class="font-bold">{{
                                        alertType === "success" ? "Succès!" : "Erreur!"
                                    }}</strong>
                                    <span class="block sm:inline ml-2">{{ alertMessage }}</span>
                                </div>
                            </transition>
                            <PostList :posts="posts.data" class="mt-8" />
                        </div>
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <h2 class="text-xl font-semibold mb-4 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                Personnes que vous suivez
                                <span class="ml-auto text-sm font-normal text-gray-500">
                                    {{ followingsCount }}
                                    {{ followingsCount === 1 ? "personne" : "personnes" }}
                                </span>
                            </h2>
                            <ul class="space-y-2">
                                <li
                                    v-for="following in followings"
                                    :key="following.id"
                                    class="transition-colors duration-200 hover:bg-gray-100 rounded-md"
                                >
                                    <Link
                                        :href="`/profile/${following.id}`"
                                        class="flex items-center p-2 text-gray-700 hover:text-blue-600"
                                    >
                                        <img
                                            :src="following.avatar || 'https://via.placeholder.com/40'"
                                            :alt="`Avatar de ${following.name}`"
                                            class="w-10 h-10 rounded-full mr-3"
                                        />
                                        <span>{{ following.name }}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 ml-auto"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                            <Link
                                href="/discover"
                                class="mt-4 block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                            >
                                Découvrir plus de personnes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
