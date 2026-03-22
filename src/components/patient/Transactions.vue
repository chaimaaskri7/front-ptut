<script setup lang="ts">
import { ref, computed } from 'vue'
import TransactionCard from './TransactionCard.vue'

const filterTab = ref('Tout')

const transactions = ref([
  { id: '001', description: 'Domicile > Hôpital de Castres', amount: 18.50, status: 'completed' as const, date: '9 Jun', color: 'blue' },
  { id: '002', description: 'Domicile > Clinique St. Pierre', amount: 12, status: 'completed' as const, date: '4 Jun', color: 'orange' },
  { id: '003', description: 'Domicile > Clinique St. Martin', amount: 25, status: 'completed' as const, date: '18 Jun', color: 'yellow' },
])

const stats = ref([
  { label: 'Remboursés', value: '5', icon: '✓', color: 'green' },
  { label: 'Total remboursé', value: '90,50€', icon: '💰', color: 'blue' },
  { label: 'En cours', value: '2', icon: '⏳', color: 'orange' },
])
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← My Transactions
    </button>

    <p class="text-gray-600 text-sm mb-6">Suivez ici l'ensemble de vos remboursements liés aux trajets médicaux.</p>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div v-for="stat in stats" :key="stat.label" class="border-2 border-blue-300 border-dashed rounded-lg p-4 text-center">
        <div class="text-2xl mb-1">{{ stat.icon }}</div>
        <p class="text-gray-600 text-sm">{{ stat.label }}</p>
        <p class="text-xl font-bold text-[#4e55d7]">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex gap-3 mb-6">
      <button
        v-for="tab in ['Tout', 'En cours', 'Remboursés']"
        :key="tab"
        @click="filterTab = tab"
        :class="filterTab === tab ? 'bg-[#4e55d7] text-white' : 'bg-gray-200 text-gray-700'"
        class="px-4 py-2 rounded font-semibold transition"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Transactions List -->
    <div class="space-y-3">
      <div v-for="transaction in transactions" :key="transaction.id" class="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center">
        <div class="flex gap-4 items-center flex-1">
          <div class="w-12 h-12 bg-blue-100 rounded flex items-center justify-center text-2xl">🏥</div>
          <div class="flex-1">
            <p class="font-semibold">{{ transaction.description }}</p>
            <div class="flex gap-4 text-sm">
              <span class="text-blue-600 font-semibold">{{ transaction.status }}</span>
              <span class="text-blue-600 font-semibold">● remboursé au transporteur</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <p class="font-bold text-lg text-right">{{ transaction.amount }}€</p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded mt-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
