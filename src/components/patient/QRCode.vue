<script setup lang="ts">
import QRCode from 'qrcode'
import { onMounted, ref } from 'vue'

const qrCanvas = ref<HTMLCanvasElement>()

onMounted(async () => {
  if (qrCanvas.value) {
    try {
      await QRCode.toCanvas(qrCanvas.value, 'https://careway.example.com/patient/123456', {
        width: 300,
        margin: 10,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      })
    } catch (error) {
      console.error('Erreur lors de la génération du QR Code:', error)
    }
  }
})
</script>

<template>
  <div class="p-6 bg-white flex items-center justify-center min-h-screen">
    <div class="text-center">
      <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
        ← QR Code
      </button>
      
      <p class="text-lg mb-8 text-gray-600">
        A faire scanner par le <strong class="text-blue-600">transporteur</strong> au <strong class="text-blue-600">départ</strong> du trajet.
      </p>
      
      <div class="bg-white rounded-lg shadow-lg p-8 inline-block">
        <canvas ref="qrCanvas"></canvas>
      </div>
      
      <p class="text-sm text-gray-600 mt-8">
        <a href="#" class="text-blue-600 font-semibold">Prochains QR codes →</a>
      </p>
    </div>
  </div>
</template>
