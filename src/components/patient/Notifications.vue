<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref([
  { 
    id: '001', 
    type: 'info',
    icon: '👤',
    title: 'Le transporteur Jean D. est en route.',
    subtitle: 'ETA: 15 minutes.',
    date: '2m',
    color: 'bg-blue-100'
  },
  { 
    id: '002', 
    type: 'warning',
    icon: '⚠️',
    title: 'Votre trajet du 23 juin pour 18:30 est confirmé.',
    subtitle: 'Transporteur : AmbuSt, Olivier C. Cliquer pour régler le trajet.',
    date: 'now',
    color: 'bg-yellow-100'
  },
  { 
    id: '003', 
    type: 'document',
    icon: '📄',
    title: 'Dr Martin a prescrit un trajet pour votre prochain rendez-vous.',
    subtitle: 'BonDeTransport.pdf 2.2 MB',
    date: '14h',
    color: 'bg-gray-100'
  },
  { 
    id: '004', 
    type: 'success',
    icon: '✓',
    title: 'Trajet terminé.',
    subtitle: 'Distance parcourue : 8,4 km. Remboursement en cours via l...',
    date: '15h',
    color: 'bg-green-100'
  },
])

const getIconBg = (type: string) => {
  const colors: Record<string, string> = {
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    document: 'bg-gray-400',
    success: 'bg-green-500',
  }
  return colors[type] || 'bg-blue-500'
}
</script>

<template>
  <div class="p-6 bg-white">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">My Notifications</h1>
      <a href="#" class="text-[#4e55d7] text-sm font-semibold">Tout marquer comme lu</a>
    </div>

    <div class="space-y-3">
      <div v-for="notification in notifications" :key="notification.id" class="bg-blue-50 rounded-lg p-4 flex gap-4 items-start border-l-4 border-blue-300">
        <!-- Icon -->
        <div :class="getIconBg(notification.type)" class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg mt-1">
          {{ notification.icon }}
        </div>

        <!-- Content -->
        <div class="flex-1">
          <p class="font-semibold text-gray-800">{{ notification.title }}</p>
          <p class="text-sm text-gray-600 mt-1">{{ notification.subtitle }}</p>
          <p class="text-xs text-gray-500 mt-2">{{ notification.date }}</p>
        </div>

        <!-- Menu Icon -->
        <button class="flex-shrink-0 text-gray-400 hover:text-gray-600 pt-1">⋯</button>
      </div>
    </div>
  </div>
</template>
