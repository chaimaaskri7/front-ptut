<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { transportService } from '../../services/transportService'
import { useAuth } from '../../composables/useAuth'
import TransportDetailModal from './TransportDetailModal.vue'
import EvaluationModal from './EvaluationModal.vue'

const { userId } = useAuth()
const transports = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showFeedback = ref(false)
const showRating = ref(false)
const rating = ref(0)
const activeFilter = ref<'all' | 'termine' | 'coming'>('all')
const selectedTransport = ref<any>(null)
const showDetailModal = ref(false)
const showEvaluationModal = ref(false)
const selectedTransportForEval = ref<any>(null)

const filteredTransports = computed(() => {
  if (activeFilter.value === 'all') {
    return transports.value
  } else if (activeFilter.value === 'termine') {
    return transports.value.filter(t => t.statut === 'TERMINE')
  } else {
    return transports.value.filter(t => t.statut === 'EN_COURS' || t.statut === 'PLANIFIE')
  }
})

const fetchTransports = async () => {
  loading.value = true
  error.value = null
  try {
    if (!userId.value) {
      throw new Error('Utilisateur non authentifié')
    }
    const data = await transportService.getTransportsByPatient(userId.value)
    transports.value = data
  } catch (err) {
    console.error('Erreur lors de la récupération des transports:', err)
    error.value = err instanceof Error ? err.message : 'Erreur lors du chargement des transports'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchTransports()
})

const openDetails = () => {
  showFeedback.value = true
}

const openDetailModal = (transport: any) => {
  selectedTransport.value = transport
  showDetailModal.value = true
}

const closeDetailModal = () => {
  showDetailModal.value = false
  selectedTransport.value = null
}

const openEvaluationModal = (transport: any) => {
  selectedTransportForEval.value = transport
  showEvaluationModal.value = true
}

const closeEvaluationModal = () => {
  showEvaluationModal.value = false
  selectedTransportForEval.value = null
}

const handleEvaluationSubmitted = () => {
  // Optional: refresh transports or show success message
  closeEvaluationModal()
}
</script>

<template>
  <div class="p-6 bg-white">
    <h1 class="text-2xl font-bold mb-6">Mes transports</h1>

    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Chargement des transports...</p>
    </div>

    <!-- Content -->
    <div v-else>
      <p class="text-gray-600 text-sm mb-6">Total : {{ transports.length }} transport(s)</p>

      <!-- Filter Tabs -->
      <div class="flex gap-2 mb-6 border-b border-gray-200">
        <button
          @click="activeFilter = 'all'"
          :class="[
            'pb-2 px-4 font-semibold transition-all',
            activeFilter === 'all'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          ]"
        >
          Tout
        </button>
        <button
          @click="activeFilter = 'termine'"
          :class="[
            'pb-2 px-4 font-semibold transition-all',
            activeFilter === 'termine'
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-600 hover:text-gray-800'
          ]"
        >
          Terminés
        </button>
        <button
          @click="activeFilter = 'coming'"
          :class="[
            'pb-2 px-4 font-semibold transition-all',
            activeFilter === 'coming'
              ? 'border-b-2 border-orange-600 text-orange-600'
              : 'text-gray-600 hover:text-gray-800'
          ]"
        >
          À venir
        </button>
      </div>

      <div v-if="filteredTransports.length === 0" class="text-center py-8 text-gray-500">
        Aucun transport trouvé.
      </div>

      <!-- Transports List -->
      <div class="space-y-4">
        <div v-for="transport in filteredTransports" :key="transport.idtransport" :class="[
          'rounded-lg p-6 text-white',
          transport.statut === 'TERMINE' ? 'bg-green-600' : transport.statut === 'EN_COURS' ? 'bg-orange-600' : 'bg-blue-600'
        ]">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-bold text-lg">Transport #{{ transport.idtransport }}</p>
              <div class="flex gap-3 items-center">
                <p class="text-sm opacity-80">{{ transport.typetransport }}</p>
                <span :class="[
                  'px-2 py-1 text-xs font-semibold rounded',
                  transport.statut === 'TERMINE' ? 'bg-green-800' : transport.statut === 'EN_COURS' ? 'bg-orange-800' : 'bg-blue-800'
                ]">
                  {{ transport.statut === 'TERMINE' ? 'Terminé' : transport.statut === 'EN_COURS' ? 'En cours' : 'Planifié' }}
                </span>
              </div>
            </div>
            <button class="text-white hover:opacity-80">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div class="flex gap-6 mt-4 text-sm opacity-90 flex-wrap">
            <span>{{ new Date(transport.datetransport).toLocaleDateString('fr-FR') }}</span>
            <span>{{ new Date(transport.datetransport).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}</span>
            <span>{{ transport.lieudepart }} → {{ transport.lieuarrive }}</span>
          </div>
          <div class="mt-4 flex gap-2">
            <button @click="openDetailModal(transport)" class="flex-1 px-4 py-2 rounded font-semibold hover:opacity-90" :class="transport.statut === 'TERMINE' ? 'bg-white text-green-600' : transport.statut === 'EN_COURS' ? 'bg-white text-orange-600' : 'bg-white text-blue-600'">
              Détails
            </button>
            <button v-if="transport.statut === 'TERMINE'" @click="openEvaluationModal(transport)" class="flex-1 px-4 py-2 rounded font-semibold bg-yellow-500 hover:bg-yellow-600 text-white transition">
              Évaluer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Evaluation Modal -->
    <EvaluationModal 
      :isOpen="showEvaluationModal"
      :transport="selectedTransportForEval"
      @close="closeEvaluationModal"
      @submitted="handleEvaluationSubmitted"
    />

    <!-- Transport Detail Modal -->
    <TransportDetailModal 
      :transport="selectedTransport" 
      :isOpen="showDetailModal" 
      @close="closeDetailModal" 
    />
  </div>
</template>
