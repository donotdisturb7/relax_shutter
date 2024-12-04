<template>
    <div class="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 pt-20 flex items-center">
        <nav class="space-y-2 px-4 w-full">
            <Link 
                v-for="item in menuItems" 
                :key="item.path"
                :href="item.path"
                class="flex items-center justify-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                :class="{ 'bg-gray-100 font-semibold': isCurrentPath(item.path) }"
            >
                <div class="flex flex-col items-center">
                    <component :is="item.icon" class="w-6 h-6 mb-1" />
                    <span>{{ item.label }}</span>
                </div>
            </Link>
        </nav>
    </div>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { 
    HomeIcon, 
    UserIcon, 
    Cog6ToothIcon, 
    PhotoIcon 
} from '@heroicons/vue/24/outline';
const authUser = usePage().props.auth.user;

const menuItems = [
    { label: 'Accueil', path: route('home'), icon: HomeIcon },
    { label: 'Profile', path: route('profile', authUser.username), icon: UserIcon },
    { label: 'Photos', path: route('home'), icon: PhotoIcon },
    { label: 'Paramètres', path: route('home'), icon: Cog6ToothIcon },
];

const isCurrentPath = (path) => {
    return usePage().url === path;
};
</script> 