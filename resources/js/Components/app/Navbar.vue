<script setup>
import { ref } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';

const keywords = ref(usePage().props.search || '');
const authUser = usePage().props.auth.user;
const isMobileMenuOpen = ref(false);

function search() {
    router.get(route('search', encodeURIComponent(keywords.value)))
}

</script>

<template>
    <nav class="bg-primary-black fixed w-full top-0 z-50 border-b border-gray-700">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <!-- Logo -->
            <Link :href="route('home')" class="flex items-center">
                <img src="/assets/logoRF.png" class="h-8" alt="Relax Shutter" />
            </Link>

            <!-- Search Bar -->
            <div class="flex-1 max-w-2xl mx-4">
                <div class="relative">
                    <input
                        v-model="keywords"
                        type="search"
                        placeholder="Search"
                        class="w-full rounded-full bg-[#2a2a2a] border-none text-white px-6 py-2 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        @keyup.enter="search"
                    />
                    <button 
                        @click="search"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Right Section -->
            <div class="flex items-center space-x-4">
                

                <!-- User Profile -->
                <div class="relative" v-if="authUser">
                    <Link 
                        :href="route('profile', {username: authUser.username })" 
                        class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        <img 
                            :src="authUser.avatar_path 
                                ? `/storage/${authUser.avatar_path}` 
                                : '/images/default-avatar.png'"
                            class="size-8 rounded-full object-cover"
                            :alt="authUser.name"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </nav>
</template>

