<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import QRCode from 'qrcode'

interface Props {
  transport: any
  isOpen: boolean
  onClose: () => void
}

interface Etape {
  idetape: number
  statut: string
  idtransport: number
}

interface QRCodeData {
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

const props = defineProps<Props>()
const mapContainer = ref<HTMLElement | null>(null)
const etapes = ref<Etape[]>([])
const qrcodes = ref<QRCodeData[]>([])
const loadingEtapes = ref(false)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://careway-backend.onrender.com'

let map: L.Map | null = null

const formattedDate = computed(() => {
  if (!props.transport) return ''
  const date = new Date(props.transport.datetransport)
  return date.toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})

const formattedTime = computed(() => {
  if (!props.transport) return ''
  const date = new Date(props.transport.datetransport)
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
})

const initMap = () => {
  // Attendre que la div existe
  if (!mapContainer.value) {
    setTimeout(initMap, 100)
    return
  }
  
  // Détruire la carte existante
  if (map) {
    map.remove()
    map = null
  }

  try {
    // Coordonnées de Paris
    const startCoords: [number, number] = [48.8566, 2.3522]
    const endCoords: [number, number] = [48.8816, 2.2675]
    
    // Créer la carte avec des options de fallback
    map = L.map(mapContainer.value, {
      center: [48.87, 2.35],
      zoom: 12,
      preferCanvas: false
    })
    
    // Ajouter la couche de tuiles OSM
    setTimeout(() => {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 1,
        crossOrigin: 'anonymous'
      }).addTo(map!)
    }, 300)

    // Ajouter un cercle pour le départ (vert)
    const startCircle = L.circle(startCoords, {
      color: '#22c55e',
      fillColor: '#86efac',
      fillOpacity: 0.8,
      radius: 250,
      weight: 3
    }).bindPopup('<strong>🟢 Départ</strong><br>12 rue de la Paix, Paris')
    
    startCircle.addTo(map)

    // Ajouter un cercle pour l'arrivée (rouge)
    const endCircle = L.circle(endCoords, {
      color: '#ef4444',
      fillColor: '#fca5a5',
      fillOpacity: 0.8,
      radius: 250,
      weight: 3
    }).bindPopup('<strong>🔴 Arrivée</strong><br>Hopital Lariboisiere, Paris')
    
    endCircle.addTo(map)

    // Tracer la route avec une ligne pointillée
    const polyline = L.polyline([startCoords, endCoords], {
      color: '#2563eb',
      weight: 4,
      opacity: 0.8,
      dashArray: '10, 5',
      lineCap: 'round',
      lineJoin: 'round'
    })
    
    polyline.addTo(map)

    // Créer un groupe pour adapter la vue
    const group = new L.FeatureGroup([
      L.marker(startCoords),
      L.marker(endCoords)
    ])
    
    // Adapter la carte aux deux points
    if (map && group.getBounds().isValid()) {
      map.fitBounds(group.getBounds(), { padding: [50, 50], maxZoom: 14 })
    }
    
    console.log('Carte initialisée avec succès')
  } catch (err) {
    console.error('Erreur lors de l\'initialisation de la carte:', err)
    // Afficher un message d'erreur dans la console pour debug
    if (mapContainer.value) {
      mapContainer.value.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">Impossible de charger la carte</div>'
    }
  }
}

