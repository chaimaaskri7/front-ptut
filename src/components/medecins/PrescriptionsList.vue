<template>
  <div class="w-full bg-[#f8f8f8] min-h-screen">
    <Header subtitle="Prescription" />
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
          <h2 class="font-semibold text-[18px] text-[#1b1b1b]">Prescriptions List</h2>
          <div class="flex gap-2 w-full sm:w-auto">
            <button class="flex-1 sm:flex-none border border-[#f0f0f0] px-4 py-2 rounded-[8px] text-sm hover:bg-gray-50 transition-colors">
              Filter
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
                v-for="(prescription, index) in prescriptions"
                :key="index"
                class="border-b border-[#f0f0f0] hover:bg-[#f8f8f8] transition-colors"
              >
                <td class="px-4 py-3 text-[13px] text-[#666666]">{{ prescription.dateprescription }}</td>
                <td class="px-4 py-3 text-[13px] font-medium text-[#1b1b1b]">{{ prescription.idpatient }}</td>
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
    <div v-if="showViewModal && selectedPrescription" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-white flex justify-between items-center">
          <div>
            <h3 class="text-2xl font-bold">Détails de la Prescription</h3>
            <p class="text-indigo-100 text-sm mt-1">ID: {{ selectedPrescription.idprescription }}</p>
          </div>
          <button 
            @click="showViewModal = false"
            class="text-white hover:text-indigo-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <div class="p-6 space-y-6">
          <!-- Patient Info -->
          <div class="border-l-4 border-indigo-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">Patient</h4>
            <p class="text-sm text-slate-700"><strong>ID Patient:</strong> {{ selectedPrescription.idpatient }}</p>
          </div>

          <!-- Prescription Info -->
          <div class="border-l-4 border-blue-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">Informations de la Prescription</h4>
            <div class="space-y-1 text-sm text-slate-700">
              <p><strong>Date:</strong> {{ selectedPrescription.dateprescription }}</p>
              <p><strong>Type de transport:</strong> <span class="px-2 py-1 rounded text-xs font-medium" :class="{
                'bg-blue-100 text-blue-700': selectedPrescription.typetransport === 'VSL',
                'bg-red-100 text-red-700': selectedPrescription.typetransport === 'Ambulance',
                'bg-yellow-100 text-yellow-700': selectedPrescription.typetransport === 'Taxi'
              }">{{ selectedPrescription.typetransport }}</span></p>
            </div>
          </div>

          <!-- Médecin Info -->
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">Médecin</h4>
            <p class="text-sm text-slate-700"><strong>ID Médecin:</strong> {{ selectedPrescription.idmedecin }}</p>
          </div>

          <!-- Status -->
          <div class="border-l-4 border-yellow-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">Statut</h4>
            <p class="text-sm">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Active</span>
            </p>
          </div>

          <!-- Additional Details -->
          <div class="bg-slate-50 p-4 rounded-lg">
            <h4 class="font-semibold text-slate-900 mb-3">Autres détails</h4>
            <div class="space-y-2 text-sm text-slate-700">
              <p v-if="selectedPrescription.mode_transport"><strong>Mode de transport:</strong> {{ selectedPrescription.mode_transport }}</p>
              <p v-if="selectedPrescription.nombre_transports"><strong>Nombre de transports:</strong> {{ selectedPrescription.nombre_transports }}</p>
              <p><strong>Statut complet:</strong> Créée et active</p>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="sticky bottom-0 bg-slate-50 px-6 py-4 flex gap-4 justify-between border-t border-slate-200">
          <button
            @click="downloadPDF(selectedPrescription)"
            class="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            📥 Télécharger PDF
          </button>
          <button 
            @click="showViewModal = false"
            class="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '../../composables/useAuth';
import Header from '../Header.vue';
import Pagination from '../Pagination.vue';

const auth = useAuth();
const route = useRoute();
const currentPage = ref(1);
const prescriptions = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const showViewModal = ref(false);
const selectedPrescription = ref<any>(null);

const fetchPrescriptions = async () => {
  loading.value = true;
  error.value = null;
  try {
    // Fetch prescriptions for the connected medecin
    const response = await fetch(`http://localhost:8081/prescriptions/medecin/${auth.userId.value}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Prescriptions du médecin reçues:', data);
    prescriptions.value = data;
  } catch (err: any) {
    console.error('Erreur lors de la récupération des prescriptions:', err);
    error.value = `Erreur: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPrescriptions();
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
    const pdfResponse = await fetch(`http://localhost:8081/prescriptions/${prescription.idprescription}/pdf`, {
      method: 'GET',
      credentials: 'include'
    });
    
    if (pdfResponse.ok) {
      const blob = await pdfResponse.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `prescription_${prescription.idprescription}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } else {
      alert('Erreur lors du téléchargement du PDF');
    }
  } catch (err) {
    console.error('Erreur:', err);
    alert('Erreur lors du téléchargement du PDF');
  }
};
</script>
