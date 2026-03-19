<template>
  <div class="flex-1 bg-[#f8f8f8]">
    <Header subtitle="Patients" />
    
    <div class="p-8">
        <div class="bg-white border border-[#f0f0f0] rounded-[10px] p-4">
          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-semibold text-[18px] text-[#1b1b1b]">Patients List</h2>
            <div class="flex gap-[25px]">
              <button class="bg-[#168bd9] text-white px-[18px] py-[7px] rounded-[10px] flex items-center gap-[6px] hover:opacity-90">
                <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Patient
              </button>
              <button class="border border-[#f0f0f0] px-[18px] py-[7px] rounded-[10px] flex items-center gap-[10px] hover:bg-gray-50">
                <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                Filter
              </button>
            </div>
          </div>

          <!-- Table -->
          <div class="border border-[#f0f0f0] rounded-[10px] overflow-hidden">
            <table class="w-full">
              <thead class="bg-[#f9f9fb]">
                <tr>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">ADMITTED</th>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">PATIENT</th>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">AREA OF CONCERN</th>
                  <th class="text-left px-4 py-3 text-[12px] font-semibold text-[#666e7d] uppercase">CONTACT</th>
                  <th class="text-left px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(patient, index) in patients" 
                  :key="index"
                  class="border-t border-[#f0f0f0] hover:bg-gray-50"
                  :class="{ 'bg-[rgba(44,216,255,0.12)]': patient.selected }"
                >
                  <td class="px-4 py-3 text-[14px] text-[rgba(0,0,0,0.87)]">{{ patient.admitted }}</td>
                  <td class="px-4 py-3 text-[14px] text-[rgba(0,0,0,0.87)]">{{ patient.name }}</td>
                  <td class="px-4 py-3 text-[14px] text-[rgba(0,0,0,0.87)]">{{ patient.concern }}</td>
                  <td class="px-4 py-3">
                    <div class="flex gap-4 items-center">
                      <svg v-if="patient.contactType === 'email'" class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <svg v-else-if="patient.contactType === 'phone'" class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <svg v-else class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.75a2.25 2.25 0 00-2.25-2.25h-13.5A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h10.706a2.25 2.25 0 001.591-.659l2.847-2.847a2.25 2.25 0 00.659-1.591V6.75z" />
                      </svg>
                      <svg class="w-[24px] h-[24px] cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                      </svg>
                    </div>
                  </td>
                  <td class="px-4 py-3">
                    <button class="bg-[#168bd9] text-white px-[18px] py-[7px] rounded-[10px] text-[16px] font-medium flex items-center gap-[6px] hover:opacity-90">
                      📋 Faire une prescription
                    </button>
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

const patients = ref([
  { admitted: '27 Dec, 2024', name: 'Dianne Russell', concern: 'Upper Abdomen General', contactType: 'email', selected: false },
  { admitted: '03 Feb, 2023', name: 'Bessie Cooper', concern: 'Gynecologic Disorders', contactType: 'message', selected: false },
  { admitted: '02 Mar, 2023', name: 'Marvin McKinney', concern: 'Brain, Spinal Cord, and Nerve Disorders', contactType: 'phone', selected: true },
  { admitted: '02 Mar, 2023', name: 'Esther Howard', concern: 'Digestive Disorders', contactType: 'phone', selected: false },
  { admitted: '02 Mar, 2023', name: 'Marvin McKinney', concern: 'Upper Abdomen General', contactType: 'phone', selected: false },
]);
</script>