const fetchEtapesAndQRCodes = async () => {
  if (!props.transport?.idtransport) {
    console.warn('Pas de transport ID')
    return
  }
  
  loadingEtapes.value = true
  try {
    // Charger les étapes disponibles (endpoint qui fonctionne dans QRCode.vue)
    console.log(`Fetching étapes (using /qr-codes/etapes)`)
    const etapesRes = await fetch(`${API_BASE_URL}/qr-codes/etapes`)
    
    if (etapesRes.ok) {
      const allEtapes = await etapesRes.json()
      console.log(`Toutes les étapes disponibles:`, allEtapes)
      
      // Charger les QR codes pour ce transport spécifique
      console.log(`Fetching QR codes for transport ${props.transport.idtransport}`)
      const qrRes = await fetch(`${API_BASE_URL}/qr-codes/transport/${props.transport.idtransport}`)
      
      if (qrRes.ok) {
        const qrCodesData = await qrRes.json()
        console.log(`QR codes for transport:`, qrCodesData)
        
        // Extraire les étapes uniques des QR codes
        const etapeIds = new Set(qrCodesData.map((qr: any) => qr.etape?.idetape).filter(Boolean))
        console.log(`Étapes avec QR codes:`, Array.from(etapeIds))
        
        // Filtrer les étapes pour ne garder que celles avec des QR codes
        const filteredEtapes = allEtapes.filter((etape: any) => etapeIds.has(etape.idetape))
        console.log(`Étapes filtrées pour ce transport:`, filteredEtapes)
        
        etapes.value = filteredEtapes
        qrcodes.value = qrCodesData
        
        // Générer les QR codes
        await nextTick()
        await generateQRCodes()
      } else {
        console.warn(`Pas de QR codes trouvés pour transport ${props.transport.idtransport}`)
        // Essayer un endpoint alternatif
        console.log(`Essai endpoint alternatif...`)
        const allQRRes = await fetch(`${API_BASE_URL}/qr-codes/etapes`)
        if (allQRRes.ok) {
          const allQRCodes = await allQRRes.json()
          console.log(`Tous les QR codes:`, allQRCodes)
          qrcodes.value = allQRCodes
          
          // Un seul endpoint fonctionne - afficher tous les QR codes
          const uniqueEtapes = Array.from(new Set(allQRCodes.map((qr: any) => qr.etape?.idetape)))
          etapes.value = allEtapes.filter((etape: any) => uniqueEtapes.includes(etape.idetape))
          
          await nextTick()
          await generateQRCodes()
        }
      }
    } else {
      console.warn(`Pas d'étapes trouvées`)
    }
  } catch (err) {
    console.error('Erreur lors du chargement des étapes:', err)
  } finally {
    loadingEtapes.value = false
  }
}

const generateQRCodes = async () => {
  for (const qrCode of qrcodes.value) {
    try {
      const canvas = document.getElementById(`qr-canvas-modal-${qrCode.id}`) as HTMLCanvasElement
      if (canvas) {
        await QRCode.toCanvas(canvas, qrCode.code, {
          width: 150,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        })
      }
    } catch (err) {
      console.error(`Erreur génération QR code ${qrCode.id}:`, err)
    }
  }
}

