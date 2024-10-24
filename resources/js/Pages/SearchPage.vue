<script setup>
import UserListItem from "@/Components/app/UserListItem.vue";
import PostList from "@/Components/app/PostList.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { onMounted, ref } from 'vue';

const props = defineProps({
  search: String,
  users: Object,
  posts: Object
})

const userList = ref([]);

onMounted(() => {
  console.log('Users prop:', props.users);
  if (props.users && props.users.data) {
    userList.value = props.users.data;
    console.log('Processed user list:', userList.value);
  }
})
</script>

<template>
  <AuthenticatedLayout>
    <div class="p-4">
      <div v-if="!search.startsWith('#')" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="shadow bg-white p-3 rounded mb-3">
          <h2 class="text-lg font-bold">Utilisateurs</h2>
          <div class="grid-cols-2">
            <template v-if="userList.length">
              <UserListItem 
                v-for="user in userList" 
                :key="user.id" 
                :user="user"
              />
            </template>
            <div v-else class="py-8 text-center text-gray-500">
              Aucun utilisateur trouvé.
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-bold">Publications</h2>
        <PostList 
          v-if="posts && posts.data && posts.data.length" 
          :posts="posts.data" 
          class="flex-1"
        />
        <div v-else class="py-8 text-center text-gray-500">
          Aucune publication trouvée.
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
</style>