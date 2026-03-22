<script setup lang="ts">
import { ref } from 'vue'

const transports = ref([
  { id: '001', date: '2025-03-20', destination: 'Hôpital Ibn Sina', status: 'completed' as const, distance: '12.5km' },
  { id: '002', date: '2025-03-19', destination: 'Clinique Al Baraka', status: 'completed' as const, distance: '8.2km' },
  { id: '003', date: '2025-03-18', destination: 'Laboratoire Santé+', status: 'pending' as const, distance: '5.1km' },
])

const filter = ref('all')

const filteredTransports = computed(() => {
  if (filter.value === 'all') return transports.value
  return transports.value.filter((t) => t.status === filter.value)
})

import { computed } from 'vue'
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Mes Transports</h1>

    <!-- Filters -->
    <div class="flex space-x-4 mb-6">
      <button
        v-for="filterType in ['all', 'completed', 'pending']"
        :key="filterType"
        @click="filter = filterType"
        :class="filter === filterType ? 'bg-[#4e55d7] text-white' : 'bg-gray-200 text-gray-700'"
        class="px-4 py-2 rounded font-semibold transition"
      >
        {{ filterType === 'all' ? 'Tous' : filterType === 'completed' ? 'Complétés' : 'En attente' }}
      </button>
    </div>

    <!-- Transports List -->
    <div class="space-y-3">
      <div v-for="transport in filteredTransports" :key="transport.id" class="bg-white rounded-lg shadow p-4 flex justify-between items-center">
        <div>
          <p class="font-semibold">{{ transport.destination }}</p>
          <p class="text-sm text-gray-600">{{ transport.date }} • {{ transport.distance }}</p>
        </div>
        <span :class="transport.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="px-3 py-1 rounded text-sm font-semibold">
          {{ transport.status }}
        </span>
      </div>
    </div>
  </div>
</template>
