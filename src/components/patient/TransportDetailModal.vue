<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Props {
  transport: any
  isOpen: boolean
  onClose: () => void
}

const props = defineProps<Props>()
const mapContainer = ref<HTMLElement | null>(null)
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
  if (!mapContainer.value || map) return

  // Coordonnées de démonstration (Paris)
  const centerCoords: [number, number] = [48.8566, 2.3522]
  
  map = L.map(mapContainer.value).setView(centerCoords, 13)
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)

  // Marqueurs de démonstration
  const startMarker = L.marker([48.8566, 2.3522], {
    icon: L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  }).addTo(map)
  
  const endMarker = L.marker([48.8816, 2.2675], {
    icon: L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  }).addTo(map)

  // Tracer une ligne entre les points
  const polyline = L.polyline([[48.8566, 2.3522], [48.8816, 2.2675]], {
    color: '#4f46e5',
    weight: 3,
    opacity: 0.7,
    dashArray: '5, 5'
  }).addTo(map)
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="bg-blue-600 text-white p-6 flex justify-between items-start">
        <div>
          <h2 class="text-2xl font-bold">Transport #{{ transport?.idtransport }}</h2>
          <p class="text-blue-100 mt-1">{{ formattedDate }}</p>
        </div>
        <button @click="onClose" class="text-2xl hover:text-blue-200">×</button>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Driver Info -->
        <div v-if="transport?.transporteur" class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
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
          <div ref="mapContainer" class="h-64 w-full"></div>
        </div>

        <!-- QR Code Button -->
        <button class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
          QR codes
        </button>
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
</style>
