<script setup lang="ts">
import { ref } from 'vue'

const documents = ref([
  { id: '001', date: '07/11/2025', title: 'Bon_transport_chu', document_type: 'BONS DE TRANSPORT' },
  { id: '002', date: '10/09/2025', title: 'Bon_transport_labo', document_type: 'BONS DE TRANSPORT' },
])
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← My documents
    </button>

    <div class="mb-8">
      <h2 class="font-bold text-lg mb-4 text-gray-800">{{ documents[0]?.document_type || 'Documents' }}</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b-2 border-gray-300">
            <tr>
              <th class="text-left py-4 px-4 font-bold text-gray-600">DATE</th>
              <th class="text-left py-4 px-4 font-bold text-gray-600">REFERENCE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doc in documents" :key="doc.id" class="border-b border-gray-200 hover:bg-blue-50">
              <td class="py-4 px-4">{{ doc.date }}</td>
              <td class="py-4 px-4" :class="doc.id === documents[1].id ? 'border-2 border-blue-500 text-blue-600' : ''" >
                {{ doc.title }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
