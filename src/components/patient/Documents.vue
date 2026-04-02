<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import { documentsService, type Prescription } from '../../services/documentsService'

const router = useRouter()
const { userId } = useAuth()

const prescriptions = ref<Prescription[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const downloadingId = ref<number | null>(null)

// Récupérer les prescriptions du patient
const fetchPrescriptions = async () => {
  if (!userId.value) return
  
  loading.value = true
  error.value = null
  
  try {
    const data = await documentsService.getPrescriptions(userId.value)
    prescriptions.value = data.sort((a, b) => {
      return new Date(b.dateprescription).getTime() - new Date(a.dateprescription).getTime()
    })
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de charger les prescriptions'
  } finally {
    loading.value = false
  }
}

// Télécharger le PDF d'une prescription
const downloadPDF = async (prescription: Prescription) => {
  downloadingId.value = prescription.idprescription
  try {
    const fileName = `prescription_${prescription.idprescription}_${formatDate(prescription.dateprescription)}`
    await documentsService.downloadPrescriptionPDF(prescription.idprescription, fileName)
  } catch (err) {
    error.value = 'Erreur lors du téléchargement du PDF'
    console.error('Erreur:', err)
  } finally {
    downloadingId.value = null
  }
}

// Formater la date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')
}

// Formater la date pour affichage
const displayDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Traduire le type de transport
const getTransportLabel = (type: string): string => {
  const labels: { [key: string]: string } = {
    'Ambulance': 'Ambulance',
    'VSL': 'VSL',
    'TAXI': 'Taxi',
    'Ambulance': 'Ambulance',
    'VSL': 'VSL',
    'Taxi': 'Taxi',
  }
  return labels[type] || type
}

onMounted(() => {
  fetchPrescriptions()
})
</script>

<template>
  <div class="p-6 bg-white min-h-screen">
    <button @click="router.back()" class="text-[#4e55d7] font-semibold mb-6 flex items-center hover:opacity-80">
      ← My documents
    </button>

    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-500">Chargement des prescriptions...</p>
    </div>

    <!-- No Prescriptions -->
    <div v-else-if="prescriptions.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">Aucune prescription disponible pour le moment</p>
      <p class="text-gray-400 text-sm mt-2">Les prescriptions créées par votre médecin apparaîtront ici</p>
    </div>

    <!-- Prescriptions List -->
    <div v-else class="space-y-6">
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-800 mb-2">MES PRESCRIPTIONS</h2>
        <p class="text-sm text-gray-600">{{ prescriptions.length }} prescription(s) disponible(s)</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="border-b-2 border-gray-300 bg-gray-50">
            <tr>
              <th class="text-left py-4 px-4 font-bold text-gray-600">DATE</th>
              <th class="text-left py-4 px-4 font-bold text-gray-600">TYPE DE TRANSPORT</th>
              <th class="text-left py-4 px-4 font-bold text-gray-600">MOTIF MÉDICAL</th>
              <th class="text-left py-4 px-4 font-bold text-gray-600">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prescription in prescriptions" :key="prescription.idprescription" class="border-b border-gray-200 hover:bg-blue-50 transition">
              <td class="py-4 px-4 text-gray-800">{{ displayDate(prescription.dateprescription) }}</td>
              <td class="py-4 px-4">
                <span class="px-3 py-1 rounded-full text-sm font-semibold"
                      :class="prescription.typetransport.includes('Ambulance') ? 'bg-red-100 text-red-700' : 
                              prescription.typetransport.includes('VSL') ? 'bg-blue-100 text-blue-700' : 
                              'bg-yellow-100 text-yellow-700'">
                  {{ getTransportLabel(prescription.typetransport) }}
                </span>
              </td>
              <td class="py-4 px-4 text-gray-600">{{ prescription.motifmedical }}</td>
              <td class="py-4 px-4">
                <button
                  @click="downloadPDF(prescription)"
                  :disabled="downloadingId === prescription.idprescription"
                  class="bg-[#4e55d7] hover:bg-[#3d4297] text-white px-4 py-2 rounded font-semibold text-sm transition disabled:opacity-50"
                >
                  {{ downloadingId === prescription.idprescription ? 'Téléchargement...' : 'Télécharger PDF' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

