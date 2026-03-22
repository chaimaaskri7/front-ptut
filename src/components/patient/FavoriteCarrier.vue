<script setup lang="ts">
import { ref } from 'vue'

const favoriteCarriers = ref([
  { id: '001', name: 'CareMed Taxi', rating: 4.8, phone: '+212 6XX XXX XXX' },
  { id: '002', name: 'Health Transport', rating: 4.5, phone: '+212 6XX XXX XXX' },
  { id: '003', name: 'MediCar', rating: 4.9, phone: '+212 6XX XXX XXX' },
])

const addCarrier = () => {
  alert('Transporteur ajouté aux favoris!')
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Transporteurs favoris</h1>

    <div class="space-y-3">
      <div v-for="carrier in favoriteCarriers" :key="carrier.id" class="bg-white rounded-lg shadow p-4 flex justify-between items-center">
        <div>
          <p class="font-semibold">{{ carrier.name }}</p>
          <p class="text-sm text-gray-600">{{ carrier.phone }}</p>
          <p class="text-sm text-yellow-500">⭐ {{ carrier.rating }}/5</p>
        </div>
        <button class="bg-[#4e55d7] text-white px-4 py-2 rounded font-semibold hover:opacity-90">
          Appeler
        </button>
      </div>
    </div>
  </div>
</template>
