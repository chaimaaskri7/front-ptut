<template>
  <div class="w-full bg-[#f8f8f8] min-h-screen">
    <Header subtitle="Prescription" @search="handleSearch" />
    <div class="p-4 md:p-6 lg:p-8">
      <!-- Message d'erreur -->
      <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {{ error }}
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-8">
        <p class="text-gray-500">Chargement des prescriptions...</p>
      </div>

      <!-- Contenu principal -->
      <div v-else class="bg-white border border-[#f0f0f0] rounded-[10px] p-4">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 class="font-semibold text-[18px] text-[#1b1b1b]">Liste des prescriptions</h2>
          <div class="flex gap-2 w-full sm:w-auto">
            <button class="flex-1 sm:flex-none border border-[#f0f0f0] px-4 py-2 rounded-[8px] text-sm hover:bg-gray-50 transition-colors">
              Filtrer
            </button>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-[#f0f0f0] bg-[#f9f9fb]">
                <th class="text-left px-4 py-3 text-[11px] font-semibold text-[#666e7d] uppercase">Date</th>
                <th class="text-left px-4 py-3 text-[11px] font-semibold text-[#666e7d] uppercase">Patient</th>
                <th class="text-left px-4 py-3 text-[11px] font-semibold text-[#666e7d] uppercase hidden md:table-cell">Transport</th>
                <th class="text-center px-4 py-3 text-[11px] font-semibold text-[#666e7d] uppercase">Status</th>
                <th class="text-center px-4 py-3 text-[11px] font-semibold text-[#666e7d] uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(prescription, index) in filteredPrescriptions"
                :key="index"
                class="border-b border-[#f0f0f0] hover:bg-[#f8f8f8] transition-colors"
              >
                <td class="px-4 py-3 text-[13px] text-[#666666]">{{ prescription.dateprescription }}</td>
                <td class="px-4 py-3 text-[13px] font-medium text-[#1b1b1b]">{{ getPatientName(prescription.idpatient) }}</td>
                <td class="px-4 py-3 hidden md:table-cell">
                  <span
                    class="px-3 py-1 rounded-full text-xs font-medium inline-block"
                    :class="{
                      'bg-blue-100 text-blue-700': prescription.typetransport === 'VSL',
                      'bg-red-100 text-red-700': prescription.typetransport === 'Ambulance',
                      'bg-yellow-100 text-yellow-700': prescription.typetransport === 'Taxi'
                    }"
                  >
                    {{ prescription.typetransport }}
                  </span>
                </td>
                <td class="px-4 py-3 text-center">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Active
                  </span>
                </td>
                <td class="px-4 py-3 text-center">
                  <button 
                    @click="viewPrescription(prescription)"
                    class="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex justify-between items-center mt-4">
          <span class="text-sm text-gray-600">Page {{ currentPage }} of 12</span>
          <Pagination 
            :current-page="currentPage" 
            :total-pages="12"
            @previous="currentPage--"
            @next="currentPage++"
            @change-page="(page) => currentPage = page"
          />
        </div>
      </div>
    </div>

    <!-- View Prescription Modal -->
    <div v-if="showViewModal && selectedPrescription" class="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <!-- Close Button at top right -->
        <div class="flex justify-end p-4">
          <button 
            @click="showViewModal = false"
            class="text-slate-400 hover:text-slate-600 hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full transition-all text-2xl"
          >
            ✕
          </button>
        </div>

        <!-- Content -->
        <div class="px-8 pt-6 pb-0 space-y-6">
          <!-- Title -->
          <div class="mb-6">
            <h3 class="text-3xl font-bold text-slate-900">📋 Détails de la Prescription</h3>
            <p class="text-slate-500 text-sm mt-2">Prescription ID: <span class="font-mono font-bold text-slate-700">#{{ selectedPrescription.idprescription }}</span></p>
          </div>

          <!-- Grid Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Patient Card -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-blue-500 text-white p-2 rounded-lg">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h4 class="font-bold text-lg text-slate-900">Patient</h4>
              </div>
              <div class="space-y-2">
                <p class="text-sm"><span class="font-semibold text-slate-700">Nom:</span> <span class="text-blue-700 font-mono font-bold">{{ getPatientName(selectedPrescription.idpatient) }}</span></p>
              </div>
            </div>

            <!-- Medical Status Card -->
            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-500 text-white p-2 rounded-lg">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 class="font-bold text-lg text-slate-900">Statut</h4>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white">✓ ACTIF</span>
              </div>
            </div>

            <!-- Prescription Date Card -->
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-purple-500 text-white p-2 rounded-lg">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  </svg>
                </div>
                <h4 class="font-bold text-lg text-slate-900">Date</h4>
              </div>
              <p class="text-sm font-mono text-purple-700">{{ new Date(selectedPrescription.dateprescription).toLocaleDateString('fr-FR') }}</p>
            </div>

            <!-- Transport Type Card -->
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-orange-500 text-white p-2 rounded-lg">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h4 class="font-bold text-lg text-slate-900">Transport</h4>
              </div>
              <span class="px-3 py-2 rounded-lg text-sm font-bold inline-block" :class="{
                'bg-blue-100 text-blue-700': selectedPrescription.typetransport === 'VSL',
                'bg-red-100 text-red-700': selectedPrescription.typetransport === 'Ambulance',
                'bg-yellow-100 text-yellow-700': selectedPrescription.typetransport === 'Taxi'
              }">
                {{ selectedPrescription.typetransport }}
              </span>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

          <!-- Doctor Info Card -->
          <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-indigo-600 text-white p-2 rounded-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h4 class="font-bold text-lg text-slate-900">Médecin Prescripteur</h4>
            </div>
            <p class="text-sm"><span class="font-semibold text-slate-700">ID Médecin:</span> <span class="text-indigo-700 font-mono font-bold">{{ selectedPrescription.idmedecin || 'N/A' }}</span></p>
          </div>

          <!-- Summary Card -->
          <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h4 class="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Récapitulatif
            </h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="bg-white p-3 rounded-lg">
                <p class="text-slate-600 text-xs uppercase tracking-wide">État</p>
                <p class="font-bold text-slate-900 mt-1">Créée et Active</p>
              </div>
              <div class="bg-white p-3 rounded-lg">
                <p class="text-slate-600 text-xs uppercase tracking-wide">Créée le</p>
                <p class="font-bold text-slate-900 mt-1">{{ new Date(selectedPrescription.dateprescription).toLocaleDateString('fr-FR') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="px-8 py-6 flex gap-4 justify-end border-t border-slate-200 rounded-b-2xl bg-white">
          <button 
            @click="showViewModal = false"
            class="px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 transition-all"
          >
            Fermer
          </button>
          <button
            @click="downloadPDF(selectedPrescription)"
            class="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Télécharger PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '../../composables/useAuth';
import Header from '../Header.vue';
import Pagination from '../Pagination.vue';
import { fetchData, fetchFile } from '../../services/api-config';

const auth = useAuth();
const route = useRoute();
const currentPage = ref(1);
const prescriptions = ref<any[]>([]);
const patients = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const showViewModal = ref(false);
const selectedPrescription = ref<any>(null);
const searchQuery = ref<string>('');

// Get patient name by ID
const getPatientName = (patientId: number): string => {
  const patient = patients.value.find(p => p.idpatient === patientId);
  return patient ? `${patient.prenom} ${patient.nom}` : `Patient #${patientId}`;
};

// Filtered prescriptions based on search query
const filteredPrescriptions = computed(() => {
  if (!searchQuery.value.trim()) {
    return prescriptions.value;
  }
  
  const query = searchQuery.value.toLowerCase();
  return prescriptions.value.filter(prescription => {
    const patientName = getPatientName(prescription.idpatient).toLowerCase();
    const motif = (prescription.motifmedical || '').toLowerCase();
    const transport = (prescription.typetransport || '').toLowerCase();
    
    return patientName.includes(query) || motif.includes(query) || transport.includes(query);
  });
});

// Handle search
const handleSearch = (query: string) => {
  searchQuery.value = query;
};

const fetchPatients = async () => {
  try {
    // Load ALL patients (not filtered) so we can resolve ANY patient name
    const allPatients = await fetchData(`/patients`);
    patients.value = allPatients;
    console.log(`Loaded ${allPatients.length} patients for name resolution`);
  } catch (err) {
    console.error('Erreur lors de la récupération des patients:', err);
  }
};

const fetchPrescriptions = async () => {
  loading.value = true;
  error.value = null;
  try {
    // Load ALL prescriptions and filter client-side by medecin ID
    const allPrescriptions = await fetchData(`/prescriptions`);
    console.log('Total prescriptions from API:', allPrescriptions.length);
    
    // Filter for current medecin (using 'medecin' field which is the medecinId)
    const medecinPrescriptions = allPrescriptions.filter((p: any) => 
      p.medecin === auth.userId.value || p.idmedecin === auth.userId.value
    );
    
    console.log(`Prescriptions filtered for medecin ${auth.userId.value}:`, medecinPrescriptions.length);
    prescriptions.value = medecinPrescriptions;
  } catch (err: any) {
    console.error('Erreur lors de la récupération des prescriptions:', err);
    error.value = `Erreur: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  // Load patients FIRST so getPatientName() will find them
  await fetchPatients();
  await fetchPrescriptions();
});

// Auto-refresh when returning to the prescriptions page
watch(() => route.path, (newPath) => {
  if (newPath === '/prescriptions') {
    fetchPrescriptions();
  }
});

const viewPrescription = (prescription: any) => {
  selectedPrescription.value = prescription;
  showViewModal.value = true;
};

const downloadPDF = async (prescription: any) => {
  try {
    const blob = await fetchFile(`/prescriptions/${prescription.idprescription}/pdf`);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prescription_${prescription.idprescription}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Erreur:', err);
    alert('Erreur lors du téléchargement du PDF');
  }
};
</script>