// Initialiser la carte quand le modal s'ouvre
watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    // Attendre que le DOM soit à jour
    await nextTick()
    
    // Charger les étapes et QR codes
    await fetchEtapesAndQRCodes()
    
    // Puis attendre plus longtemps pour que la hauteur soit correctement définie
    setTimeout(() => {
      initMap()
    }, 200)
  }
})
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="bg-white border-b border-gray-200 p-6 flex justify-between items-start">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Transport #{{ transport?.idtransport }}</h2>
          <p class="text-gray-600 mt-1">{{ formattedDate }}</p>
        </div>
        <button @click="onClose" class="text-2xl text-gray-800 hover:text-gray-600">×</button>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Driver Info -->
        <div v-if="transport?.transporteur" class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <div class="flex items-center gap-4">
            <img 
              v-if="transport.transporteur.image" 
              :src="transport.transporteur.image"
              :alt="transport.transporteur.prenom + ' ' + transport.transporteur.nom"
              class="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
            />
            <div v-else class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {{ transport.transporteur.prenom.charAt(0) }}{{ transport.transporteur.nom.charAt(0) }}
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-800">{{ transport.transporteur.prenom }} {{ transport.transporteur.nom }}</h3>
              <p class="text-gray-600">{{ transport.typetransport }}</p>
              <div class="flex gap-4 mt-2 text-sm">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.797l.291 2.324a1 1 0 01-.926 1.17c-.44.049-.902.227-1.30.596a1 1 0 00-.154 1.615l2.696 2.696c.326.326.83.45 1.297.471.556.025 1.116.14 1.649.408.634.326 1.16.845 1.495 1.445.34.608.527 1.304.573 2.019.046.715-.074 1.456-.349 2.132-.271.664-.716 1.272-1.304 1.704a1 1 0 01-1.243-.06l-2.43-2.43a1 1 0 00-.707-.293H5a1 1 0 01-1-1V3z"/>
                  </svg>
                  {{ transport.transporteur.tel }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  {{ transport.transporteur.mail }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Time & Location -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 font-semibold">Horaire</p>
            <p class="text-2xl font-bold text-gray-800 mt-1">{{ formattedTime }}</p>
          </div>
          <div :class="[
            'rounded-lg p-4 text-white',
            transport?.statut === 'TERMINE' ? 'bg-green-600' : 
            transport?.statut === 'EN_COURS' ? 'bg-orange-600' : 
            'bg-blue-600'
          ]">
            <p class="text-sm font-semibold opacity-90">Statut</p>
            <p class="text-lg font-bold mt-1">
              {{ transport?.statut === 'TERMINE' ? '✓ Terminé' : 
                 transport?.statut === 'EN_COURS' ? '⟳ En cours' : 
                 '📅 Planifié' }}
            </p>
          </div>
        </div>

        <!-- Locations -->
        <div class="space-y-3">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">Lieu de départ</p>
              <p class="font-semibold text-gray-800">{{ transport?.lieudepart }}</p>
            </div>
          </div>
          
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">Lieu d'arrivée</p>
              <p class="font-semibold text-gray-800">{{ transport?.lieuarrive }}</p>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="rounded-lg overflow-hidden border border-gray-200">
          <div 
            ref="mapContainer" 
            class="w-full"
            style="height: 400px; min-height: 400px;">
          </div>
        </div>

        <!-- Étapes & QR Codes -->
        <div class="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-800">Étapes du transport</h3>
          
          <div v-if="loadingEtapes" class="text-center py-4">
            <p class="text-gray-500">Chargement des étapes et QR codes...</p>
          </div>

          <div v-else-if="etapes.length === 0" class="text-center py-4 bg-yellow-50 border border-yellow-200 rounded p-3">
            <p class="text-yellow-700">
              ℹ️ Aucune étape trouvée pour ce transport.<br>
              <span class="text-sm text-yellow-600">Transport ID: {{ props.transport?.idtransport }}</span>
            </p>
          </div>

          <div v-else class="space-y-4">
            <div 
              v-for="(etape, idx) in etapes" 
              :key="etape.idetape"
              class="border-l-4 border-blue-500 pl-4 py-2 bg-white p-3 rounded"
            >
              <div class="flex items-center gap-2 mb-3">
                <span class="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold">
                  {{ idx + 1 }}
                </span>
                <h4 class="font-semibold text-gray-800">{{ etape.statut }}</h4>
              </div>

              <!-- QR Codes for this étape -->
              <div v-if="qrcodes.filter(q => q.etape?.idetape === etape.idetape).length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div 
                  v-for="qr in qrcodes.filter(q => q.etape?.idetape === etape.idetape)"
                  :key="qr.id"
                  class="bg-gray-50 rounded p-3 flex flex-col items-center"
                >
                  <canvas 
                    :id="`qr-canvas-modal-${qr.id}`"
                    width="150"
                    height="150"
                    class="border-2 border-gray-300 rounded bg-white mb-2"
                  ></canvas>
                  <div :class="[
                    'inline-block px-2 py-1 rounded text-xs font-semibold',
                    qr.scanned ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  ]">
                    {{ qr.scanned ? '✓ Scanné' : 'En attente' }}
                  </div>
                </div>
              </div>
              <div v-else class="text-sm text-gray-500 italic">
                Aucun QR code pour cette étape
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Leaflet map styles */
:deep(.leaflet-container) {
  height: 100% !important;
  width: 100% !important;
  background-color: #fff;
}

:deep(.leaflet-pane),
:deep(.leaflet-tile),
:deep(.leaflet-marker-shadow),
:deep(.leaflet-tile-container),
:deep(.leaflet-object-pane),
:deep(.leaflet-popup-pane),
:deep(.leaflet-shadow-pane),
:deep(.leaflet-marker-pane),
:deep(.leaflet-overlay-pane),
:deep(.leaflet-shadow),
:deep(.leaflet-marker),
:deep(.leaflet-marker-icon) {
  position: absolute;
  left: 0;
  top: 0;
}

:deep(.leaflet-container a.leaflet-popup-close-button) {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 0;
  border: none;
  text-align: center;
  width: 24px;
  height: 24px;
  font: 16px/24px Tahoma, Verdana, sans-serif;
  color: #c3c3c3;
  text-decoration: none;
  font-weight: bold;
  background: transparent;
}
</style>
