<template>
  <div class="p-4">
    <div
      class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFileSelect"
        accept="image/*"
      />
      
      <div v-if="!selectedFile">
        <div class="text-gray-600 mb-4">
          Glissez une image ici ou
          <button
            @click="$refs.fileInput.click()"
            class="text-blue-500 hover:text-blue-600"
          >
            parcourez
          </button>
        </div>
      </div>
      
      <div v-else>
        <img
          :src="preview"
          class="max-w-full max-h-64 mx-auto mb-4"
          alt="Preview"
        />
        <div class="flex justify-center space-x-4">
          <button
            @click="upload"
            class="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Enregistrer
          </button>
          <button
            @click="reset"
            class="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  aspectRatio: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['uploaded'])

const fileInput = ref(null)
const selectedFile = ref(null)
const preview = ref(null)

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    processFile(file)
  }
}

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file) {
    processFile(file)
  }
}

const processFile = (file) => {
  if (file.type.startsWith('image/')) {
    selectedFile.value = file
    preview.value = URL.createObjectURL(file)
  }
}

const upload = () => {
  if (selectedFile.value) {
    emit('uploaded', selectedFile.value)
    reset()
  }
}

const reset = () => {
  selectedFile.value = null
  preview.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script> 