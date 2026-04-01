<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { notificationService } from '../../services/notificationService'
import { useAuthStore } from '../../stores/authStore'

const auth = useAuthStore()
const notifications = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const fetchNotifications = async () => {
  loading.value = true
  error.value = null
  try {
    const patientId = auth.userId.value
    if (!patientId) {
      error.value = 'ID patient non trouvé'
      return
    }
    const data = await notificationService.getNotificationsByPatient(patientId)
    notifications.value = data
  } catch (err) {
    console.error('Erreur lors de la récupération des notifications:', err)
    error.value = 'Impossible de charger les notifications'
  } finally {
    loading.value = false
  }
}

const getIconAndColor = (type: string) => {
  const icons: Record<string, { icon: string; bg: string; border: string }> = {
    PRESCRIPTION: { icon: '📋', bg: 'bg-blue-50', border: 'border-blue-300' },
    TRANSPORT: { icon: '🚑', bg: 'bg-green-50', border: 'border-green-300' },
    DOCUMENT: { icon: '📄', bg: 'bg-purple-50', border: 'border-purple-300' },
    REMINDER: { icon: '⏰', bg: 'bg-orange-50', border: 'border-orange-300' },
  }
  return icons[type] || { icon: '📢', bg: 'bg-blue-50', border: 'border-blue-300' }
}

const markAsRead = async (notificationId: number) => {
  try {
    await notificationService.markAsRead(notificationId)
    const notif = notifications.value.find(n => n.id === notificationId)
    if (notif) {
      notif.read = true
    }
  } catch (err) {
    console.error('Erreur lors du marquage de la notification:', err)
  }
}

const deleteNotification = async (notificationId: number) => {
  try {
    await notificationService.deleteNotification(notificationId)
    notifications.value = notifications.value.filter(n => n.id !== notificationId)
  } catch (err) {
    console.error('Erreur lors de la suppression:', err)
  }
}

const markAllAsRead = async () => {
  for (const notif of notifications.value.filter(n => !n.read)) {
    await markAsRead(notif.id)
  }
}

onMounted(() => {
  fetchNotifications()
})
</script>

<template>
  <div class="p-6 bg-white">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Mes Notifications</h1>
      <button @click="markAllAsRead" v-if="notifications.some(n => !n.read)" class="text-[#4e55d7] text-sm font-semibold hover:underline">
        Tout marquer comme lu
      </button>
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
      <div 
        v-for="notification in notifications" 
        :key="notification.id" 
        :class="[getIconAndColor(notification.type).bg, getIconAndColor(notification.type).border, notification.read ? 'opacity-60' : 'opacity-100']"
        class="rounded-lg p-4 flex gap-4 items-start border-l-4 transition-all hover:shadow-md"
      >
        <!-- Icon -->
        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl">
          {{ getIconAndColor(notification.type).icon }}
        </div>

        <!-- Content -->
        <div class="flex-1 cursor-pointer" @click="!notification.read && markAsRead(notification.id)">
          <p :class="['font-semibold', notification.read ? 'text-gray-600' : 'text-gray-800']">
            {{ notification.title }}
          </p>
          <p class="text-sm text-gray-600 mt-1">{{ notification.message }}</p>
          <div class="flex justify-between items-center mt-2">
            <p class="text-xs text-gray-500">{{ new Date(notification.date).toLocaleDateString('fr-FR') }}</p>
            <span v-if="!notification.read" class="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Non lue</span>
          </div>
        </div>

        <!-- Delete Button -->
        <button 
          @click="deleteNotification(notification.id)" 
          class="flex-shrink-0 text-gray-400 hover:text-red-500 text-xl"
          title="Supprimer"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>
