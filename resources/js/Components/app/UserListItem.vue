<script setup>
import { Link } from '@inertiajs/vue3'
import PrimaryButton from "@/Components/ui/PrimaryButton.vue";
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
  <div v-if="isUserDefined" class="bg-nal dark:bg-slate-900 dark:text-gray-100 transition-all border-2 border-transparent hover:border-indigo-500">
    <div class="flex items-center gap-2 py-2 px-2">
      <Link v-if="user.username" :href="route('profile', user.username)">
        <img v-if="user.avatar_url" :src="user.avatar_url" class="w-[32px] rounded-full" alt="User avatar"/>
      </Link>
      <div class="flex justify-between flex-1">
        <Link v-if="user.username" :href="route('profile', user.username)">
          <h3 class="font-black hover:underline">{{ user.name }}</h3>
        </Link>
      </div>
    </div>
  </div>

</template>
