<script setup>
import { onMounted, ref } from 'vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import TextInput from "@/Components/ui/TextInput.vue";
import { MoonIcon } from '@heroicons/vue/24/solid'
import LeftSidebar from '@/Components/app/LeftSidebar.vue';
import RightSidebar from '@/Components/app/RightSidebar.vue';


defineProps({
    followings: {
        type: Array,
        default: () => [],
    }
});
const showingNavigationDropdown = ref(false);
const keywords = ref(usePage().props.search || '');

const authUser = usePage().props.auth.user;

function search() {
    router.get(route('search', encodeURIComponent(keywords.value)))
}
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Navbar existant -->
        <nav class="bg-white border-b border-gray-100 fixed w-full z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between gap-2 h-16">
                    <div class="flex mr-2">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <Link :href="route('home')">
                                <img class="block h-9 w-auto fill-current text-gray-800 " src="assets/logoRF.png" alt="">
                            </Link>
                        </div>
                    </div>
                    <TextInput v-model="keywords" placeholder="Search on the website" class="w-full"
                    @keyup.enter="search"/>


                    <div class="hidden sm:flex sm:items-center">
                        <!-- Settings Dropdown -->
                        <div class="ms-3 relative">
                            <Dropdown v-if="authUser" >
                                <template #trigger>
                                    <span class="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {{ authUser.name }}
                                            <svg
                                                class="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </template>

                                <template #content>
                                    <div class=" right-0 mt-2 w-48 rounded-md shadow-lg bg-white  z-50">
                                        <DropdownLink :href="route('profile', {username: authUser.username })">
                                            Profile
                                        </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Se deconnecter
                                        </DropdownLink>
                                    </div>
                                </template>
                            </Dropdown>
                            <div v-else>
                                <Link :href="route('login')" class="">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>

        
                  
                </div>
            </div>
        </nav>


        <div class="flex">

            <LeftSidebar />

            
            <main class="flex-1 ml-64 mr-64 pt-20">
                <slot />
            </main>

            
            <RightSidebar :followings="followings" />
        </div>
    </div>
</template>

