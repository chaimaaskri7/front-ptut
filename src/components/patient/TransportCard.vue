<script setup lang="ts">
import { ref, computed } from 'vue'

interface TransportProps {
  id: string
  carrier: string
  date: string
  time: string
  status: 'completed' | 'in-progress' | 'pending'
}

const props = defineProps<{ transport: TransportProps }>()

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  pending: 'bg-yellow-100 text-yellow-800',
}

const statusClass = computed(() => statusColors[props.transport.status])
</script>

<template>
  <div class="bg-white rounded-lg shadow p-4 border-l-4" :class="statusClass.split(' ')[0]">
    <div class="flex justify-between items-start">
      <div>
        <p class="font-semibold">{{ transport.carrier }}</p>
        <p class="text-sm text-gray-600">{{ transport.date }} à {{ transport.time }}</p>
      </div>
      <span :class="statusClass" class="px-3 py-1 rounded text-sm font-semibold">
        {{ transport.status }}
      </span>
    </div>
  </div>
</template>
