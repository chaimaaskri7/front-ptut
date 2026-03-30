<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { notificationService } from '../../services/notificationService'

const notifications = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const fetchNotifications = async () => {
  loading.value = true
  error.value = null
  try {
    const data = await notificationService.getAllNotifications()
    notifications.value = data
  } catch (err) {
    console.error('Erreur lors de la récupération des notifications:', err)
    error.value = 'Impossible de charger les notifications'
  } finally {
    loading.value = false
  }
}

const getIconBg = (type: string) => {
  const colors: Record<string, string> = {
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    success: 'bg-green-500',
  }
  return colors[type] || 'bg-blue-500'
}

onMounted(() => {
  fetchNotifications()
})
</script>

<template>
  <div class="p-6 bg-white">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">My Notifications</h1>
      <a href="#" class="text-[#4e55d7] text-sm font-semibold">Tout marquer comme lu</a>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Chargement des notifications...</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="notifications.length === 0" class="text-center py-8 text-gray-500">
      Aucune notification.
    </div>

    <!-- Notifications List -->
    <div v-else class="space-y-3">
      <div v-for="notification in notifications" :key="notification.id" class="bg-blue-50 rounded-lg p-4 flex gap-4 items-start border-l-4 border-blue-300">
        <!-- Icon -->
        <div :class="getIconBg(notification.type)" class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg mt-1">
          📢
        </div>

        <!-- Content -->
        <div class="flex-1">
          <p class="font-semibold text-gray-800">{{ notification.title }}</p>
          <p class="text-sm text-gray-600 mt-1">{{ notification.message }}</p>
          <p class="text-xs text-gray-500 mt-2">{{ notification.date }}</p>
        </div>

        <!-- Menu Icon -->
        <button class="flex-shrink-0 text-gray-400 hover:text-gray-600 pt-1">⋯</button>
      </div>
    </div>
  </div>
</template>
