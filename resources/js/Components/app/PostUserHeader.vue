<script setup>
import {Link} from '@inertiajs/vue3';


defineProps({
    post: {
        type: Object
    },
    showTime: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <div class="flex items-center gap-2 ">
        <Link :href="route('profile', post.user.username)">
            <img :src="post.user.avatar_url"
                 class="w-[40px] rounded-full border border-2 transition-all hover:border-blue-500"/>
        </Link>
        <div>
            <h4 class="flex items-center font-bold">
                <Link :href="route('profile', post.user.username)" class="hover:underline">
                    {{ post.user.name }}
                </Link>
                
            </h4>
            <small v-if="showTime" class="text-gray-400">{{ post.updated_at }}</small>
        </div>
    </div>
</template>

<style scoped>

</style>
