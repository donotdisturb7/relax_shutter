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
        <div class="mt-16  bg-primary-black flex flex-col "> 
        <div class="max-w-3xl mx-auto px-4 py-8 bg-primary-black text-white">
            
                    <div  
                         class="bg-primary-black rounded-lg overflow-hidden">


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
               

                <div v-if="posts.data.length === 0" 
                     class="text-center py-8 text-gray-400">
                    Aucune publication pour le moment
                </div>
            
        </div>
    </div>
    </AuthenticatedLayout>
</template>
