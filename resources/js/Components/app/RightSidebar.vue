<template>
    <div class="w-64 bg-white h-screen fixed right-0 top-0 pt-20">
        <div class="px-4">
            <h2 class="text-xl font-semibold mb-4">Personnes suivies</h2>
            
            <div v-if="followings.length === 0" class="text-gray-500 text-center py-4">
                Vous ne suivez personne pour le moment
            </div>
            
            <ul class="space-y-3">
                <li v-for="user in followings" :key="user.id">
                    <Link 
                        v-if="user.username"
                        :href="route('profile', user.username)"
                        class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg"
                    >
                        <Avatar :user="user" size="md" />
                        <div>
                            <div class="font-medium">{{ user.name }}</div>
                            <div class="text-sm text-gray-500">@{{ user.username }}</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import Avatar from '@/Components/app/Avatar.vue';

defineProps({
    followings: {
        type: Array,
        default: () => [],
    }
    
});
</script> 