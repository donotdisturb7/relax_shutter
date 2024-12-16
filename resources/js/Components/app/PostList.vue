<script setup>

import PostModal from "@/Components/app/PostModal.vue";
import {onMounted, ref, watch} from "vue";
import {usePage} from "@inertiajs/vue3";
import AttachmentPreviewModal from "@/Components/app/AttachmentPreviewModal.vue";
import axiosClient from "@/axiosClient.js";

const page = usePage();

const authUser = usePage().props.auth.user;
const showEditModal = ref(false)
const showAttachmentsModal = ref(false)
const editPost = ref({})
const previewAttachmentsPost = ref({})
const loadMoreIntersect = ref(null)

const allPosts = ref({
    data: [],
    next: null
})


watch(() => page.props.posts, () => {
    if (page.props.posts) {
        allPosts.value = {
            data: page.props.posts.data,
            next: page.props.posts.links?.next
        }
    }
}, {deep: true, immediate: true})



function onModalHide() {
    editPost.value = {
        id: null,
        body: '',
        user: authUser
    }
}

function loadMore() {
    if (!allPosts.value.next) {
        return;
    }

    axiosClient.get(allPosts.value.next)
        .then(({data}) => {
            allPosts.value.data = [...allPosts.value.data, ...data.data]
            allPosts.value.next = data.links.next
        })
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => entries.forEach(entry => entry.isIntersecting && loadMore()), {
            rootMargin: '-250px 0px 0px 0px'
        })

    observer.observe(loadMoreIntersect.value)
})
</script>

<template>
    <div class="overflow-auto">

        <div ref="loadMoreIntersect"></div>

        <PostModal :post="editPost" v-model="showEditModal" @hide="onModalHide"/>
        <AttachmentPreviewModal :attachments="previewAttachmentsPost.post?.attachments || []"
                                v-model:index="previewAttachmentsPost.index"
                                v-model="showAttachmentsModal"/>
    </div>
</template>

