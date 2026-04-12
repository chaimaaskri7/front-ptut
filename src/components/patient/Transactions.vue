<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import TransactionCard from './TransactionCard.vue'
import { transactionService } from '../../services/transactionService'
import { useAuth } from '../../composables/useAuth'

const filterTab = ref('Tout')
const loading = ref(false)
const error = ref<string | null>(null)

const transactions = ref<any[]>([])
const { userId } = useAuth()

const stats = computed(() => {
  const completed = transactions.value.filter(t => t.statutremboursement === 'Rembourse').length
  const pending = transactions.value.filter(t => t.statutremboursement === 'EN_ATTENTE').length
  const total = transactions.value.reduce((sum, t) => sum + t.montant, 0)
  
  return [
    { label: 'Remboursés', value: completed.toString(), icon: '✓', color: 'green' },
    { label: 'Total remboursé', value: total.toFixed(2) + '€', icon: '💰', color: 'blue' },
    { label: 'En cours', value: pending.toString(), icon: '⏳', color: 'orange' },
  ]
})

const filteredTransactions = computed(() => {
  if (filterTab.value === 'En cours') {
    return transactions.value.filter(t => t.statutremboursement === 'EN_ATTENTE')
  } else if (filterTab.value === 'Remboursés') {
    return transactions.value.filter(t => t.statutremboursement === 'Rembourse')
  }
  return transactions.value
})

const fetchTransactions = async () => {
  if (!userId.value) {
    error.value = 'Patient ID not available'
    return
  }
  
  loading.value = true
  error.value = null
  try {
    const data = await transactionService.getTransactionsByPatient(userId.value)
    transactions.value = data
  } catch (err) {
    console.error('Erreur lors de la récupération des transactions:', err)
    error.value = 'Impossible de charger les transactions'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchTransactions()
})
</script>

<template>
  <div class="p-6 bg-white">
    <h1 class="text-2xl font-bold mb-6">My Transactions</h1>

    <p class="text-gray-600 text-sm mb-6">Suivez ici l'ensemble de vos remboursements liés aux trajets médicaux.</p>

    <!-- Message d'erreur -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Chargement des transactions...</p>
    </div>

    <div v-else>
      <!-- Stats -->
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="border-2 border-blue-300 border-dashed rounded-lg p-4 text-center">
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
      <div v-for="transaction in filteredTransactions" :key="transaction.idremboursement" class="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center">
        <div class="flex gap-4 items-center flex-1">
          <div class="w-12 h-12 bg-blue-100 rounded flex items-center justify-center text-lg font-bold">H</div>
          <div class="flex-1">
            <p class="font-semibold">{{ transaction.description }}</p>
            <div class="flex gap-4 text-sm">
              <span :class="transaction.statutremboursement === 'Rembourse' ? 'text-green-600 font-semibold' : 'text-orange-600 font-semibold'">
                {{ transaction.statutremboursement === 'Rembourse' ? 'Remboursé' : transaction.statutremboursement === 'EN_ATTENTE' ? 'En cours' : transaction.statutremboursement }}
              </span>
              <span class="text-gray-500">{{ new Date(transaction.dateremboursement).toLocaleDateString('fr-FR') }}</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <p class="font-bold text-lg text-right">{{ transaction.montant }}€</p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded mt-1"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
