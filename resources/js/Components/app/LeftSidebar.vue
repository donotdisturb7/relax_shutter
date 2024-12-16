<script setup>
import { ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { 
    HomeIcon, 
    UserIcon, 
    PlusCircleIcon,
    ArrowLeftOnRectangleIcon,
    MagnifyingGlassIcon
} from '@heroicons/vue/24/outline';

import { 
    HomeIcon as HomeIconSolid, 
    MagnifyingGlassIcon as MagnifyingGlassIconSolid,
    UserIcon as UserIconSolid,
    PlusCircleIcon as PlusCircleIconSolid,
} from '@heroicons/vue/24/solid';

import PostModal from "@/Components/app/PostModal.vue";

const authUser = usePage().props.auth.user;
const showModal = ref(false);

const newPost = ref({
    id: null,
    body: '',
    user: authUser
});

const menuItems = [
    { 
        label: 'Feed', 
        path: route('home'), 
        icon: HomeIcon,
        activeIcon: HomeIconSolid 
    },
    { 
        label: 'Discover', 
        path: route('discover'), 
        icon: MagnifyingGlassIcon,
        activeIcon: MagnifyingGlassIconSolid 
    },
    {
        label: 'Create',
        icon: PlusCircleIcon,
        activeIcon: PlusCircleIconSolid,
        action: () => showModal.value = true
    },
    { 
        label: 'Profile', 
        path: route('profile', authUser.username),
        icon: UserIcon,
        activeIcon: UserIconSolid
    },
];

const isCurrentPath = (path) => {
    return path && usePage().url.startsWith(path);
};

const handlePostCreated = () => {
    showModal.value = false;
    window.location.reload();
};
</script> 

<template>
    <!-- Desktop Sidebar -->
    <div class="hidden lg:flex flex-col items-center justify-between w-64 bg-primary-black h-screen fixed left-0 top-0 border-r border-gray-700">
        <!-- Top Section (e.g., Logo or Header) -->
        <div class="h-20 flex items-center justify-center w-full">
            <!-- You can add a logo or header here if needed -->
        </div>
        
        <!-- Main menu centered -->
        <div class="flex-1 flex flex-col items-center justify-center w-full">
            <nav class="space-y-4 px-4 w-full">
                <template v-for="item in menuItems" :key="item.label">
                    <Link 
                        v-if="item.path"
                        :href="item.path"
                        class="flex items-center p-3 text-white hover:bg-gray-800 rounded-lg transition-colors w-full"
                        :class="{ 'bg-gray-800 font-semibold': isCurrentPath(item.path) }"
                    >
                        <div class="flex flex-col items-center mx-auto">
                            <template v-if="item.path === route('profile', authUser.username)">
                                <img :src="authUser.avatar_path 
                                        ? `/storage/${authUser.avatar_path}` 
                                        : '/images/default-avatar.png'"
                                    class="w-8 h-8 rounded-full object-cover"
                                    :alt="authUser.name"
                                />
                            </template>
                            <component v-else :is="item.icon" class="w-6 h-6 mb-1" />
                            <span>{{ item.label }}</span>
                        </div>
                    </Link>
                    <button
                        v-else
                        @click="item.action"
                        class="flex items-center p-3 text-white hover:bg-gray-800 rounded-lg transition-colors w-full"
                    >
                        <div class="flex flex-col items-center mx-auto">
                            <component :is="item.icon" class="w-6 h-6 mb-1" />
                            <span>{{ item.label }}</span>
                        </div>
                    </button>
                </template>
            </nav>
        </div>

        <!-- Logout button -->
        <div class="px-4 mb-8 w-full">
            <Link
                :href="route('logout')"
                method="post"
                class="flex flex-col items-center justify-center p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full"
            >
                <div class="flex flex-col items-center mx-auto">
                    <ArrowLeftOnRectangleIcon class="w-6 h-6 mb-1" />
                    <span>Déconnexion</span>
                </div>
            </Link>
        </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-primary-black border-t border-gray-800 z-50">
        <nav class="flex justify-around items-center h-16 px-2">
            <template v-for="item in menuItems" :key="item.label">
                <Link 
                    v-if="item.path"
                    :href="item.path"
                    class="flex items-center justify-center p-2"
                >
                    <template v-if="item.path === route('profile', authUser.username)">
                        <img 
                            :src="authUser.avatar_path 
                                ? `/storage/${authUser.avatar_path}` 
                                : '/images/default-avatar.png'"
                            class="w-7 h-7 rounded-full object-cover"
                            :class="{ 'ring-2 ring-white': isCurrentPath(item.path) }"
                            :alt="authUser.name"
                        />
                    </template>
                    <component 
                        v-else
                        :is="isCurrentPath(item.path) ? item.activeIcon : item.icon" 
                        class="w-7 h-7 text-white"
                    />
                </Link>
                <button
                    v-else
                    @click="item.action"
                    class="flex items-center justify-center p-2"
                >
                    <component :is="item.icon" class="w-7 h-7 text-white" />
                </button>
            </template>
        </nav>
    </div>

    <!-- Post Modal -->
    <PostModal 
        :post="newPost"
        v-model="showModal"
        @post-created="handlePostCreated"
    />
</template>

<style scoped>
/* Optional: Add any additional responsive styles here */

/* Ensure that the main menu is perfectly centered */
.flex-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Adjust spacing if necessary */
.nav-item {
    /* Example: Add custom spacing or styles */
}
</style>

