<script setup lang="ts">
import { ref, onMounted, computed, nextTick, watch } from 'vue'
import { useAuth } from '../../composables/useAuth'
import QRCode from 'qrcode'

interface QRCode {
  id: number
  code: string
  scanned: boolean
  generatedAt: string
  expiresAt: string
  scannedAt?: string
  etape?: {
    id: number
    statut: string
    idetape: number
  }
}

interface Etape {
  idetape: number
  statut: string
  idtransport: number
}

const { userId } = useAuth()
const allQRCodes = ref<QRCode[]>([])
const availableEtapes = ref<Etape[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const selectedEtape = ref<number>(6)

const API_BASE_URL = 'http://localhost:8081'

const fetchQRCodesForEtape = async (id: number) => {
  loading.value = true
  try {
    const response = await fetch(`${API_BASE_URL}/qr-codes/etape/${id}`)
    if (!response.ok) throw new Error('Erreur fetching QR codes')
    allQRCodes.value = await response.json()
    // Watch will automatically trigger generateAllQRCodes
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de charger les QR codes'
  } finally {
    loading.value = false
  }
}

const generateAllQRCodes = async () => {
  // Wait for DOM to be fully rendered
  await nextTick()
  
  // Small delay to ensure canvas elements are available
  await new Promise(resolve => setTimeout(resolve, 100))
  
  for (const qrCode of allQRCodes.value) {
    try {
      const canvas = document.getElementById(`qr-canvas-${qrCode.id}`) as HTMLCanvasElement
      if (canvas) {
        console.log(`Generating QR code for id ${qrCode.id}`)
        await QRCode.toCanvas(canvas, qrCode.code, {
          width: 250,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        })
        console.log(`QR code generated for id ${qrCode.id}`)
      } else {
        console.error(`Canvas not found for id ${qrCode.id}`)
      }
    } catch (err) {
      console.error(`Error generating QR code for id ${qrCode.id}:`, err)
    }
  }
}

// Watch for changes in allQRCodes to regenerate QR codes
watch(allQRCodes, async () => {
  await generateAllQRCodes()
}, { deep: true })

const getStatusBadgeClass = (qrCode: QRCode) => {
  const now = new Date()
  const expiresAt = new Date(qrCode.expiresAt)
  const isExpired = expiresAt < now
  
  if (qrCode.scanned) return 'bg-green-100 text-green-700'
  if (isExpired) return 'bg-red-100 text-red-700'
  return 'bg-blue-100 text-blue-700'
}

const getStatusText = (qrCode: QRCode) => {
  const now = new Date()
  const expiresAt = new Date(qrCode.expiresAt)
  const isExpired = expiresAt < now
  
  if (qrCode.scanned) return 'SCANNÉ'
  if (isExpired) return 'EXPIRÉ'
  return 'ACTIF'
}

const timeUntilExpiry = (expiresAt: string) => {
  const now = new Date()
  const expires = new Date(expiresAt)
  const diffMs = expires.getTime() - now.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  return diffMins > 0 ? `${diffMins} min` : 'Expirant...'
}

onMounted(() => {
  availableEtapes.value = [
    { idetape: 6, statut: 'ARRIVE_HOPITAL', idtransport: 11 },
    { idetape: 7, statut: 'RDV_FINI', idtransport: 11 },
    { idetape: 8, statut: 'RETOUR_CHEZ_SOI', idtransport: 11 },
    { idetape: 9, statut: 'DEPART', idtransport: 12 },
    { idetape: 10, statut: 'DEPART', idtransport: 13 }
  ]
  
  if (selectedEtape.value) {
    fetchQRCodesForEtape(selectedEtape.value)
  }
})
</script>

<template>
  <div class="p-6 bg-white min-h-screen">
    <h1 class="text-3xl font-bold mb-6">QR Codes des Transports</h1>

    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Etape Selection -->
    <div class="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
      <label class="block text-sm font-semibold text-gray-700 mb-2">Sélectionner une Étape:</label>
      <select 
        v-model.number="selectedEtape" 
        @change="(e) => fetchQRCodesForEtape(selectedEtape)"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e55d7]"
      >
        <option v-for="etape in availableEtapes" :key="etape.idetape" :value="etape.idetape">
          Étape {{ etape.idetape }} - {{ etape.statut }} (Transport {{ etape.idtransport }})
        </option>
      </select>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-500">Chargement des QR codes...</p>
    </div>

    <!-- QR Codes Grid -->
    <div v-else-if="allQRCodes.length > 0" class="space-y-4">
      <div class="mb-4 text-sm text-gray-600">
        <p><strong>Total:</strong> {{ allQRCodes.length }} QR code(s) | 
           <strong>Scannés:</strong> {{ allQRCodes.filter(q => q.scanned).length }} | 
           <strong>En attente:</strong> {{ allQRCodes.filter(q => !q.scanned).length }}</p>
      </div>

      <div class="grid gap-4">
        <div 
          v-for="qrCode in allQRCodes" 
          :key="qrCode.id"
          class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
        >
          <div class="flex gap-6">
            <!-- QR Code Canvas -->
            <div class="flex flex-col items-center">
              <canvas 
                :id="`qr-canvas-${qrCode.id}`"
                width="250"
                height="250"
                class="border-4 border-gray-300 rounded-lg bg-white"
              ></canvas>
              <p class="text-xs text-gray-500 mt-2 max-w-[250px] break-all text-center font-mono">{{ qrCode.code }}</p>
            </div>

            <!-- QR Code Info -->
            <div class="flex-1 flex flex-col justify-between">
              <!-- Status Badge -->
              <div :class="getStatusBadgeClass(qrCode)" class="inline-flex w-fit px-4 py-2 rounded-full font-semibold text-sm mb-4">
                {{ getStatusText(qrCode) }}
              </div>

              <!-- Details -->
              <div class="space-y-3 text-sm">
                <div v-if="qrCode.etape" class="bg-gray-50 p-3 rounded">
                  <p class="text-gray-600">Étape:</p>
                  <p class="font-semibold text-gray-800">{{ qrCode.etape.statut }}</p>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-gray-50 p-3 rounded">
                    <p class="text-gray-600 text-xs">Généré:</p>
                    <p class="font-mono text-xs">{{ new Date(qrCode.generatedAt).toLocaleString('fr-FR') }}</p>
                  </div>
                  <div class="bg-gray-50 p-3 rounded">
                    <p class="text-gray-600 text-xs">Expire:</p>
                    <p class="font-mono text-xs">{{ new Date(qrCode.expiresAt).toLocaleString('fr-FR') }}</p>
                  </div>
                </div>

                <div v-if="!qrCode.scanned" class="bg-blue-50 p-3 rounded border border-blue-200">
                  <p class="text-blue-700 font-semibold">⏱️ {{ timeUntilExpiry(qrCode.expiresAt) }}</p>
                </div>

                <div v-if="qrCode.scanned && qrCode.scannedAt" class="bg-green-50 p-3 rounded border border-green-200">
                  <p class="text-gray-600 text-xs">Scanné le:</p>
                  <p class="font-mono text-xs text-green-700">{{ new Date(qrCode.scannedAt).toLocaleString('fr-FR') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12 text-gray-500">
      <p>Aucun QR code disponible pour cette étape</p>
    </div>
  </div>
</template>

<style scoped>
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234e55d7' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.5rem;
}
</style>
