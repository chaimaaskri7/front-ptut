<script setup lang="ts">
import { ref, computed } from 'vue'

const isPatient = ref(true)
const router = useRouter()

import { useRouter } from 'vue-router'

const goToPatient = () => {
  isPatient.value = true
  router.push('/patient/profile')
}

const goToDoctor = () => {
  isPatient.value = false
  router.push('/dashboard')
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bg-[#4e55d7] text-white px-6 py-3 z-[100] flex justify-between items-center h-[64px]">
    <h1 class="text-2xl font-bold">CareWay</h1>
    <div class="flex space-x-4">
      <button
        @click="goToPatient"
        :class="isPatient ? 'bg-white text-[#4e55d7]' : 'bg-transparent border border-white'"
        class="px-4 py-2 rounded font-semibold transition hover:opacity-80"
      >
        Patient
      </button>
      <button
        @click="goToDoctor"
        :class="!isPatient ? 'bg-white text-[#4e55d7]' : 'bg-transparent border border-white'"
        class="px-4 py-2 rounded font-semibold transition hover:opacity-80"
      >
        Doctor
      </button>
    </div>
  </div>
</template>
