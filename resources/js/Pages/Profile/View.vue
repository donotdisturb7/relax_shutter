<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import { Head } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    
});
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>


</AuthenticatedLayout>
</template>
