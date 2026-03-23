<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isPatientRoute = computed(() => {
  return route.path.startsWith('/patient')
})

const goToPatient = () => {
  router.push('/patient/profile')
}

const goToDoctor = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bg-[#4e55d7] text-white px-6 z-[100] flex justify-between items-center h-[64px]">
    <h1 class="text-2xl font-bold">CareWay</h1>
    
    <div class="flex items-center gap-6">
      <!-- Patient Icon -->
      <button
        @click="goToPatient"
        :class="isPatientRoute ? 'text-white bg-white bg-opacity-20 rounded-lg p-2' : 'text-white text-opacity-70 hover:text-opacity-100'"
        class="text-2xl transition-all duration-200"
        title="Patient Interface"
      >
        👤
      </button>

      <!-- Divider -->
      <div class="w-px h-8 bg-white bg-opacity-30"></div>

      <!-- Doctor Icon -->
      <button
        @click="goToDoctor"
        :class="!isPatientRoute ? 'text-white bg-white bg-opacity-20 rounded-lg p-2' : 'text-white text-opacity-70 hover:text-opacity-100'"
        class="text-2xl transition-all duration-200"
        title="Doctor Interface"
      >
        👨‍⚕️
      </button>
    </div>
  </div>
</template>
