<template>
    <div class="w-64 bg-white shadow-lg h-screen fixed right-0 top-0 pt-20">
        <div class="px-4">
            <h2 class="text-xl font-semibold mb-4">Personnes suivies</h2>
            
            <div v-if="followings.length === 0" class="text-gray-500 text-center py-4">
                Vous ne suivez personne pour le moment
            </div>
            
            <ul class="space-y-3">
                <li v-for="user in followings" :key="user.id">
                    <Link 
                        :href="`/profile/${user.id}`"
                        class="flex items-center p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <img 
                            :src="user.avatar || '/default-avatar.png'" 
                            :alt="user.name"
                            class="w-10 h-10 rounded-full object-cover"
                        >
                        <div class="ml-3">
                            <p class="font-medium text-sm">{{ user.name }}</p>
                            <p class="text-xs text-gray-500">@{{ user.username }}</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    followings: {
        type: Array,
        default: () => [],
    }
});
</script> 