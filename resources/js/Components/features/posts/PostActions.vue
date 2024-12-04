<script setup>
defineProps({
  isLiked: Boolean,
  likesCount: Number,
  commentsCount: Number
})
</script>

<template>
    <div class="flex items-center space-x-4">
        <button 
            @click="$emit('like')"
            class="post-action-btn"
            :class="{ 'active': isLiked }"
        >
            <HeartIcon />
            <span>{{ likesCount }}</span>
        </button>
        
        <button 
            @click="$emit('comment')"
            class="post-action-btn"
        >
            <ChatBubbleLeftIcon />
            <span>{{ commentsCount }}</span>
        </button>
    </div>
</template> 