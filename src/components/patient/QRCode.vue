<script setup lang="ts">
import QRCode from 'qrcode'
import { onMounted, ref } from 'vue'

const qrCanvas = ref<HTMLCanvasElement>()

onMounted(async () => {
  if (qrCanvas.value) {
    try {
      await QRCode.toCanvas(qrCanvas.value, 'https://careway.example.com/patient/123456', {
        width: 418,
        margin: 10,
        color: {
          dark: '#4e55d7',
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
  <div class="p-6 flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Mon QR Code</h1>
    <div class="bg-white rounded-lg shadow-lg p-6">
      <canvas ref="qrCanvas"></canvas>
      <p class="text-center text-sm text-gray-600 mt-4">Montrez ce QR Code lors de vos rendez-vous</p>
    </div>
  </div>
</template>
