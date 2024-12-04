<template>
    <button
        :class="[
            'btn',
            `btn-${variant}`,
            size && `btn-${size}`,
            { 'btn-loading': loading }
        ]"
        :disabled="disabled || loading"
        @click="$emit('click', $event)"
    >
        <span v-if="loading" class="spinner" />
        <slot />
    </button>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: value => ['primary', 'secondary', 'danger', 'outline'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validator: value => ['sm', 'md', 'lg'].includes(value)
    },
    loading: Boolean,
    disabled: Boolean
})
</script>

<style scoped>
.btn {
    @apply font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center;
}

.btn-primary {
    @apply bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)];
}

/* ... autres styles ... */
</style> 