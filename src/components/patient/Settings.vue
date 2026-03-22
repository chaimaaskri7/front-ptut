<script setup lang="ts">
import { ref } from 'vue'
import ToggleSwitch from './ToggleSwitch.vue'

const settings = ref({
  notifications: true,
  notifications_sound: true,
  appointment_reminders: true,
  transport_notifications: true,
  new_document: false,
  language: 'Français',
})

const expandedSection = ref('account')
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← Settings
    </button>

    <div class="max-w-2xl">
      <!-- Account Details Section -->
      <div class="mb-6">
        <div class="bg-blue-100 rounded-lg p-4 mb-4">
          <h3 class="font-bold mb-2">Account Details</h3>
          <div class="space-y-2">
            <input type="text" value="hello@designdrops.io" class="w-full bg-white border border-gray-300 rounded px-3 py-2" />
            <input type="password" value="**********" class="w-full bg-white border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>
      </div>

      <!-- Settings Section -->
      <div class="bg-blue-100 rounded-lg p-4 mb-6">
        <h3 class="font-bold mb-4">SETTINGS</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <label>Notifications générales</label>
            <ToggleSwitch v-model="settings.notifications" />
          </div>
          <div class="flex items-center justify-between">
            <label>Son</label>
            <ToggleSwitch v-model="settings.notifications_sound" />
          </div>
        </div>
      </div>

      <!-- System Reminders -->
      <div class="mb-6">
        <h3 class="font-bold mb-3">Rappels et système</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label>Rappels de rendez-vous</label>
            <ToggleSwitch v-model="settings.appointment_reminders" />
          </div>
          <div class="flex items-center justify-between">
            <label>Notifications de transport</label>
            <ToggleSwitch v-model="settings.transport_notifications" />
          </div>
          <div class="flex items-center justify-between">
            <label>Nouveau document</label>
            <ToggleSwitch v-model="settings.new_document" />
          </div>
        </div>
      </div>

      <!-- Language Selection -->
      <div class="mb-6">
        <h3 class="font-bold mb-3">Langue</h3>
        <div class="flex items-center justify-between p-3 border border-gray-300 rounded">
          <span class="text-xl">🇫🇷</span>
          <span>{{ settings.language }}</span>
        </div>
      </div>

      <!-- Privacy Info -->
      <div class="text-xs text-gray-500 pt-4 border-t">
        <p>To manage or delete your Web Disney Company account, please visit our <a href="#" class="text-blue-500">Account Management FAQ</a></p>
      </div>
    </div>
  </div>
</template>
