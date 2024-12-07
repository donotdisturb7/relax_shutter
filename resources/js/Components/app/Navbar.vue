<script setup>
import { ref } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import TextInput from "@/Components/ui/TextInput.vue";


const keywords = ref(usePage().props.search || '');
const authUser = usePage().props.auth.user;

function search() {
    router.get(route('search', encodeURIComponent(keywords.value)))
}
</script>

<template>
    <nav class="bg-primary-black fixed w-full z-10 px-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <Link :href="route('home')" class="flex items-center">
                    <img src="/assets/logoRF.png" alt="Relax Shutter" class="h-8 w-auto"/>
                </Link>
            </div>

            <!-- Search Bar -->
            <div class="flex-1 max-w-2xl mx-4 border-radius-90">
                <div class="relative">
                    <TextInput
                        v-model="keywords"
                        type="search"
                        placeholder="Search"
                        class="w-full rounded-full   focus:ring-0"
                        @keyup.enter="search"
                    />
                    <button 
                        @click="search"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- User Profile -->
            <div  v-if="authUser" class="flex items-center">
                <Link :href="route('profile', {username: authUser.username })"  >
                    <img :src="authUser.avatar_path 
                                    ? `/storage/${authUser.avatar_path}` 
                                    : '/images/default-avatar.png'"
                    class="w-8 h-8 rounded-full object-cover"
                    :alt="authUser.name"
                    />
       
                </Link>

            </div>
        </div>
    </nav>
</template>

<style scoped>
.search-input::placeholder {
    color: #6B7280;
}
</style> 