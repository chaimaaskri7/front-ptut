<script setup lang="ts">
import { ref } from 'vue'

const documents = ref([
  { id: '001', name: 'Ordonnance_Mars_2025.pdf', date: '2025-03-20', type: 'Prescription' },
  { id: '002', name: 'Résultats_Labo.pdf', date: '2025-03-18', type: 'Laboratory' },
  { id: '003', name: 'Rapport_Médical.pdf', date: '2025-03-15', type: 'Medical Report' },
])

const downloadDocument = (docId: string) => {
  alert(`Téléchargement du document ${docId}`)
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Documents</h1>

    <div class="space-y-3">
      <div v-for="doc in documents" :key="doc.id" class="bg-white rounded-lg shadow p-4 flex justify-between items-center">
        <div>
          <p class="font-semibold">{{ doc.name }}</p>
          <p class="text-sm text-gray-600">{{ doc.type }} • {{ doc.date }}</p>
        </div>
        <button @click="downloadDocument(doc.id)" class="bg-[#4e55d7] text-white px-4 py-2 rounded font-semibold hover:opacity-90">
          📥 Télécharger
        </button>
      </div>
    </div>
  </div>
</template>
