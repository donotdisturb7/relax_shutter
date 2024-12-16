<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="">
        <div>
            <Link href="/">
                <img class="w-20 h-20" src="/assets/logoRF.png" alt="Logo">
            </Link>
        </div>

        <div >
            <slot />
        </div>
    </div>
</template> 