<script setup lang="ts">
import { ref, computed } from 'vue'

const transports = ref([
  { 
    id: '001', 
    carrier: 'Jean D.', 
    company: 'AmbuSt, VSL',
    date: 'lundi 23 juin 2025',
    time: '10:00 - 10:30',
    status: 'Tout' as const,
    distance: '5.2km',
    color: 'blue'
  },
  { 
    id: '002', 
    carrier: 'Jean D.', 
    company: 'AmbuSt, VSL',
    date: 'lundi 23 juin 2025',
    time: '11:00 - 11:30',
    status: 'Terminé' as const,
    distance: '8.2km',
    color: 'blue'
  },
  { 
    id: '003', 
    carrier: 'Hélène A.', 
    company: 'Taxi Côte, taxi conventionné',
    date: 'mercredi 7 mars 2025',
    time: '8:30 - 9:00',
    status: 'Terminé' as const,
    distance: '12.5km',
    color: 'green'
  },
])

const showFeedback = ref(false)
const showRating = ref(false)
const rating = ref(0)

const openDetails = () => {
  showFeedback.value = true
}
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← My transports
    </button>

    <p class="text-gray-600 text-sm mb-6">The upcoming transport:</p>

    <!-- Upcoming Transports -->
    <div class="space-y-4 mb-8">
      <div v-for="transport in transports.slice(0, 2)" :key="transport.id" class="bg-blue-600 text-white rounded-lg p-6">
        <div class="flex justify-between items-center">
          <div class="flex gap-4 items-center flex-1">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">👤</div>
            <div>
              <p class="font-bold text-lg">{{ transport.carrier }}</p>
              <p class="text-blue-100">{{ transport.company }}</p>
            </div>
          </div>
          <button class="text-white hover:opacity-80">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div class="flex gap-6 mt-4 text-blue-100 text-sm">
          <span>📅 {{ transport.date }}</span>
          <span>🕐 {{ transport.time }}</span>
        </div>
        <div class="flex gap-3 mt-4">
          <button class="bg-blue-500 px-4 py-2 rounded font-semibold hover:bg-blue-700">Tout</button>
          <button class="bg-transparent border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-blue-600">Terminé</button>
          <button class="bg-transparent border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-blue-600">À venir</button>
        </div>
      </div>

      <!-- Third Transport (Different Color) -->
      <div class="bg-green-600 text-white rounded-lg p-6">
        <div class="flex justify-between items-center">
          <div class="flex gap-4 items-center flex-1">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">👩</div>
            <div>
              <p class="font-bold text-lg">Hélène A.</p>
              <p class="text-green-100">Taxi Côte, taxi conventionné</p>
            </div>
          </div>
          <button class="text-white hover:opacity-80">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div class="flex gap-6 mt-4 text-green-100 text-sm">
          <span>📅 mercredi 7 mars 2025</span>
          <span>🕐 8:30 - 9:00</span>
        </div>
        <button class="mt-4 w-full bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-100">Détails</button>
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
