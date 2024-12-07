<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import CreatePost from "@/Components/app/CreatePost.vue";
import PostCard from "@/Components/app/PostCard.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const props = defineProps({
    posts: Object,
    followings: Array,
});

const showAlert = ref(false);

const handlePostCreated = () => {
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false;
        window.location.reload();
    }, 3000);
};
</script>

<template>
    <Head title="Relax Shutter" />
    <AuthenticatedLayout :followings="followings">
        <div class="max-w-3xl mx-auto px-4 py-8 bg-primary-black text-white">
            <!-- Create Post Section -->
            <div class="bg-primary-black rounded-lg shadow-sm p-4 mb-6 border border-gray-800">
                <CreatePost @post-created="handlePostCreated" />
            </div>

            <!-- Success Alert - keeping this visible but darker -->
            <div
                v-if="showAlert"
                class="bg-primary-black border border-green-800 text-green-400 px-4 py-3 rounded relative mb-6"
                role="alert"
            >
                <strong class="font-bold">Succès!</strong>
                <span class="block sm:inline">
                    Votre post a été créé avec succès.
                </span>
            </div>

            <!-- Posts List -->
            <div v-if="posts.data.length === 0" class="text-center py-8 text-gray-400">
                Aucune publication pour le moment
            </div>
            <div v-else class="space-y-6 bg-primary-black">
                <PostCard
                    v-for="post in posts.data"
                    :key="post.id"
                    :post="post"
                    @deleted="() => window.location.reload()"
                />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

