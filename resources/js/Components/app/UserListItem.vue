<script setup>
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  
})

const isUserDefined = computed(() => {
  console.log('User prop:', props.user);
  return props.user !== undefined && props.user !== null;
});

</script>

<template>
  <div v-if="isUserDefined" class="py-8 px-8 max-w-sm mx-auto bg-primary-black  rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img  :src="user.avatar_url" class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" alt="User avatar">
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          {{ user.name }}
        </p>
        <p class="text-slate-500 font-medium">
          @{{ user.username }}
        </p>
      </div>
      <Link 
        v-if="user.username" 
        :href="route('profile', user.username)" 
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Profile
      </Link>
    </div>
  </div>
</template>
