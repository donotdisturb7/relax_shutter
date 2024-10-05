<script setup>
import {Head, Link} from '@inertiajs/vue3';
// import GroupList from "@/Components/app/GroupList.vue";
// import FollowingList from "@/Components/app/FollowingList.vue";
// import CreatePost from "@/Components/app/CreatePost.vue";
// import PostList from "@/Components/app/PostList.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineProps({
    posts: Object,
    groups: Array,
    followings: Array
});
</script>

<template>
    <Head title="Social Media Website"/>

    <AuthenticatedLayout>
<!--        <pre>{{posts}}</pre>-->

    </AuthenticatedLayout>
</template>

<style>

</style>