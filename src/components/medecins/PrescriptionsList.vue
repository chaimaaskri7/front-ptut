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
                  <button class="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
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
</script>
