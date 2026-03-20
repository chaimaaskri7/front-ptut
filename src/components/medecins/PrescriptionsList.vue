<template>
  <div class="w-full bg-[#f8f8f8] min-h-screen">
    <Header subtitle="Prescription" />
    
    <div class="p-4 md:p-6 lg:p-8">
        <div class="bg-white border border-[#f0f0f0] rounded-[10px] p-4">
          <!-- Header -->
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 class="font-semibold text-[18px] text-[#1b1b1b]">Les prescriptions</h2>
            <button class="border border-[#f0f0f0] px-[18px] py-[7px] rounded-[10px] flex items-center gap-[10px] hover:bg-gray-50">
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filter
            </button>
          </div>

          <!-- Table -->
          <div class="border border-[#f0f0f0] rounded-[10px] overflow-x-auto">
            <table class="w-full">
              <thead class="bg-[#f9f9fb]">
                <tr>
                  <th class="text-left px-3 py-2 text-[11px] font-semibold text-[#666e7d] uppercase">DATE</th>
                  <th class="text-left px-3 py-2 text-[11px] font-semibold text-[#666e7d] uppercase">PATIENT</th>
                  <th class="text-left px-3 py-2 text-[11px] font-semibold text-[#666e7d] uppercase">TRANSPORT TYPE</th>
                  <th class="text-center px-3 py-2 text-[11px] font-semibold text-[#666e7d] uppercase">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(prescription, index) in prescriptions" 
                  :key="index"
                  class="border-t border-[#f0f0f0] hover:bg-gray-50 transition-colors"
                >
                  <td class="px-3 py-2 text-[13px] text-[rgba(0,0,0,0.87)]">{{ prescription.admitted }}</td>
                  <td class="px-3 py-2 text-[13px] text-[rgba(0,0,0,0.87)] font-medium">{{ prescription.patient }}</td>
                  <td class="px-3 py-2 text-[13px]">
                    <span class="px-2 py-1 rounded-full text-[11px] font-medium"
                      :class="{
                        'bg-blue-100 text-blue-700': prescription.transportType === 'VSL',
                        'bg-red-100 text-red-700': prescription.transportType === 'Ambulance',
                        'bg-yellow-100 text-yellow-700': prescription.transportType === 'Taxi'
                      }"
                    >
                      {{ prescription.transportType }}
                    </span>
                  </td>
                  <td class="px-3 py-2 text-center">
                    <span class="px-2 py-1 rounded-full text-[11px] bg-green-100 text-green-700 font-medium">
                      Actif
                    </span>
                  </td>
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
