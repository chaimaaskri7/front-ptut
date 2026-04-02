<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '../../composables/useAuth'
import { favoriteCarrierService, type FavoriteCarrier, type TransporteurOption } from '../../services/favoriteCarrierService'

const { userId } = useAuth()
const favoriteCarriers = ref<FavoriteCarrier[]>([])
const allTransporteurs = ref<TransporteurOption[]>([])
const transportTypes = ['AMBULANCE', 'VSL', 'TAXI']
const loading = ref(false)
const error = ref<string | null>(null)
const selectedTransporteurs = ref<{ [key: string]: number | null }>({
  AMBULANCE: null,
  VSL: null,
  TAXI: null
})

const fetchFavoriteCarriers = async () => {
  if (!userId.value) return
  loading.value = true
  try {
    const carriers = await favoriteCarrierService.getFavoriteCarriers(userId.value)
    favoriteCarriers.value = carriers
    
    // Populate selected transporteurs
    carriers.forEach(carrier => {
      selectedTransporteurs.value[carrier.typeTransport] = carrier.idtransporteur
    })
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de charger les transporteurs favoris'
  } finally {
    loading.value = false
  }
}

const fetchAllTransporteurs = async () => {
  loading.value = true
  try {
    const transporteurs = await favoriteCarrierService.getAllTransporteurs()
    allTransporteurs.value = transporteurs
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de charger les transporteurs'
  } finally {
    loading.value = false
  }
}

const handleTransporteurChange = async (typeTransport: string, transporteurId: number) => {
  if (!userId.value) return
  
  try {
    await favoriteCarrierService.setFavoriteCarrier(userId.value, transporteurId, typeTransport)
    await fetchFavoriteCarriers()
  } catch (err) {
    console.error('Erreur:', err)
    error.value = `Impossible de définir le transporteur favori pour ${typeTransport}`
  }
}

const removeFavoriteCarrier = async (typeTransport: string) => {
  if (!userId.value) return
  
  try {
    await favoriteCarrierService.removeFavoriteCarrier(userId.value, typeTransport)
    selectedTransporteurs.value[typeTransport] = null
    await fetchFavoriteCarriers()
  } catch (err) {
    console.error('Erreur:', err)
    error.value = `Impossible de supprimer le transporteur favori pour ${typeTransport}`
  }
}

const getTransporteursByType = (typeTransport: string) => {
  return allTransporteurs.value.filter(t => {
    // Assuming transporteurs have a type or we need to get them from the backend
    return true // We'll filter by the selection
  })
}

const getTransporteurName = (transporteurId: number) => {
  const transporteur = allTransporteurs.value.find(t => t.idtransporteur === transporteurId)
  return transporteur ? `${transporteur.nom} ${transporteur.prenom}` : 'Non sélectionné'
}

const getTypeLabel = (type: string) => {
  const labels: { [key: string]: string } = {
    AMBULANCE: 'Ambulance',
    VSL: 'VSL',
    TAXI: 'Taxi'
  }
  return labels[type] || type
}

onMounted(() => {
  fetchFavoriteCarriers()
  fetchAllTransporteurs()
})
</script>

<template>
  <div class="p-6 bg-white min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Transporteur Favori</h1>

    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-500">Chargement des transporteurs...</p>
    </div>

    <!-- Transporteurs Selection -->
    <div v-else class="space-y-6">
      <!-- Info Box -->
      <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p class="text-sm text-gray-700">
          <strong>Sélectionnez un transporteur favori par type de transport.</strong> 
          Vous pouvez choisir maximum un transporteur par type : Ambulance, VSL, ou Taxi.
        </p>
      </div>

      <!-- Transporteur Selection Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="typeTransport in transportTypes" :key="typeTransport" 
             class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-gray-800">{{ getTypeLabel(typeTransport) }}</h3>
            <span class="text-2xl">
              {{ typeTransport === 'AMBULANCE' ? '🚑' : typeTransport === 'VSL' ? '🚗' : '🚕' }}
            </span>
          </div>

          <!-- Current Selection -->
          <div v-if="selectedTransporteurs[typeTransport]" class="mb-4 p-3 bg-green-50 rounded border border-green-200">
            <p class="text-xs text-gray-600 mb-1">Sélectionné:</p>
            <p class="font-semibold text-green-700">{{ getTransporteurName(selectedTransporteurs[typeTransport]) }}</p>
            <p class="text-xs text-gray-500 mt-1">ID: {{ selectedTransporteurs[typeTransport] }}</p>
          </div>

          <!-- Empty State -->
          <div v-else class="mb-4 p-3 bg-gray-50 rounded border border-gray-200">
            <p class="text-sm text-gray-500 italic">Aucun transporteur sélectionné</p>
          </div>

          <!-- Selector Dropdown -->
          <select 
            :value="selectedTransporteurs[typeTransport] || ''"
            @change="(e) => {
              const val = (e.target as HTMLSelectElement).value
              if (val) {
                handleTransporteurChange(typeTransport, parseInt(val))
              }
            }"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e55d7] text-sm mb-3"
          >
            <option value="">-- Choisir un transporteur --</option>
            <option v-for="transporteur in allTransporteurs" :key="transporteur.idtransporteur" :value="transporteur.idtransporteur">
              {{ transporteur.nom }} {{ transporteur.prenom }} (ID: {{ transporteur.idtransporteur }})
            </option>
          </select>

          <!-- Remove Button -->
          <button 
            v-if="selectedTransporteurs[typeTransport]"
            @click="removeFavoriteCarrier(typeTransport)"
            class="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold text-sm"
          >
            Supprimer ❌
          </button>
        </div>
      </div>

      <!-- Summary Table -->
      <div v-if="favoriteCarriers.length > 0" class="mt-8">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Résumé de vos transporteurs favoris</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="border-b-2 border-gray-300">
              <tr>
                <th class="text-left py-4 px-4 font-bold text-gray-600">TRANSPORTEUR</th>
                <th class="text-left py-4 px-4 font-bold text-gray-600">TYPE DE TRANSPORT</th>
                <th class="text-left py-4 px-4 font-bold text-gray-600">TÉLÉPHONE</th>
                <th class="text-left py-4 px-4 font-bold text-gray-600">EMAIL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="carrier in favoriteCarriers" :key="`${carrier.idtransporteur}-${carrier.typeTransport}`" 
                  class="border-b border-gray-200 hover:bg-gray-50">
                <td class="py-4 px-4 font-semibold">{{ carrier.nomTransporteur }} {{ carrier.prenomTransporteur }}</td>
                <td class="py-4 px-4">
                  <span class="px-3 py-1 rounded-full text-sm font-semibold"
                        :class="carrier.typeTransport === 'AMBULANCE' ? 'bg-red-100 text-red-700' : 
                                carrier.typeTransport === 'VSL' ? 'bg-blue-100 text-blue-700' : 
                                'bg-yellow-100 text-yellow-700'">
                    {{ getTypeLabel(carrier.typeTransport) }}
                  </span>
                </td>
                <td class="py-4 px-4 text-gray-600">{{ carrier.telephoneTransporteur }}</td>
                <td class="py-4 px-4 text-gray-600">{{ carrier.emailTransporteur }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
