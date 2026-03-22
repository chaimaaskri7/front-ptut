<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = [
  { label: 'Mon Profil', path: '/patient/profile', icon: '👤' },
  { label: 'Mes Transports', path: '/patient/transports', icon: '🚗' },
  { label: 'Notifications', path: '/patient/notifications', icon: '🔔' },
  { label: 'Transactions', path: '/patient/transactions', icon: '💳' },
  { label: 'QR Code', path: '/patient/qrcode', icon: '📱' },
  { label: 'Paramètres', path: '/patient/settings', icon: '⚙️' },
  { label: 'Documents', path: '/patient/documents', icon: '📄' },
]

const logout = () => {
  localStorage.removeItem('user')
  router.push('/')
}

const goToDoctorInterface = () => {
  router.push('/dashboard')
}
</script>

<template>
  <aside class="w-[289px] bg-white text-gray-800 h-screen flex flex-col fixed left-0 top-[64px] border-r border-gray-200">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800">CareWay</h2>
        <button @click="goToDoctorInterface" class="bg-[#4e55d7] text-white px-3 py-1 rounded text-sm font-semibold hover:opacity-90">
          Dr
        </button>
      </div>
      <p class="text-sm text-gray-600">Patient</p>
    </div>

    <!-- Menu Items -->
    <nav class="flex-1 overflow-y-auto">
      <ul class="p-4 space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink
            :to="item.path"
            class="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-100 transition text-gray-700"
            :class="$route.path === item.path ? 'bg-gray-200 text-gray-900 font-semibold' : ''"
          >
            <span class="text-xl">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Logout -->
    <div class="p-4 border-t border-gray-200">
      <button
        @click="logout"
        class="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold transition"
      >
        Déconnexion
      </button>
    </div>
  </aside>
</template>
