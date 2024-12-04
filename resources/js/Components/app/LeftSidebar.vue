<template>
    <div class="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 pt-20">
        <nav class="space-y-2 px-4">
            <Link 
                v-for="item in menuItems" 
                :key="item.path"
                :href="item.path"
                class="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                :class="{ 'bg-gray-100 font-semibold': isCurrentPath(item.path) }"
            >
                <component :is="item.icon" class="w-6 h-6 mr-3" />
                {{ item.label }}
            </Link>
        </nav>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { 
    HomeIcon, 
    UserIcon, 
    Cog6ToothIcon, 
    PhotoIcon 
} from '@heroicons/vue/24/outline';

const menuItems = [
    { label: 'Accueil', path: '/', icon: HomeIcon },
    { label: 'Profil', path: '/profile', icon: UserIcon },
    { label: 'Photos', path: '/photos', icon: PhotoIcon },
    { label: 'Paramètres', path: '/settings', icon: Cog6ToothIcon },
];

const isCurrentPath = (path) => {
    return window.location.pathname === path;
};
</script> 