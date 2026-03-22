<script setup lang="ts">
import { ref } from 'vue'

const favoriteCarriers = ref([
  { id: '001', name: 'Dianne Russell', type: 'VSL', heart: true },
  { id: '002', name: 'Marvin McKinney', type: 'Ambulance', heart: true },
  { id: '003', name: 'Esther Howard', type: 'Taxi', heart: true },
])
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← Favourite carrier
    </button>

    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="border-b-2 border-gray-300">
          <tr>
            <th class="text-left py-4 px-4 font-bold text-gray-600">TRANSPORTEUR</th>
            <th class="text-left py-4 px-4 font-bold text-gray-600">TRANSPORT TYPE</th>
            <th class="text-left py-4 px-4 font-bold text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="carrier in favoriteCarriers" :key="carrier.id" class="border-b border-gray-200 hover:bg-gray-50">
            <td class="py-4 px-4">{{ carrier.name }}</td>
            <td class="py-4 px-4">{{ carrier.type }}</td>
            <td class="py-4 px-4 text-right">
              <button class="text-3xl hover:scale-110">❤️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
