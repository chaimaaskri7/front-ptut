<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import { settingsService } from '../../services/settingsService'
import ToggleSwitch from './ToggleSwitch.vue'

const router = useRouter()
const { userId } = useAuth()

const patientEmail = ref('')
const settings = ref({
  notifications: JSON.parse(localStorage.getItem('settings_notifications') || 'true'),
  notifications_sound: JSON.parse(localStorage.getItem('settings_sound') || 'true'),
  appointment_reminders: JSON.parse(localStorage.getItem('settings_reminders') || 'true'),
  transport_notifications: JSON.parse(localStorage.getItem('settings_transport') || 'true'),
  new_document: JSON.parse(localStorage.getItem('settings_document') || 'false'),
  language: localStorage.getItem('language') || 'Français',
})

const languages = ref([
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
])

const loading = ref(false)
const showLanguageModal = ref(false)

// Fetch patient info
const fetchPatientInfo = async () => {
  if (!userId.value) return
  loading.value = true
  try {
    const patientInfo = await settingsService.getPatientInfo(userId.value)
    patientEmail.value = patientInfo.mail || 'N/A'
  } catch (err) {
    console.error('Erreur:', err)
  } finally {
    loading.value = false
  }
}

// Save settings to localStorage
const saveSettings = () => {
  localStorage.setItem('settings_notifications', JSON.stringify(settings.value.notifications))
  localStorage.setItem('settings_sound', JSON.stringify(settings.value.notifications_sound))
  localStorage.setItem('settings_reminders', JSON.stringify(settings.value.appointment_reminders))
  localStorage.setItem('settings_transport', JSON.stringify(settings.value.transport_notifications))
  localStorage.setItem('settings_document', JSON.stringify(settings.value.new_document))
}

// Change language
const changeLanguage = (langName: string) => {
  settings.value.language = langName
  localStorage.setItem('language', langName)
  showLanguageModal.value = false
}

// Watch settings changes
const handleSettingChange = () => {
  saveSettings()
}

onMounted(() => {
  fetchPatientInfo()
})
</script>

<template>
  <div class="p-6 bg-white min-h-screen">
    <button @click="router.back()" class="text-[#4e55d7] font-semibold mb-6 flex items-center hover:opacity-80">
      ← Settings
    </button>

    <div class="max-w-2xl">
      <!-- Account Details Section -->
      <div class="mb-6">
        <div class="bg-blue-100 rounded-lg p-4 mb-4">
          <h3 class="font-bold mb-4">Account Details</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                :value="patientEmail"
                disabled
                class="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-600 cursor-not-allowed"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <button
                @click="router.push('/patient/settings/password')"
                class="w-full bg-white border border-gray-300 rounded px-3 py-2 text-left text-gray-600 hover:bg-gray-50 transition"
              >
                Change Password →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Settings Section -->
      <div class="bg-blue-100 rounded-lg p-4 mb-6">
        <h3 class="font-bold mb-4">SETTINGS</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <label>Notifications générales</label>
            <ToggleSwitch v-model="settings.notifications" @update:modelValue="handleSettingChange" />
          </div>
          <div class="flex items-center justify-between">
            <label>Son</label>
            <ToggleSwitch v-model="settings.notifications_sound" @update:modelValue="handleSettingChange" />
          </div>
        </div>
      </div>

      <!-- System Reminders -->
      <div class="mb-6">
        <h3 class="font-bold mb-3">Rappels et système</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label>Rappels de rendez-vous</label>
            <ToggleSwitch v-model="settings.appointment_reminders" @update:modelValue="handleSettingChange" />
          </div>
          <div class="flex items-center justify-between">
            <label>Notifications de transport</label>
            <ToggleSwitch v-model="settings.transport_notifications" @update:modelValue="handleSettingChange" />
          </div>
          <div class="flex items-center justify-between">
            <label>Nouveau document</label>
            <ToggleSwitch v-model="settings.new_document" @update:modelValue="handleSettingChange" />
          </div>
        </div>
      </div>

      <!-- Language Selection -->
      <div class="mb-6">
        <h3 class="font-bold mb-3">Langue</h3>
        <button
          @click="showLanguageModal = true"
          class="w-full flex items-center justify-between p-3 border border-gray-300 rounded hover:bg-gray-50 transition"
        >
          <div class="flex items-center gap-3">
            <span class="text-xl">🇫🇷</span>
            <span>{{ settings.language }}</span>
          </div>
          <span>→</span>
        </button>
      </div>

      <!-- Privacy Info -->
      <div class="text-xs text-gray-500 pt-4 border-t">
        <p>
          To manage or delete your CareWay Company account, please visit our
          <a href="#" class="text-blue-500 hover:underline">Account Management FAQ</a>
        </p>
      </div>
    </div>

    <!-- Language Modal -->
    <div v-if="showLanguageModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 class="text-xl font-bold mb-4">Choose the language</h2>
        <p class="text-gray-600 text-sm mb-4">Select your preferred language below This helps us serve you better.</p>

        <div class="mb-6">
          <div class="bg-cyan-100 rounded-full p-2 mb-3 text-center">
            <span class="text-2xl">🇫🇷</span>
            <p class="font-semibold">Français</p>
          </div>
        </div>

        <div class="space-y-2 max-h-80 overflow-y-auto">
          <div v-for="lang in languages" :key="lang.code" class="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer" @click="changeLanguage(lang.name)">
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ lang.flag }}</span>
              <span>{{ lang.name }}</span>
            </div>
            <input
              type="radio"
              :checked="settings.language === lang.name"
              class="w-4 h-4 accent-cyan-400"
              :name="`language-${lang.code}`"
            />
          </div>
        </div>

        <div class="mt-4 flex gap-2">
          <button @click="showLanguageModal = false" class="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

