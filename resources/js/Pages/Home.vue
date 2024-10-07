<script setup>
import {Head, Link} from '@inertiajs/vue3';

import CreatePost from "@/Components/app/CreatePost.vue";
import PostList from "@/Components/app/PostList.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineProps({
    posts: Object,
    followings: Array
});
</script>

<template>
    <Head title="Relax Shutter"/>

    <AuthenticatedLayout>

        <div class="">
 
            <div class="">
                <CreatePost/>
                <PostList :posts="posts.data" class="flex-1"/>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>

</style>