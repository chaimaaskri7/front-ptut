<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
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

// Initialiser la carte quand le modal s'ouvre
watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    // Attendre que le DOM soit à jour
    await nextTick()
    
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
