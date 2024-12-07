<script setup>
import { ref } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import ImageModal from '@/Components/app/ImageModal.vue'
import ImageUpload from '@/Components/app/ImageUpload.vue'

const props = defineProps({
  user: Object,
})

const avatarModal = ref(null)

const form = useForm({
  name: props.user.name,
  username: props.user.username,
  is_private: props.user.is_private || false,
})

const submit = () => {
  form.patch(route('profile.update'), {
    onSuccess: () => {
      //Redirection vers la page du profil après la mise à jour
      window.location.href = route('profile', props.user.username)
    },
  })
}

const openAvatarUpload = () => {
  avatarModal.value.open()
}

const handleAvatarUpload = async (file) => {
  const formData = new FormData()
  formData.append('avatar', file)
  formData.append('type', 'avatar')
  
  try {
    await axios.post(route('profile.updateImages'), formData)
    window.location.reload()
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'avatar:', error)
  }
}
</script>

<template>
  <AuthenticatedLayout>
    <Head title="Modifier le profil" />

    <div class="max-w-2xl mx-auto sm:px-6 lg:px-8 py-8">
      <div class="bg-white dark:bg-slate-800 shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold mb-6">Modifier le profil</h1>

        <form @submit.prevent="submit" class="space-y-6">
          <!-- Avatar -->
          <div class="flex items-center space-x-4">
            <img
              :src="user.avatar_path ? `/storage/${user.avatar_path}` : '/images/default-avatar.png'"
              class="w-20 h-20 rounded-full object-cover"
              :alt="user.name"
            />
            <button
              type="button"
              @click="openAvatarUpload"
              class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
            >
              Changer la photo
            </button>
          </div>

          <!-- Nom d'affichage -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom d'affichage
            </label>
            <input
              v-model="form.name"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <!-- Username
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom d'utilisateur
            </label>
            <input
              v-model="form.username"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div> -->

          <!-- Compte privé/public -->
          <div class="flex items-center space-x-2">
            <input
              v-model="form.is_private"
              type="checkbox"
              class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Compte privé
            </label>
          </div>

          <!-- Boutons -->
          <div class="flex justify-end space-x-3">
            <Link
              :href="route('profile', user.username)"
              class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </Link>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600"
              :disabled="form.processing"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal pour l'upload d'avatar -->
    <ImageModal ref="avatarModal" title="Modifier la photo de profil">
      <ImageUpload
        @uploaded="handleAvatarUpload"
        :aspect-ratio="1"
      />
    </ImageModal>
  </AuthenticatedLayout>
</template>

