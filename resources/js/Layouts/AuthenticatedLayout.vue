<script setup>
import { onMounted, ref, computed } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import TextInput from "@/Components/ui/TextInput.vue";
import LeftSidebar from '@/Components/app/LeftSidebar.vue';
import RightSidebar from '@/Components/app/RightSidebar.vue';
import Navbar from '@/Components/app/Navbar.vue';


defineProps({
    followings: {
        type: Array,
        default: () => [],
    }
});
const showingNavigationDropdown = ref(false);
const keywords = ref(usePage().props.search || '');

const authUser = usePage().props.auth.user;

const isProfileRoute = computed(() => {
    return route().current('profile');
});

function search() {
    router.get(route('search', encodeURIComponent(keywords.value)))
}
</script>

<template>
 

       


        <div class="flex">
            <Navbar/>
            <LeftSidebar />

            
            <main :class="{ 
                'flex-1 ml-64 mr-64 pt-20': !isProfileRoute, 
                'flex-1 ml-64 pt-20': isProfileRoute 
            }">
                <slot />
            </main>

            
            <RightSidebar 
                v-if="!isProfileRoute" 
                :followings="followings" 
            />
        
    </div>
</template>

