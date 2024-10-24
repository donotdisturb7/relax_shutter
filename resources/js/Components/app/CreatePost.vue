<script setup>

import {ref} from "vue";
import {useForm, usePage} from "@inertiajs/vue3";
import PostModal from "@/Components/app/PostModal.vue";

const authUser = usePage().props.auth.user;

const showModal = ref(false)
const newPost = ref({
    id: null,
    body: '',
    user: authUser
})



function showCreatePostModal() {
    showModal.value = true
}

</script>

<template>
    <div class="p-4 bg-white  rounded-lg border  mb-3">

        <div @click="showCreatePostModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Creer un nouveau post
        </div>

        <PostModal :post="newPost"  v-model="showModal"/>
    </div>
</template>

<style scoped>

</style>
