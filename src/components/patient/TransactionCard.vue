<script setup lang="ts">
import { computed } from 'vue'

interface TransactionCardProps {
  id: string
  date: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  description: string
}

interface Props {
  transaction: TransactionCardProps
}

const props = defineProps<Props>()

const statusBadgeClass = computed(() => {
  const statusMap: Record<string, string> = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800',
  }
  return statusMap[props.transaction.status] || 'bg-gray-100 text-gray-800'
})
</script>

<template>
  <div class="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center">
    <div class="flex gap-4 items-center flex-1">
      <div class="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">🏥</div>
      <div class="flex-1">
        <p class="font-semibold">{{ transaction.description }}</p>
        <p class="text-xs text-gray-500">{{ transaction.date }}</p>
      </div>
    </div>
    <div class="text-right">
      <p class="font-bold text-lg">{{ transaction.amount }}€</p>
      <span :class="statusBadgeClass" class="text-xs font-semibold px-2 py-1">
        {{ transaction.status }}
      </span>
    </div>
  </div>
</template>

<template>
  <div class="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition">
    <div class="flex justify-between items-start mb-2">
      <div>
        <p class="text-sm text-gray-600">{{ transaction.description }}</p>
        <p class="text-xs text-gray-400 mt-1">{{ transaction.date }}</p>
      </div>
      <span :class="statusBadgeClass" class="px-2 py-1 rounded text-xs font-semibold">
        {{ transaction.status }}
      </span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-lg font-bold text-[#4e55d7]">{{ transaction.amount }}€</span>
      <span class="text-xs text-gray-400">ID: {{ transaction.id }}</span>
    </div>
  </div>
</template>
