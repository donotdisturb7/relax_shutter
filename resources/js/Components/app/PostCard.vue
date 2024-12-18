<script setup>
import { ref, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import { 
    EllipsisHorizontalIcon,
    HeartIcon,
    DocumentIcon
} from '@heroicons/vue/24/outline'
import axios from 'axios'
import Avatar from '@/Components/app/Avatar.vue'

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['deleted'])

const showOptions = ref(false)
const hasReacted = ref(props.post.has_reacted)

const isOwner = computed(() => {
    return props.post.user.id === usePage().props.auth.user.id
})

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

const isImage = (mime) => {
    return mime.startsWith('image/')
}

const toggleReaction = async () => {
    try {
        const response = await axios.post(route('post.reaction', props.post.id))
        hasReacted.value = response.data.current_user_has_reaction
        props.post.reactions_count = response.data.num_of_reactions
    } catch (error) {
        console.error('Erreur lors de la réaction:', error)
    }
}


const deletePost = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce post ?')) return

    try {
        await axios.delete(route('posts.destroy', props.post.id))
        emit('deleted')
    } catch (error) {
        console.error('Erreur lors de la suppression:', error)
    }
}


const downloadFile = (attachment) => {
    window.location.href = route('posts.attachment.download', attachment.id)
}

const openLightbox = (attachment) => {
    // À implémenter : ouverture d'une lightbox pour les images
}
</script> 

<template>
    <div class="bg-primary-black  rounded-lg shadow-sm mb-4 p-4">
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
                <Link :href="route('profile', post.user.username)">
                    <Avatar :user="post.user" size="md" />
                </Link>
                <div>
                    <Link 
                        :href="route('profile', post.user.username)"
                        class="font-semibold hover:underline"
                    >
                        {{ post.user.name }}
                    </Link>
                    <p class="text-sm text-gray-500">
                        {{ formatDate(post.created_at) }}
                    </p>
                </div>
            </div>

            <!-- Menu Options (if owner) -->
            <div v-if="isOwner" class="relative">
                <button 
                    @click="showOptions = !showOptions"
                    class="p-1 rounded-full hover:bg-gray-100"
                >
                    <EllipsisHorizontalIcon class="w-6 h-6 text-gray-500" />
                </button>
                
                <div v-if="showOptions" class="absolute right-0 mt-2 w-48 bg-primary-black rounded-md shadow-lg z-50">
                    <div class="py-1">

                        <button 
                            @click="deletePost"
                            class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="mb-4">
            <p class="text-gray-800 whitespace-pre-wrap">{{ post.content }}</p>
        </div>

        <!-- Attachments -->
        <div v-if="post.attachments && post.attachments.length" class="mb-4">
            <div class="grid grid-cols-2 gap-2">
                <div 
                    v-for="attachment in post.attachments" 
                    :key="attachment.id"
                    class="relative aspect-square rounded-lg overflow-hidden"
                >
                    <img 
                        v-if="isImage(attachment.mime)"
                        :src="`/storage/${attachment.path}`"
                        :alt="attachment.name"
                        class="w-full h-full object-cover"
                        @click="openLightbox(attachment)"
                    />
                    <div 
                        v-else
                        class="w-full h-full flex items-center justify-center bg-gray-100"
                        @click="downloadFile(attachment)"
                    >
                        <DocumentIcon class="w-12 h-12 text-gray-400" />
                        <span class="text-sm text-gray-600">{{ attachment.name }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between pt-4 border-t">
            <div class="flex space-x-4">
                <button 
                    @click="toggleReaction"
                    class="flex items-center space-x-1 text-gray-500 hover:text-blue-500"
                    :class="{ 'text-blue-500': hasReacted }"
                >
                    <HeartIcon 
                        :class="[
                            'w-6 h-6',
                            { 'fill-current': hasReacted }
                        ]"
                    />
                    <span>{{ post.reactions_count || 0 }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

