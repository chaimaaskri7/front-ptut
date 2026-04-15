<template>
  <div class="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
    <Header subtitle="Dashboard Médecin" />
    
    <div class="p-4 md:p-8 max-w-7xl mx-auto">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Bienvenue, Dr {{ auth.userName.value }}
        </h1>
        <p class="text-lg text-slate-600">
          Spécialiste en <span class="font-semibold text-indigo-600">{{ auth.specialite.value }}</span>
        </p>
      </div>

      <!-- KPI Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <!-- Prescriptions Count Card -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-indigo-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-600 mb-1">Prescriptions</p>
              <p class="text-3xl font-bold text-slate-900">{{ stats.prescriptionsCount }}</p>
            </div>
            <div class="bg-indigo-100 rounded-full p-3">
              <svg class="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <span v-if="stats.prescriptionsCount >= stats.averagePrescriptions" class="text-green-600 font-semibold">
              ↑ {{ (stats.prescriptionsCount - stats.averagePrescriptions).toFixed(1) }} au-dessus
            </span>
            <span v-else class="text-amber-600 font-semibold">
              ↓ {{ (stats.averagePrescriptions - stats.prescriptionsCount).toFixed(1) }} en-dessous
            </span>
          </div>
        </div>

        <!-- Patients Count Card -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-emerald-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-600 mb-1">Patients</p>
              <p class="text-3xl font-bold text-slate-900">{{ stats.patientsCount }}</p>
            </div>
            <div class="bg-emerald-100 rounded-full p-3">
              <svg class="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z" />
              </svg>
            </div>
          </div>
          <p class="text-xs text-slate-500">Patients attribués</p>
        </div>

        <!-- Average Prescriptions Card -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-600 mb-1">Moyenne Équipe</p>
              <p class="text-3xl font-bold text-slate-900">{{ stats.averagePrescriptions.toFixed(1) }}</p>
            </div>
            <div class="bg-blue-100 rounded-full p-3">
              <svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <p class="text-xs text-slate-500">Prescriptions par médecin</p>
        </div>

        <!-- Top Disease Card -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-rose-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-600 mb-1">Maladie Principal</p>
              <p class="text-lg font-bold text-slate-900 truncate">{{ stats.topDiseaseByMedecin }}</p>
            </div>
            <div class="bg-rose-100 rounded-full p-3">
              <svg class="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-xs text-slate-500">Plus traitée</p>
        </div>

        <!-- Average Age Card -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-purple-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-600 mb-1">Âge Moyen</p>
              <p class="text-3xl font-bold text-slate-900">{{ averagePatientAge.toFixed(1) }}</p>
            </div>
            <div class="bg-purple-100 rounded-full p-3">
              <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p class="text-xs text-slate-500">Patients attribués</p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Transport Stats with Pie Chart -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
          <h2 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Distribution des Types de Transport
          </h2>
          <div v-if="transportStats.labels && transportStats.labels.length > 0" class="flex items-center justify-center w-full max-w-sm aspect-square mx-auto">
            <Pie 
              :data="transportChartData" 
              :options="chartOptions"
              class="w-full h-full"
            />
          </div>
          <div v-else class="text-center py-8">
            <p class="text-slate-500">Aucune prescription disponible</p>
          </div>
          
          <!-- Transport Stats Details -->
          <div class="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-200">
            <div v-for="(percentage, type) in transportStats.percentages" :key="type" class="text-center">
              <div class="text-2xl font-bold text-indigo-600">{{ percentage }}%</div>
              <div class="text-xs text-slate-600 truncate">{{ type }}</div>
            </div>
          </div>
        </div>

        <!-- Prescriptions & Patients Column -->
        <div class="lg:col-span-1 flex flex-col gap-8">
          <!-- Recent Prescriptions -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden" v-if="prescriptions.length > 0">
          <div class="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6">
            <h2 class="text-xl font-bold text-white flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Prescriptions Récentes
            </h2>
          </div>
          <div class="divide-y divide-slate-200">
            <div v-for="(prescription, idx) in prescriptions.slice(0, 3)" :key="idx" class="p-4 hover:bg-slate-50 transition-colors">
              <div class="flex justify-between items-start mb-2">
                <p class="font-semibold text-slate-900">{{ prescription.motifmedical }}</p>
                <span class="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
                  ID: {{ prescription.idprescription }}
                </span>
              </div>
              <p class="text-sm text-slate-600">Transport: <span class="font-medium">{{ prescription.typetransport }}</span></p>
              <p class="text-xs text-slate-500 mt-1">Patient ID: {{ prescription.idpatient }}</p>
            </div>
          </div>
        </div>

        <!-- Patients Stats -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden" v-if="patients.length > 0">
          <div class="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
            <h2 class="text-xl font-bold text-white flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3a6 6 0 016-6h7a2 2 0 012 2v1a6 6 0 01-6 6z" />
              </svg>
              Vos Patients
            </h2>
          </div>
          <div class="divide-y divide-slate-200">
            <div v-for="(patient, idx) in patients.slice(0, 3)" :key="idx" class="p-4 hover:bg-slate-50 transition-colors">
              <div class="flex justify-between items-start mb-2">
                <p class="font-semibold text-slate-900">{{ patient.prenom }} {{ patient.nom }}</p>
                <span class="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                  ID: {{ patient.idpatient }}
                </span>
              </div>
              <p class="text-sm text-slate-600">Condition: <span class="font-medium text-rose-600">{{ patient.maladie }}</span></p>
              <p class="text-xs text-slate-500 mt-1">NSS: {{ patient.nss }}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'
