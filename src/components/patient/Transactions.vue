<script setup lang="ts">
import { ref } from 'vue'
import TransactionCard from './TransactionCard.vue'

const transactions = ref([
  { id: '001', date: '2025-03-20', amount: 1200, status: 'completed' as const, description: 'Transport médical' },
  { id: '002', date: '2025-03-19', amount: 850, status: 'completed' as const, description: 'Consultation' },
  { id: '003', date: '2025-03-18', amount: 500, status: 'pending' as const, description: 'Transport en attente' },
  { id: '004', date: '2025-03-17', amount: 200, status: 'failed' as const, description: 'Service refusé' },
])

const stats = ref([
  { label: 'Total dépensé', value: '2750€', icon: '💰' },
  { label: 'Transports', value: '4', icon: '🚗' },
  { label: 'En attente', value: '1', icon: '⏳' },
])
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Transactions</h1>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-lg shadow p-4 text-center">
        <div class="text-4xl mb-2">{{ stat.icon }}</div>
        <p class="text-gray-600 text-sm">{{ stat.label }}</p>
        <p class="text-2xl font-bold text-[#4e55d7]">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Transactions List -->
    <div class="space-y-3">
      <TransactionCard v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
    </div>
  </div>
</template>
