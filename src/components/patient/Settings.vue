<script setup lang="ts">
import { ref } from 'vue'
import ToggleSwitch from './ToggleSwitch.vue'

const settings = ref({
  notifications: true,
  locationTracking: false,
  language: 'fr',
})

const updateSettings = () => {
  alert('Paramètres mis à jour!')
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Paramètres</h1>

    <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <!-- Notifications Toggle -->
      <div class="mb-6 flex items-center justify-between">
        <label class="font-semibold">Notifications</label>
        <ToggleSwitch v-model="settings.notifications" />
      </div>

      <!-- Location Tracking Toggle -->
      <div class="mb-6 flex items-center justify-between">
        <label class="font-semibold">Suivi de localisation</label>
        <ToggleSwitch v-model="settings.locationTracking" />
      </div>

      <!-- Language Selection -->
      <div class="mb-6">
        <label class="block font-semibold mb-2">Langue</label>
        <select v-model="settings.language" class="w-full border border-gray-300 rounded px-3 py-2">
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <!-- Change Password Link -->
      <RouterLink to="/patient/settings/password" class="text-[#4e55d7] font-semibold hover:underline">
        Changer le mot de passe
      </RouterLink>

      <button @click="updateSettings" class="mt-6 w-full bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90">
        Enregistrer
      </button>
    </div>
  </div>
</template>
