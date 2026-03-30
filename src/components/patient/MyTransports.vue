<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { transportService } from '../../services/transportService'

const transports = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showFeedback = ref(false)
const showRating = ref(false)
const rating = ref(0)

const fetchTransports = async () => {
  loading.value = true
  error.value = null
  try {
    // TODO: À implémenter après
    throw new Error('Fonctionnalité à venir')
    // const data = await transportService.getAllTransports()
    // transports.value = data
  } catch (err) {
    console.error('Erreur lors de la récupération des transports:', err)
    error.value = 'Les transports seront bientôt disponibles'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchTransports()
})

const openDetails = () => {
  showFeedback.value = true
}
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← My transports
    </button>

    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Chargement des transports...</p>
    </div>

    <!-- Content -->
    <div v-else>
      <p class="text-gray-600 text-sm mb-6">Total transports: {{ transports.length }}</p>

      <div v-if="transports.length === 0" class="text-center py-8 text-gray-500">
        Aucun transport trouvé.
      </div>

      <!-- Transports List -->
      <div class="space-y-4">
        <div v-for="transport in transports" :key="transport.idtransport" class="bg-blue-600 text-white rounded-lg p-6">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-bold text-lg">Transport #{{ transport.idtransport }}</p>
              <p class="text-blue-100 text-sm">{{ transport.typetransport }}</p>
            </div>
            <button class="text-white hover:opacity-80">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div class="flex gap-6 mt-4 text-blue-100 text-sm flex-wrap">
            <span>📅 {{ transport.datetransport }}</span>
            <span>📍 {{ transport.lieudepart }} → {{ transport.lieuarrive }}</span>
          </div>
          <button @click="showFeedback = true" class="mt-4 w-full bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-100">
            Détails
          </button>
        </div>
      </div>
    </div>

    <!-- Feedback Modal -->
    <div v-if="showFeedback" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 border-4 border-purple-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Share your feedback</h2>
          <button @click="showFeedback = false" class="text-2xl">×</button>
        </div>
        
        <div class="space-y-4">
          <div>
            <p class="font-semibold mb-3">How was the transport ?</p>
            <div class="flex gap-3 justify-center">
              <button v-for="i in 5" :key="i" class="text-3xl hover:scale-110">😊</button>
            </div>
          </div>

          <div>
            <p class="font-semibold mb-2">Can you tell us more?</p>
            <textarea class="w-full border border-gray-300 rounded p-2" placeholder="Add feedback"></textarea>
          </div>

          <div>
            <p class="font-semibold mb-2">Rate the driver !</p>
            <div class="flex gap-2 justify-center">
              <button v-for="i in 5" :key="i" @click="rating = i" class="text-2xl" :class="i <= rating ? '⭐' : '☆'">
                {{ i <= rating ? '⭐' : '☆' }}
              </button>
            </div>
            <p class="text-xs text-gray-600 text-center mt-2">Help us improve our tool to best suit your needs by rating us here!</p>
          </div>
        </div>

        <div class="flex gap-3 mt-6">
          <button @click="showFeedback = false" class="flex-1 border border-gray-300 px-4 py-2 rounded font-semibold">Cancel</button>
          <button class="flex-1 bg-purple-600 text-white px-4 py-2 rounded font-semibold">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
