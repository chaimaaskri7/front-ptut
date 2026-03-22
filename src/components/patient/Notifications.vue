<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref([
  { id: '001', type: 'transport', message: 'Votre transport est arrivé', date: '2025-03-20 14:30' },
  { id: '002', type: 'appointment', message: 'Rendez-vous demain à 10h00', date: '2025-03-20 10:15' },
  { id: '003', type: 'payment', message: 'Paiement de 500€ confirmé', date: '2025-03-19 16:45' },
  { id: '004', type: 'info', message: 'Nouvelle politique de confidentialité', date: '2025-03-18 09:00' },
])

const getIcon = (type: string) => {
  const icons: Record<string, string> = {
    transport: '🚗',
    appointment: '📅',
    payment: '💳',
    info: 'ℹ️',
  }
  return icons[type] || '📬'
}

const getColor = (type: string) => {
  const colors: Record<string, string> = {
    transport: 'border-l-4 border-blue-500',
    appointment: 'border-l-4 border-purple-500',
    payment: 'border-l-4 border-green-500',
    info: 'border-l-4 border-gray-500',
  }
  return colors[type] || ''
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Notifications</h1>

    <div class="space-y-3">
      <div v-for="notification in notifications" :key="notification.id" :class="getColor(notification.type)" class="bg-white rounded-lg shadow p-4">
        <div class="flex items-start">
          <span class="text-2xl mr-3">{{ getIcon(notification.type) }}</span>
          <div class="flex-1">
            <p class="font-semibold text-gray-800">{{ notification.message }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ notification.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
