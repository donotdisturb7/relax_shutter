<template>
    <div>
      <h1>Profil de {{ user.data.name }}</h1>
      <p>Username: {{ user.data.username }}</p>

      <div>
        <h2>Informations</h2>
        <p>Email: {{ user.data.email }}</p>
        <p>Créé le: {{ new Date(user.data.created_at).toLocaleDateString() }}</p>
      </div>

      <div>
        <h2>Posts</h2>
        <p>Nombre de posts : {{ posts.meta.total}}</p>
        <div v-if="posts.data.length === 0">
          Aucun post pour le moment
        </div>
      </div>

      <div>
        <h2>Followers</h2>
        <p>Nombre de followers : {{ localFollowerCount }}</p>
        <button 
          @click="toggleFollow" 
          class="follow-button"
          :class="{ 'following': isFollowing }"
        >
          {{ isFollowing ? 'Ne plus suivre' : 'Suivre' }}
        </button>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'

  const props = defineProps({
    user: {
      type: Object,
      default: () => ({})
    },
    posts: {
      type: Object,
      default: () => ({ data: [], meta: {} })
    },
    photos: {
      type: Object,
      default: () => ({ data: [] })
    },
    isCurrentUserFollower: {
      type: Boolean,
      default: false
    },
    followerCount: {
      type: Number,
      default: 0
    }
  })

  const isFollowing = ref(props.isCurrentUserFollower)
  const localFollowerCount = ref(props.followerCount)

  const toggleFollow = async () => {
    try {
      const response = await axios.post(route('user.follow', { user: props.user.data.id }))
      isFollowing.value = response.data.following
      localFollowerCount.value += response.data.following ? 1 : -1
    } catch (error) {
      console.error('Error toggling follow status:', error)
      // Optionnel : Ajout d'une notification d'erreur pour l'utilisateur
    }
  }
  </script>

  <style scoped>
  .profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .follow-button {
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .follow-button:hover {
    background-color: #2563eb;
  }

  .follow-button.following {
    background-color: #ef4444;
  }

  .follow-button.following:hover {
    background-color: #dc2626;
  }
  </style>
