<script setup>
import { Head } from "@inertiajs/vue3";
import PostCard from "@/Components/app/PostCard.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const props = defineProps({
    posts: Object,
    followings: Array,
});

</script>

<template>
    <Head title="Relax Shutter" />
    <AuthenticatedLayout :followings="followings">
        <div class="flex flex-col mt-16 bg-primary-black min-h-screen">
            <!-- Main Content -->
            <div class="flex-1 mx-4 lg:mx-64">
                <div class="max-w-3xl mx-auto px-2 py-6">
                    <!-- Posts List -->
                    <div v-if="posts.data.length === 0" class="text-center py-8 text-gray-400">
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
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
/* Optional: Add any additional responsive styles here */

/* Example: Adjust padding for smaller screens */
@media (max-width: 640px) {
    .post-container {
        padding: 0 1rem;
    }
}
</style>

