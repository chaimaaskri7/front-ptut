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
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Transport Stats -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
          <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Type de Transport Préféré
          </h2>
          <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-8 text-center">
            <p class="text-4xl font-bold text-indigo-600 mb-2">{{ stats.topTransportType }}</p>
            <p class="text-slate-600">Transport le plus prescrit</p>
          </div>
        </div>

        <!-- Performance Indicator -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-500">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Performance</h2>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium text-slate-700">Activité</span>
                <span class="text-sm font-bold text-emerald-600">{{ performancePercentage }}%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full transition-all duration-500" 
                     :style="{ width: performancePercentage + '%' }"></div>
              </div>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p class="text-sm text-emerald-700">
                <span v-if="performancePercentage >= 100" class="font-bold">Excellent! 🚀</span>
                <span v-else-if="performancePercentage >= 80" class="font-bold">Très bon! 👍</span>
                <span v-else class="font-bold">En progression 📈</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Prescriptions & Patients Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
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
</template>
    
    <div class="p-4 md:p-6 lg:p-8">
      <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
          <StatsCard title="Appointments" :value="stats.appointments" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>

          <StatsCard title="New Patients" :value="stats.newPatients" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>

          <StatsCard title="Operations" :value="stats.operations" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>

          <StatsCard title="Transport cost" :value="`$ ${stats.transportCost.toFixed(0)}`" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          <!-- Income Chart -->
          <div class="col-span-2 bg-white rounded-[10px] border border-[#f0f0f0] p-6">
            <div class="flex justify-between items-center mb-4">
              <div>
                <p class="font-bold text-[32px] text-[#1b1b1b]">$ 100,000</p>
                <p class="font-normal text-[14px] text-[#7f7f7f] mt-2">Income in current month</p>
              </div>
            </div>
            <div class="h-[300px] flex items-end justify-between px-4">
              <!-- Simple Chart Placeholder -->
              <div class="flex items-end justify-between w-full h-full">
                <div v-for="(val, idx) in chartData" :key="idx" class="flex flex-col items-center flex-1">
                  <div 
                    class="w-2 bg-[#558EFF] rounded-t"
                    :style="{ height: val + '%' }"
                  ></div>
                  <span class="text-xs text-gray-500 mt-2">{{ chartLabels[idx] }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Your Rating -->
          <div class="bg-white rounded-[10px] border border-[#f0f0f0] p-6">
            <h3 class="font-semibold text-[18px] text-[#1b1b1b] mb-2">Your Rating</h3>
            <p class="text-[14px] text-[#7f7f7f] mb-6">Lorem ipsum dolor sit amet, consectetur</p>
            
            <div class="relative w-full h-[250px] flex items-center justify-center">
              <!-- Donut Chart Placeholder -->
              <div class="relative">
                <div class="w-48 h-48 rounded-full border-[30px] border-[#F59E0B] relative">
                  <div class="absolute top-0 left-0 w-full h-full rounded-full border-[30px] border-[#558EFF]" style="clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 40%, 50% 50%);"></div>
                  <div class="absolute top-0 left-0 w-full h-full rounded-full border-[30px] border-[#22D3EE]" style="clip-path: polygon(0 100%, 50% 50%, 0 0, 0 60%, 50% 50%);"></div>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-4xl font-bold text-[#F59E0B]">20%</span>
                    <span class="text-sm text-gray-500">Enfant</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div class="text-center">
                <div class="flex items-center justify-center gap-1">
                  <div class="w-3 h-3 rounded-full bg-[#558EFF]"></div>
                  <span class="text-xs">60%</span>
                </div>
                <p class="text-xs text-gray-500">Adulte</p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center gap-1">
                  <div class="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                  <span class="text-xs">20%</span>
                </div>
                <p class="text-xs text-gray-500">Enfant</p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center gap-1">
                  <div class="w-3 h-3 rounded-full bg-[#22D3EE]"></div>
                  <span class="text-xs">92%</span>
                </div>
                <p class="text-xs text-gray-500">Agée</p>
              </div>
            </div>
          </div>

          <!-- Order Time -->
          <div class="bg-white rounded-[10px] border border-[#f0f0f0] p-6">
            <div class="flex justify-between items-center mb-4">
              <div>
                <h3 class="font-semibold text-[18px] text-[#1b1b1b]">Order Time</h3>
                <p class="text-[14px] text-[#7f7f7f]">From 1-6 Dec, 2020</p>
              </div>
              <a href="#" class="text-[#558EFF] text-sm">View Report</a>
            </div>
            
            <!-- Donut Chart -->
            <div class="relative w-full h-[200px] flex items-center justify-center mb-6">
              <div class="w-40 h-40 rounded-full border-[35px] border-[#A9C1FD] relative">
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-sm text-gray-500">Afternoon</span>
                  <span class="text-sm text-gray-500">11am - 4pm</span>
                  <span class="text-2xl font-bold">1,890 VSL</span>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <div class="flex items-center justify-center gap-1 mb-1">
                  <div class="w-2 h-2 rounded-full bg-[#558EFF]"></div>
                  <span class="text-sm font-semibold">VSL</span>
                </div>
                <p class="text-xs text-gray-500">40%</p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center gap-1 mb-1">
                  <div class="w-2 h-2 rounded-full bg-[#A9C1FD]"></div>
                  <span class="text-sm font-semibold">Ambulance</span>
                </div>
                <p class="text-xs text-gray-500">32%</p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center gap-1 mb-1">
                  <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                  <span class="text-sm font-semibold">Taxi</span>
                </div>
                <p class="text-xs text-gray-500">28%</p>
              </div>
            </div>
          </div>

          <!-- Transport by Type -->
          <div class="col-span-2 bg-white rounded-[10px] border border-[#f0f0f0] p-6">
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-semibold text-[18px] text-[#1b1b1b]">TRANSPORT BY TYPE</h3>
              <select class="border border-[#f0f0f0] rounded px-3 py-1 text-sm">
                <option>Last 30 days by week</option>
              </select>
            </div>
            
            <div class="h-[300px]">
              <!-- Bar Chart Placeholder -->
              <div class="flex items-end justify-between h-full gap-2">
                <div v-for="week in 5" :key="week" class="flex-1 flex items-end justify-around gap-1">
                  <div class="w-8 bg-[#F59E0B] rounded-t" :style="{ height: Math.random() * 80 + 20 + '%' }"></div>
                  <div class="w-8 bg-[#558EFF] rounded-t" :style="{ height: Math.random() * 80 + 20 + '%' }"></div>
                  <div class="w-8 bg-[#22D3EE] rounded-t" :style="{ height: Math.random() * 80 + 20 + '%' }"></div>
                </div>
              </div>
              <div class="flex justify-between mt-2 text-xs text-gray-500">
                <span>Sept 1-6</span>
                <span>Sept 7-12</span>
                <span>Sept 13-18</span>
                <span>Sept 19-24</span>
                <span>Sept 25-30</span>
              </div>
            </div>
            
            <div class="flex justify-center gap-6 mt-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <span class="text-sm">Sum of direct visits</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-[#558EFF]"></div>
                <span class="text-sm">Sum of referral visits</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-[#22D3EE]"></div>
                <span class="text-sm">Sum of search visits</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Header from '../Header.vue'
import { useAuth } from '../../composables/useAuth'

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

const performancePercentage = computed(() => {
  if (stats.value.averagePrescriptions === 0) return 0
  const percentage = (stats.value.prescriptionsCount / stats.value.averagePrescriptions) * 100
  return Math.min(percentage, 100)
})

const fetchStats = async () => {
  try {
    const response = await fetch(`http://localhost:8080/medecins/${auth.userId.value}/stats`)
    if (response.ok) {
      stats.value = await response.json()
    }
  } catch (error) {
    console.error('Erreur lors du chargement des stats:', error)
  }
}

const fetchPrescriptions = async () => {
  try {
    const response = await fetch(`http://localhost:8080/prescriptions/medecin/${auth.userId.value}`)
    if (response.ok) {
      const data = await response.json()
      prescriptions.value = Array.isArray(data) ? data : [data]
    }
  } catch (error) {
    console.error('Erreur lors du chargement des prescriptions:', error)
  }
}

const fetchPatients = async () => {
  try {
    const response = await fetch(`http://localhost:8080/patients/medecin/${auth.userId.value}`)
    if (response.ok) {
      patients.value = await response.json()
    }
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
