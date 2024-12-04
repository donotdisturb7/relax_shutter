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
        <div class="max-w-3xl mx-auto px-4 py-8">
            <!-- Create Post Section -->
            <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
                <CreatePost @post-created="handlePostCreated" />
            </div>

            <!-- Success Alert -->
            <div
                v-if="showAlert"
                class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
                role="alert"
            >
                <strong class="font-bold">Succès!</strong>
                <span class="block sm:inline">
                    Votre post a été créé avec succès.
                </span>
            </div>

            <!-- Posts List -->
            <div v-if="posts.data.length === 0" class="text-center py-8 text-gray-500">
                Aucune publication pour le moment
            </div>
            <div v-else class="space-y-6">
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

