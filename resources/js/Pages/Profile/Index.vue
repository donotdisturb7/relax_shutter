<script setup>
import { ref } from 'vue'
import { Head, Link } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import PostCard from '@/Components/app/PostCard.vue'
import ImageModal from '@/Components/app/ImageModal.vue'
import ImageUpload from '@/Components/app/ImageUpload.vue'
import { PencilIcon } from '@heroicons/vue/24/solid'
import axios from 'axios'


const props = defineProps({
  user: Object,
  stats: Object,
  posts: Object,
  isCurrentUserFollower: Boolean,
  isOwnProfile: Boolean,
})

const isFollowing = ref(props.isCurrentUserFollower)
const avatarModal = ref(null)
const coverModal = ref(null)

const toggleFollow = async () => {
  try {
    const response = await axios.post(route('user.follow', { user: props.user.id }))
    isFollowing.value = response.data.following
  } catch (error) {
    console.error('Erreur lors du follow/unfollow:', error)
  }
}
const openAvatarUpload = () => {
  avatarModal.value.open()
}

const openCoverUpload = () => {
  coverModal.value.open()
}

const handleCoverUpload = async (file) => {
  const formData = new FormData()
  formData.append('cover', file)
  formData.append('type', 'cover')
  
  try {
    await axios.post(route('profile.updateImages'), formData)
    window.location.reload()
  } catch (error) {
    console.error('Erreur lors du téléchargement de la couverture:', error)
  }
}

const refreshPosts = () => {
  window.location.reload()
}
</script>




<template>
  <AuthenticatedLayout>
    <Head :title="`Profil de ${user.name}`" />

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <!-- Cover Photo -->
      <div class="relative h-64 w-full rounded-lg overflow-hidden mb-16 bg-white dark:bg-slate-800">
        <img
          :src="user.cover_path ? `/storage/${user.cover_path}` : '/images/default-cover.png'"
          class="w-full h-full object-cover"
          alt="Cover photo"
        />
        
        <!-- Profile Picture -->
        <div class="absolute -bottom-12 left-8">
          <div class="relative">
            <img
              :src="user.avatar_path && user.avatar_path.length > 0 
                    ? `/storage/${user.avatar_path}` 
                    : '/images/default-avatar.png'"
              class="w-32 h-32 rounded-full border-4 border-white object-cover"
              :alt="user.name"
            />
            <div class="text-sm text-gray-500">Debug: {{ user.avatar_path }}</div>
            <button
              v-if="isOwnProfile"
              @click="openAvatarUpload"
              class="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2"
            >
              <PencilIcon class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Cover Photo Edit Button -->
        <button
          v-if="isOwnProfile"
          @click="openCoverUpload"
          class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Modifier la couverture
        </button>
      </div>

      <!-- Profile Info -->
      <div class="px-8">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-black">{{ user.name }}</h1>
            <p class="text-gray-600 dark:text-gray-400">@{{ user.username }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Membre depuis {{ new Date(user.created_at).toLocaleDateString() }}
            </p>
          </div>

          <div class="flex gap-2">
            <template v-if="isOwnProfile">

              <Link
                :href="route('profile.edit')"
                class="px-6 py-2 rounded-full font-medium bg-black-200 hover:bg-gray-300 text-gray-700"
              >
                Modifier le profil
              </Link>
            </template>
            <template v-else>
              <!-- Show Follow/Unfollow button if it's not own profile -->
              <button
                @click="toggleFollow"
                class="px-6 py-2 rounded-full font-medium"
                :class="isFollowing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'"
              >
                {{ isFollowing ? 'Ne plus suivre' : 'Suivre' }}
              </button>
            </template>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex space-x-8 mt-6 border-b border-gray-200 dark:border-slate-700 pb-4">
          <div class="text-center">
            <span class="block font-bold text-xl">{{ stats.posts_count }}</span>
            <span class="text-gray-600">Publications</span>
          </div>
          <div class="text-center">
            <span class="block font-bold text-xl">{{ stats.followers_count }}</span>
            <span class="text-gray-600">Abonnés</span>
          </div>
          <div class="text-center">
            <span class="block font-bold text-xl">{{ stats.following_count }}</span>
            <span class="text-gray-600">Abonnements</span>
          </div>
        </div>

        <!-- Posts -->
        <div class="mt-8">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Publications</h2>
          <div v-if="posts.data.length === 0" class="text-center py-8 text-gray-500">
            Aucune publication pour le moment
          </div>
          <div v-else class="space-y-6">
            <PostCard
              v-for="post in posts.data"
              :key="post.id"
              :post="post"
              @deleted="refreshPosts"
            />
           
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <ImageModal ref="coverModal" title="Modifier la photo de couverture">
      <ImageUpload
        @uploaded="handleCoverUpload"
        :aspect-ratio="2.5"
      />
    </ImageModal>
  </AuthenticatedLayout>
</template>

