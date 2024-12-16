<script setup>
import { ref } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    size: {
        type: String,
        default: 'lg' // sm, md, lg
    }
});

const hasError = ref(false);
const defaultAvatar = '/images/default-avatar.png';

const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
};

const handleError = () => {
    hasError.value = true;
};
</script>

<template>
    <img 
        :src="hasError || !user.avatar_path ? defaultAvatar : `/storage/${user.avatar_path}`"
        :class="[sizeClasses[size], 'rounded-full object-cover']"
        :alt="user.name"
        @error="handleError"
    />
</template> 