import Header from '../Header.vue'
import { useAuth } from '../../composables/useAuth'
import { fetchData } from '../../services/api-config'

ChartJS.register(ArcElement, Tooltip, Legend)

const auth = useAuth()

interface Stats {
  prescriptionsCount: number
  averagePrescriptions: number
  patientsCount: number
  topDiseaseByMedecin: string
  topTransportType: string
}

interface Prescription {
  idprescription: number
  motifmedical: string
  typetransport: string
  idpatient: number
  medecin: string
}

interface Patient {
  idpatient: number
  prenom: string
  nom: string
  maladie: string
  nss: string
  datenaiss: string
}

interface TransportStats {
  labels: string[]
  counts: number[]
  percentages: Record<string, number>
}

const stats = ref<Stats>({
  prescriptionsCount: 0,
  averagePrescriptions: 0,
  patientsCount: 0,
  topDiseaseByMedecin: 'N/A',
  topTransportType: 'N/A'
})

const prescriptions = ref<Prescription[]>([])
const patients = ref<Patient[]>([])

const transportStats = ref<TransportStats>({
  labels: [],
  counts: [],
  percentages: {}
})

const chartOptions = ref<ChartOptions<'pie'>>({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 15,
        font: {
          size: 12,
          weight: 'bold'
        },
        color: '#1e293b'
      }
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      padding: 12,
      titleFont: {
        size: 14,
        weight: 'bold'
      },
      bodyFont: {
        size: 13
      },
      callbacks: {
        label: function(context) {
          const label = context.label || ''
          const value = context.parsed || 0
          const total = transportStats.value.counts.reduce((a, b) => a + b, 0)
          const percentage = ((value / total) * 100).toFixed(1)
          return `${label}: ${value} (${percentage}%)`
        }
      }
    }
  }
})

