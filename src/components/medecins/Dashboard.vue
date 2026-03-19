<template>
  <div class="w-full bg-[#f8f8f8]">
    <Header subtitle="Dashboard" />
    
    <div class="p-8">
      <!-- Stats Cards -->
        <div class="grid grid-cols-4 gap-6 mb-8">
          <StatsCard title="Appointments" :value="213" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>

          <StatsCard title="New Patients" :value="104" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>

          <StatsCard title="Operations" :value="24" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>

          <StatsCard title="Transport cost" value="$ 12,174" icon-bg="rgba(85, 142, 255, 0.1)">
            <template #icon>
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" stroke="#558EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </StatsCard>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-3 gap-6">
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
import { ref } from 'vue';
import Header from '../Header.vue';
import StatsCard from '../StatsCard.vue';

const chartData = ref([40, 70, 55, 45, 65, 50, 60]);
const chartLabels = ref(['1 July', '8 July', '16 July', '24 July', '31 July']);
</script>
