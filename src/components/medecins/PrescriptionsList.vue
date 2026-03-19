<template>
  <div class="flex min-h-screen bg-white">
    <Sidebar />
    
    <main class="ml-[289px] flex-1 bg-[#f8f8f8]">
      <Header subtitle="Prescription" />
      
      <div class="p-8">
        <div class="bg-white border border-[#f0f0f0] rounded-[10px] p-4">
          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-semibold text-[18px] text-[#1b1b1b]">Les prescriptions</h2>
            <button class="border border-[#f0f0f0] px-[18px] py-[7px] rounded-[10px] flex items-center gap-[10px] hover:bg-gray-50">
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filter
            </button>
          </div>

          <!-- Table -->
          <div class="border border-[#f0f0f0] rounded-[10px] overflow-hidden">
            <table class="w-full">
              <thead class="bg-[#f9f9fb]">
                <tr>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">ADMITTED</th>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">PATIENT</th>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">TRANSPORT TYPE</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(prescription, index) in prescriptions" 
                  :key="index"
                  class="border-t border-[#f0f0f0] hover:bg-gray-50"
                >
                  <td class="px-4 py-3 text-[14px] text-[rgba(0,0,0,0.87)]">{{ prescription.admitted }}</td>
                  <td class="px-4 py-3 text-[14px] text-[rgba(0,0,0,0.87)]">{{ prescription.patient }}</td>
                  <td class="px-4 py-3 text-[14px] text-[rgba(0,0,0,0.87)]">{{ prescription.transportType }}</td>
                </tr>
              </tbody>
            </table>

            <!-- Pagination -->
            <Pagination 
              :current-page="currentPage" 
              :total-pages="34"
              @previous="currentPage--"
              @next="currentPage++"
              @change-page="(page) => currentPage = page"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from '../Sidebar.vue';
import Header from '../Header.vue';
import Pagination from '../Pagination.vue';

const currentPage = ref(2);

const prescriptions = ref([
  { admitted: '27 Dec, 2024', patient: 'Dianne Russell', transportType: 'VSL' },
  { admitted: '03 Feb, 2023', patient: 'Bessie Cooper', transportType: 'Ambulance' },
  { admitted: '02 Mar, 2023', patient: 'Marvin McKinney', transportType: 'Ambulance' },
  { admitted: '02 Mar, 2023', patient: 'Esther Howard', transportType: 'Taxi' },
  { admitted: '02 Mar, 2023', patient: 'Marvin McKinney', transportType: 'VSL' },
]);
</script>
