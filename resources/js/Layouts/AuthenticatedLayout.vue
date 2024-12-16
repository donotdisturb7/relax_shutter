<script setup>
import { onMounted, ref, computed } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import LeftSidebar from '@/Components/app/LeftSidebar.vue';

import Navbar from '@/Components/app/Navbar.vue';


defineProps({
    followings: {
        type: Array,
        default: () => [],
    }
});

const keywords = ref(usePage().props.search || '');



const isProfileRoute = computed(() => {
    return route().current('profile');
});

function search() {
    router.get(route('search', encodeURIComponent(keywords.value)))
}
</script>

<template>

        <div>
            <Navbar/>
            <LeftSidebar />

            
            <main :class=" { 
                '': !isProfileRoute, 
                '': isProfileRoute,
                
            }">
                <slot />
            </main>

    </div>
</template>

