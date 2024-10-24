<script setup>
import { ref } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import CreatePost from "@/Components/app/CreatePost.vue";
import PostList from "@/Components/app/PostList.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import UserListItem from "@/Components/app/UserListItem.vue";


const props = defineProps({
    posts: Object,
    followings: Array,
});

const showAlert = ref(false);

const handlePostCreated = () => {
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false;
    }, 3000);
};
</script>

<template>
    <Head title="Relax Shutter" />
    <AuthenticatedLayout>
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-8 text-center">
                Bienvenue sur Relax Shutter
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2">
                    <CreatePost @post-created="handlePostCreated" />
                    <div
                        v-if="showAlert"
                        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                        role="alert"
                    >
                        <strong class="font-bold">Succès!</strong>
                        <span class="block sm:inline">
                            Votre post a été créé avec succès.</span
                        >
                    </div>
                    <PostList :posts="posts.data" class="mt-8" />
                    <UserListItem></UserListItem>
                </div>

                <div class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-4">
                        Personnes que vous suivez
                    </h2>
                    <ul>
                        <li
                            v-for="following in followings"
                            :key="following.id"
                            class="mb-2"
                        >
                            <Link
                                :href="`/profile/${following.id}`"
                                class="text-blue-600 hover:underline"
                            >
                                {{ following.name }}
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </AuthenticatedLayout>
</template>
