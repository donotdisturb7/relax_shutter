<template>
    <div class="w-64 bg-white  h-screen fixed left-0 top-0 flex flex-col">
        <!-- Espace pour le header -->
        <div class="h-20"></div>
        
        <!-- Menu principal centré -->
        <div class="flex-1 flex items-center">
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

        <!-- Bouton de déconnexion -->
        <div class="px-4 mb-8">
            <Link
                :href="route('logout')"
                method="post"
                class="flex flex-col items-center justify-center p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
                <ArrowLeftOnRectangleIcon class="w-6 h-6 mb-1" />
                <span>Déconnexion</span>
            </Link>
            
        </div>
    </div>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { 
    HomeIcon, 
    UserIcon, 
    Cog6ToothIcon, 
    PhotoIcon,
    ArrowLeftOnRectangleIcon
} from '@heroicons/vue/24/outline';

const authUser = usePage().props.auth.user;

const menuItems = [
    { label: 'Feed', path: route('home'), icon: HomeIcon },
    { label: 'Discover', path: route('home'), icon: PhotoIcon },
    { label: 'Profile', path: route('profile', authUser.username), icon: UserIcon },
    
];

const isCurrentPath = (path) => {
    return usePage().url === path;
};
</script> 