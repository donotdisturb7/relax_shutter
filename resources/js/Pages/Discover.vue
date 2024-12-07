<script setup>
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PostCard from "@/Components/app/PostCard.vue";

const props = defineProps({
    posts: Object,
    followings: Array,
});
</script>

<template>
    <Head title="Discover - Relax Shutter" />
    <AuthenticatedLayout :followings="followings">
        <div class="bg-primary-black min-h-screen text-white">
            <div class="max-w-7xl mx-auto px-4 py-8">
            
                <div class="grid grid-cols-1 gap-6">
                    <div  
                         class="bg-[#11111] rounded-lg overflow-hidden">


                        <!-- Post Content -->
                        <div class="relative">
                            <PostCard
                                v-for="post in posts.data"
                                :key="post.id"
                                :post="post"
                                @deleted="() => window.location.reload()"
                />
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="posts.data.length === 0" 
                     class="text-center py-8 text-gray-400">
                    Aucune publication pour le moment
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.grid {
    max-width: 650px;
    margin: 0 auto;
}

/* Optional: Add smooth transitions */
.grid > div {
    transition: transform 0.2s;
}

.grid > div:hover {
    transform: translateY(-2px);
}
</style>
