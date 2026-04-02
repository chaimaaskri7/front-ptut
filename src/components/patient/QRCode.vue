<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '../../composables/useAuth'

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

const { userId } = useAuth()
const currentQRCode = ref<QRCode | null>(null)
const allQRCodes = ref<QRCode[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showAllQRCodes = ref(false)
const qrSize = ref(300)
const etapeId = ref<number>(6) // Default to etape 6 (Transport 11 ARRIVE_HOPITAL)

const API_BASE_URL = 'http://localhost:8081'

const isExpired = computed(() => {
  if (!currentQRCode.value) return false
  return new Date(currentQRCode.value.expiresAt) < new Date()
})

const timeRemaining = computed(() => {
  if (!currentQRCode.value || isExpired.value) return 'Expiré'
  const now = new Date()
  const expires = new Date(currentQRCode.value.expiresAt)
  const diffMs = expires.getTime() - now.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  return diffMins > 0 ? `${diffMins} min` : 'Expirant...'
})

const fetchCurrentQRCode = async (id: number) => {
  loading.value = true
  try {
    const response = await fetch(`${API_BASE_URL}/qr-codes/current/${id}`)
    if (!response.ok) throw new Error('Erreur fetching QR code')
    currentQRCode.value = await response.json()
    etapeId.value = id
    fetchAllQRCodes(id)
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de charger le QR code'
  } finally {
    loading.value = false
  }
}

const fetchAllQRCodes = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/qr-codes/etape/${id}`)
    if (!response.ok) throw new Error('Erreur fetching QR codes')
    allQRCodes.value = await response.json()
  } catch (err) {
    console.error('Erreur:', err)
  }
}

const scanQRCode = async () => {
  if (!currentQRCode.value) return
  try {
    const response = await fetch(`${API_BASE_URL}/qr-codes/scan?code=${currentQRCode.value.code}`, {
      method: 'POST'
    })
    if (!response.ok) throw new Error('Erreur scanning QR code')
    const scanned = await response.json()
    currentQRCode.value = scanned
    if (etapeId.value) {
      fetchAllQRCodes(etapeId.value)
    }
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Erreur lors du scan'
  }
}

const generateNewQRCode = async () => {
  if (!etapeId.value) return
  try {
    const response = await fetch(`${API_BASE_URL}/qr-codes/generate?etapeId=${etapeId.value}&expirationMinutes=120`, {
      method: 'POST'
    })
    if (!response.ok) throw new Error('Erreur generating QR code')
    currentQRCode.value = await response.json()
    fetchAllQRCodes(etapeId.value)
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de générer un nouveau QR code'
  }
}

const generateQRCodeUrl = (text: string) => {
  const encodedText = encodeURIComponent(text)
  return `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize.value}x${qrSize.value}&data=${encodedText}`
}

// À appeler avec l'etapeId depuis le composant parent
defineExpose({
  fetchCurrentQRCode
})

onMounted(() => {
  // Charger les QR codes pour l'étape par défaut au montage
  if (etapeId.value) {
    fetchCurrentQRCode(etapeId.value)
  }
})
</script>

<template>
  <div class="p-6 bg-white">
    <!-- Error Message -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Chargement du QR code...</p>
    </div>

    <!-- Current QR Code -->
    <div v-else-if="currentQRCode" class="space-y-6">
      <!-- QR Code Display -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border-2 border-blue-300">
        <div class="flex flex-col items-center space-y-4">
          <!-- Status Badge -->
          <div :class="isExpired ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'" 
               class="px-4 py-2 rounded-full font-semibold text-sm">
            {{ isExpired ? 'EXPIRÉ' : 'ACTIF' }} - {{ timeRemaining }}
          </div>

          <!-- QR Code Image -->
          <img :src="generateQRCodeUrl(currentQRCode.code)" 
               :alt="currentQRCode.code"
               class="border-4 border-white rounded-lg shadow-lg"
          />

          <!-- Code Display -->
          <div class="bg-white p-4 rounded border border-gray-300 w-full text-center">
            <p class="text-xs text-gray-600">Code:</p>
            <p class="font-mono text-sm font-bold break-all">{{ currentQRCode.code }}</p>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 w-full">
            <button @click="scanQRCode" 
                    :disabled="isExpired"
                    class="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-2 rounded font-semibold">
              Scan QR Code
            </button>
            <button v-if="isExpired" 
                    @click="generateNewQRCode"
                    class="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold">
              Générer Nouveau
            </button>
          </div>
        </div>
      </div>

      <!-- Next QR Codes Section -->
      <div class="border-t pt-6">
        <button @click="showAllQRCodes = !showAllQRCodes"
                class="flex items-center gap-2 text-[#4e55d7] font-semibold hover:underline">
          {{ showAllQRCodes ? '▼' : '▶' }} Prochains QR Codes ({{ allQRCodes.filter(q => !q.scanned).length }})
        </button>

        <div v-if="showAllQRCodes" class="mt-4 space-y-3">
          <div v-for="qr in allQRCodes.filter(q => !q.scanned)" :key="qr.id"
               class="bg-blue-50 p-4 rounded border border-blue-200 hover:shadow-md transition">
            <div class="flex justify-between items-start">
              <div>
                <p class="font-semibold text-gray-800">{{ qr.etape?.statut || 'Etape' }}</p>
                <p class="text-xs text-gray-600 mt-1">{{ qr.code.substring(0, 12) }}...</p>
                <p class="text-xs text-gray-500 mt-2">
                  Expire: {{ new Date(qr.expiresAt).toLocaleString('fr-FR') }}
                </p>
              </div>
              <span :class="new Date(qr.expiresAt) < new Date() ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'"
                    class="px-3 py-1 rounded text-xs font-semibold">
                {{ new Date(qr.expiresAt) < new Date() ? 'EXPIRÉ' : 'ACTIF' }}
              </span>
            </div>
          </div>

          <div v-if="allQRCodes.filter(q => !q.scanned).length === 0" class="text-center py-4 text-gray-500">
            Tous les QR codes ont été scannés!
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
        <div class="text-center">
          <p class="text-gray-600 text-sm">Générés</p>
          <p class="text-2xl font-bold text-[#4e55d7]">{{ allQRCodes.length }}</p>
        </div>
        <div class="text-center">
          <p class="text-gray-600 text-sm">Scannés</p>
          <p class="text-2xl font-bold text-green-600">{{ allQRCodes.filter(q => q.scanned).length }}</p>
        </div>
        <div class="text-center">
          <p class="text-gray-600 text-sm">En attente</p>
          <p class="text-2xl font-bold text-orange-600">{{ allQRCodes.filter(q => !q.scanned).length }}</p>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12 text-gray-500">
      <p>Aucun QR code disponible</p>
    </div>
  </div>
</template>

<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
