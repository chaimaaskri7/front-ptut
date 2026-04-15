<template>
  <div class="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
    <Header subtitle="Vos Patients" @search="handleSearch" />
    
    <div class="p-4 md:p-8 max-w-7xl mx-auto">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Mes Patients
        </h1>
        <p class="text-lg text-slate-600">
          Gérez et consultez vos <span class="font-semibold text-indigo-600">{{ patients.length }} patients</span>
          <span v-if="searchQuery" class="text-slate-500">(filtré de {{ allPatients.length }})</span>
        </p>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
        {{ error }}
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-16">
        <div class="inline-block">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p class="text-slate-600 mt-4">Chargement des patients...</p>
        </div>
      </div>

      <!-- Patients Table -->
      <div v-else-if="patients.length > 0" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-200">
                <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Nom & Prénom</th>
                <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700 uppercase">NSS</th>
                <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Condition</th>
                <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Âge</th>
                <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Contact</th>
                <th class="text-center px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr 
                v-for="(patient, index) in patients" 
                :key="index"
                class="hover:bg-slate-50 transition-colors"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span class="text-indigo-600 font-semibold text-sm">{{ patient.prenom.charAt(0) }}{{ patient.nom.charAt(0) }}</span>
                    </div>
                    <div>
                      <p class="font-semibold text-slate-900">{{ patient.prenom }} {{ patient.nom }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-slate-600 text-sm">{{ patient.nss }}</td>
                <td class="px-6 py-4">
                  <span class="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                    {{ patient.maladie }}
                  </span>
                </td>
                <td class="px-6 py-4 text-slate-600 text-sm">{{ calculateAge(patient.datenaiss) }} ans</td>
                <td class="px-6 py-4 text-slate-600 text-sm">
                  <div class="space-y-1">
                    <p class="text-xs">{{ patient.mail }}</p>
                    <p class="text-xs">{{ patient.tel || 'N/A' }}</p>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <router-link 
                    :to="`/prescription/create/${patient.idpatient}`"
                    class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Prescriptions
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white rounded-xl shadow-lg p-12 text-center">
        <div class="mb-4">
          <svg class="w-16 h-16 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z" />
          </svg>
        </div>
        <p v-if="searchQuery" class="text-slate-600 text-lg">Aucun patient ne correspond à votre recherche : <span class="font-semibold">"{{ searchQuery }}"</span></p>
        <p v-else class="text-slate-600 text-lg">Aucun patient attribué pour le moment</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAuth } from '../../composables/useAuth';
import Header from '../Header.vue';
import { fetchData } from '../../services/api-config';

interface Patient {
  idpatient: number
  prenom: string
  nom: string
  maladie: string
  nss: string
  mail: string
  tel?: string
  datenaiss: string
}

const auth = useAuth();
const allPatients = ref<Patient[]>([]);
const searchQuery = ref('');
const loading = ref(false);
const error = ref<string | null>(null);

// Propriété computed pour les patients filtrés
const patients = computed(() => {
  if (!searchQuery.value.trim()) {
    return allPatients.value;
  }
  
  const query = searchQuery.value.toLowerCase();
  return allPatients.value.filter(patient => 
    patient.nom.toLowerCase().includes(query) ||
    patient.prenom.toLowerCase().includes(query) ||
    patient.nss.toLowerCase().includes(query)
  );
});

// Gestionnaire pour l'événement de recherche
const handleSearch = (query: string) => {
  searchQuery.value = query;
};

// Calculer l'âge du patient
const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// Récupérer les patients du médecin connecté
const fetchPatients = async () => {
  loading.value = true;
  error.value = null;
  try {
    console.log('=== FETCHING PATIENTS ===');
    console.log('Current medecin ID:', auth.userId.value, typeof auth.userId.value);
    
    // Get all prescriptions to find which patients are assigned to this medecin
    const allPrescriptions = await fetchData(`/prescriptions`);
    console.log('Total prescriptions from server:', allPrescriptions.length);
    console.log('First prescription sample:', allPrescriptions[0]);
    
    const medecinPrescriptions = allPrescriptions.filter((p: any) => {
      const match = p.medecin === auth.userId.value || p.idmedecin === auth.userId.value;
      return match;
    });
    
    console.log('Prescriptions for this medecin:', medecinPrescriptions.length);
    console.log('Patient IDs in prescriptions:', medecinPrescriptions.map(p => p.idpatient));
    
    // Extract unique patient IDs from medecin's prescriptions
    const medecinPatientIds = new Set(medecinPrescriptions.map(p => p.idpatient));
    console.log('Unique patient IDs:', Array.from(medecinPatientIds));
    
    // Load all patients and filter to only those who have prescriptions from this medecin
    const allData = await fetchData(`/patients`);
    console.log('Total patients from server:', allData.length);
    
    const medecinPatients = allData.filter((p: any) => {
      const has = medecinPatientIds.has(p.idpatient);
      return has;
    });
    
    console.log('=== FINAL RESULT ===');
    console.log('Filtered patients for medecin:', medecinPatients.length);
    console.log('Patients:', medecinPatients.map(p => `${p.prenom} ${p.nom}`));
    
    allPatients.value = medecinPatients;
  } catch (err: any) {
    console.error('❌ ERREUR lors de la récupération des patients:', err);
    error.value = `Erreur: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

// Charger les patients au montage du composant
onMounted(() => {
  fetchPatients();
});
</script>
