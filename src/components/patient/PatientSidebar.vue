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
  <aside class="w-[289px] bg-[#4e55d7] text-white h-screen flex flex-col fixed left-0 top-[64px]">
    <!-- Header -->
    <div class="p-6 border-b border-white border-opacity-20">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">CareWay</h2>
        <button @click="goToDoctorInterface" class="bg-white text-[#4e55d7] px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100">
          Dr
        </button>
      </div>
      <p class="text-sm text-white text-opacity-80">Patient</p>
    </div>

    <!-- Menu Items -->
    <nav class="flex-1 overflow-y-auto">
      <ul class="p-4 space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink
            :to="item.path"
            class="flex items-center space-x-3 px-4 py-2 rounded hover:bg-white hover:bg-opacity-10 transition"
            :class="$route.path === item.path ? 'bg-white bg-opacity-20' : ''"
          >
            <span class="text-xl">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Logout -->
    <div class="p-4 border-t border-white border-opacity-20">
      <button
        @click="logout"
        class="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold transition"
      >
        Déconnexion
      </button>
    </div>
  </aside>
</template>
