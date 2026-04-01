<script setup lang="ts">
import { ref, onMounted } from 'vue'

const patients = ref<any[]>([])
const prescriptions = ref<any[]>([])
const transports = ref<any[]>([])
const loading = ref(true)
const error = ref('')

const fetchAllData = async () => {
  try {
    loading.value = true
    error.value = ''
    
    // Test direct fetch without service layer
    const patientsRes = await fetch('http://localhost:8081/patients')
    const prescriptionsRes = await fetch('http://localhost:8081/prescriptions')
    const transportsRes = await fetch('http://localhost:8081/transports')
    
    if (!patientsRes.ok) throw new Error(`Patients: ${patientsRes.status}`)
    if (!prescriptionsRes.ok) throw new Error(`Prescriptions: ${prescriptionsRes.status}`)
    if (!transportsRes.ok) throw new Error(`Transports: ${transportsRes.status}`)
    
    patients.value = await patientsRes.json()
    prescriptions.value = await prescriptionsRes.json()
    transports.value = await transportsRes.json()
    
  } catch (err: any) {
    error.value = err.message || 'Erreur lors du chargement des données'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAllData()
})
</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-4xl font-bold mb-6 text-blue-600">🧪 Test Backend Connection</h1>
    
    <button 
      @click="fetchAllData"
      class="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Recharger les données
    </button>

    <div v-if="loading" class="text-center text-xl text-gray-600">
      ⏳ Chargement en cours...
    </div>

    <div v-if="error" class="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      ❌ Erreur: {{ error }}
    </div>

    <!-- PATIENTS -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">👥 Patients ({{ patients.length }})</h2>
      <div v-if="patients.length === 0" class="text-gray-500">Aucun patient trouvé</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="p in patients" :key="p.idpatient" class="bg-white p-4 rounded-lg shadow">
          <p class="font-bold text-lg">{{ p.prenom }} {{ p.nom }}</p>
          <p class="text-sm text-gray-600">ID: {{ p.idpatient }}</p>
          <p class="text-sm">📧 {{ p.mail }}</p>
          <p class="text-sm">📅 {{ p.datenaiss }}</p>
          <p class="text-sm">🔢 NSS: {{ p.nss }}</p>
        </div>
      </div>
    </div>

    <!-- PRESCRIPTIONS -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">📋 Prescriptions ({{ prescriptions.length }})</h2>
      <div v-if="prescriptions.length === 0" class="text-gray-500">Aucune prescription trouvée</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="pr in prescriptions" :key="pr.idprescription" class="bg-white p-4 rounded-lg shadow">
          <p class="font-bold text-lg">Prescription #{{ pr.idprescription }}</p>
          <p class="text-sm text-gray-600">Patient ID: {{ pr.idpatient }}</p>
          <p class="text-sm">🚑 Type: {{ pr.typetransport }}</p>
          <p class="text-sm">📝 Motif: {{ pr.motifmedical }}</p>
          <p class="text-sm">📅 Date: {{ pr.dateprescription }}</p>
          <p class="text-sm">👨‍⚕️ Médecin: {{ pr.medecin }}</p>
        </div>
      </div>
    </div>

    <!-- TRANSPORTS -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">🚗 Transports ({{ transports.length }})</h2>
      <div v-if="transports.length === 0" class="text-gray-500">Aucun transport trouvé</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="t in transports" :key="t.idtransport" class="bg-white p-4 rounded-lg shadow">
          <p class="font-bold text-lg">Transport #{{ t.idtransport }}</p>
          <p class="text-sm text-gray-600">ID: {{ t.idtransport }}</p>
          <p class="text-sm">🚑 Type: {{ t.typetransport }}</p>
          <p class="text-sm">📅 Date: {{ t.datetransport }}</p>
          <p class="text-sm">➡️ {{ t.lieudepart }} → {{ t.lieuarrive }}</p>
        </div>
      </div>
    </div>

    <!-- RAW JSON DEBUG -->
    <div class="mt-12 pt-12 border-t">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">🔍 Debug Raw JSON</h2>
      <div class="bg-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
        <p class="font-bold mb-2">PATIENTS:</p>
        <pre>{{ JSON.stringify(patients, null, 2) }}</pre>
        <p class="font-bold mt-4 mb-2">PRESCRIPTIONS:</p>
        <pre>{{ JSON.stringify(prescriptions, null, 2) }}</pre>
        <p class="font-bold mt-4 mb-2">TRANSPORTS:</p>
        <pre>{{ JSON.stringify(transports, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>