const transportChartData = computed(() => {
  const colors = [
    '#4f46e5', // indigo
    '#06b6d4', // cyan
    '#10b981', // emerald
    '#f59e0b', // amber
    '#ef4444', // red
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#14b8a6'  // teal
  ]

  return {
    labels: transportStats.value.labels,
    datasets: [
      {
        data: transportStats.value.counts,
        backgroundColor: colors.slice(0, transportStats.value.labels.length),
        borderColor: 'white',
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  }
})

const averagePatientAge = computed(() => {
  if (patients.value.length === 0) return 0
  
  const totalAge = patients.value.reduce((sum, patient) => {
    const birthDate = new Date(patient.datenaiss)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return sum + age
  }, 0)
  
  return totalAge / patients.value.length
})

const calculateTransportStats = () => {
  if (prescriptions.value.length === 0) {
    transportStats.value = { labels: [], counts: [], percentages: {} }
    return
  }

  const transportMap: Record<string, number> = {}
  prescriptions.value.forEach(p => {
    const type = p.typetransport || 'Inconnu'
    transportMap[type] = (transportMap[type] || 0) + 1
  })

  const labels = Object.keys(transportMap)
  const counts = Object.values(transportMap)
  const total = counts.reduce((a, b) => a + b, 0)
  const percentages: Record<string, number> = {}
  
  labels.forEach((label, idx) => {
    percentages[label] = Math.round((counts[idx] / total) * 100)
  })

  transportStats.value = { labels, counts, percentages }
}

const fetchStats = async () => {
  try {
    // Load prescriptions and derive stats from them (backend filter endpoints are broken)
    const allPrescriptions = await fetchData(`/prescriptions`)
    const medecinPrescriptions = allPrescriptions.filter((p: any) => 
      p.medecin === auth.userId.value || p.idmedecin === auth.userId.value
    )
    
    // Extract unique patient IDs from prescriptions
    const uniquePatientIds = new Set(medecinPrescriptions.map(p => p.idpatient))
    
    // Calculate average across all medecins (assume 2 medecins from data.sql)
    const uniqueMedecins = new Set(allPrescriptions.map(p => p.medecin || p.idmedecin))
    const avgPrescriptions = allPrescriptions.length / uniqueMedecins.size
    
    stats.value = {
      medecinId: auth.userId.value,
      prescriptionsCount: medecinPrescriptions.length,
      patientsCount: uniquePatientIds.size,
      averagePrescriptions: avgPrescriptions,
      topDiseaseByMedecin: 'N/A'
    }
    
    console.log('Stats calculated:', stats.value)
  } catch (error) {
    console.error('Erreur lors du chargement des stats:', error)
    stats.value = { prescriptionsCount: 0, patientsCount: 0, averagePrescriptions: 0 }
  }
}

const fetchPrescriptions = async () => {
  try {
    // Load ALL prescriptions and filter client-side
    const allPrescriptions = await fetchData(`/prescriptions`)
    const medecinPrescriptions = allPrescriptions.filter((p: any) => 
      p.medecin === auth.userId.value || p.idmedecin === auth.userId.value
    )
    prescriptions.value = Array.isArray(medecinPrescriptions) ? medecinPrescriptions : [medecinPrescriptions]
    console.log(`Loaded ${medecinPrescriptions.length} prescriptions for medecin ${auth.userId.value}`)
    calculateTransportStats()
  } catch (error) {
    console.error('Erreur lors du chargement des prescriptions:', error)
  }
}

const fetchPatients = async () => {
  try {
    // Load ALL patients
    // Note: Patients don't have medecin relationship, so derive from prescriptions
    const allPrescriptions = await fetchData(`/prescriptions`)
    const medecinPrescriptions = allPrescriptions.filter((p: any) => 
      p.medecin === auth.userId.value || p.idmedecin === auth.userId.value
    )
    
    // Get unique patient IDs from medecin's prescriptions
    const medecinPatientIds = new Set(medecinPrescriptions.map(p => p.idpatient))
    
    // Load all patients and filter to only those who have prescriptions from this medecin
    const allPatients = await fetchData(`/patients`)
    patients.value = allPatients.filter((p: any) => medecinPatientIds.has(p.idpatient))
    
    console.log(`Loaded ${patients.value.length} patients for medecin ${auth.userId.value}`)
  } catch (error) {
    console.error('Erreur lors du chargement des patients:', error)
  }
}

onMounted(() => {
  fetchStats()
  fetchPrescriptions()
  fetchPatients()
})
</script>
