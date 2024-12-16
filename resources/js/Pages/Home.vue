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
        <div class="flex mt-16 bg-primary-black">
            <!-- Main Content -->
            <div class="flex-1 ml-64 ">
                <div class="max-w-3xl mx-auto px-4 py-6">
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

