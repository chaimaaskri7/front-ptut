<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref([
  { 
    id: '001', 
    type: 'transport', 
    message: 'Le transporteur Jean D. est en route. ETA: 15 minutes.', 
    date: '7m',
    avatar: '👤',
    detail: 'Jean D.'
  },
  { 
    id: '002', 
    type: 'appointment', 
    message: 'Votre trajet du 23 juin pour 18:30 est confirmé. Transporteur : AmbuSt, Olivier C. Cliquer pour régler le trajet.',
    date: 'now',
    avatar: '🚕',
    detail: 'AmbuSt Transport'
  },
  { 
    id: '003', 
    type: 'doctor', 
    message: 'Dr Martin a prescrit un trajet pour votre prochain rendez-vous. BonDeTransport.pdf 2.2 MB',
    date: '14h',
    avatar: '👨‍⚕️',
    detail: 'Dr Martin'
  },
  { 
    id: '004', 
    type: 'success', 
    message: 'Trajet terminé. Distance parcourue: 8.4 km. Remboursement en cours via l...',
    date: '15h',
    avatar: '✓',
    detail: 'Transport Completed'
  },
])

const getColorClass = (type: string) => {
  if (type === 'doctor') return 'border-l-4 border-blue-500 bg-blue-50'
  if (type === 'transport') return 'border-b-2 border-gray-200 bg-white'
  if (type === 'success') return 'border-l-4 border-green-500 bg-white'
  return 'border-b border-gray-200 bg-white'
}
</script>

<template>
  <div class="p-6 bg-white">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Notifications</h1>
      <a href="#" class="text-[#4e55d7] text-sm">Tout marquer comme lu</a>
    </div>

    <div class="space-y-3">
      <div v-for="notification in notifications" :key="notification.id" :class="getColorClass(notification.type)" class="rounded-lg p-4 flex gap-4">
        <div class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center text-xl">
          {{ notification.avatar }}
        </div>
        <div class="flex-1">
          <p class="font-semibold text-gray-800">{{ notification.message }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ notification.date }}</p>
        </div>
        <button class="flex-shrink-0 text-2xl hover:opacity-70">⋯</button>
      </div>
    </div>
  </div>
</template>
