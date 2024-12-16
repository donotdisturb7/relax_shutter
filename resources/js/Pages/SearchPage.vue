<script setup>
import UserListItem from "@/Components/app/UserListItem.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { onMounted, ref } from 'vue';

const props = defineProps({
  search: String,
  users: Object,
})

const userList = ref([]);

onMounted(() => {
  if (props.users && props.users.data) {
    userList.value = props.users.data;
  }
})
</script>

<template>
  <AuthenticatedLayout>
    <div class="p-4">
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
  </AuthenticatedLayout>
</template>

