<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import { settingsService } from '../../services/settingsService'

const router = useRouter()
const { userId } = useAuth()

const passwords = ref({
  current: '',
  new: '',
  confirm: '',
})

const loading = ref(false)
const error = ref<string | null>(null)
const showSuccess = ref(false)

const changePassword = async () => {
  error.value = null

  // Validation
  if (!passwords.value.current || !passwords.value.new || !passwords.value.confirm) {
    error.value = 'Tous les champs sont obligatoires'
    return
  }

  if (passwords.value.new !== passwords.value.confirm) {
    error.value = 'Les mots de passe ne correspondent pas!'
    return
  }

  if (passwords.value.new.length < 6) {
    error.value = 'Le nouveau mot de passe doit contenir au moins 6 caractères'
    return
  }

  loading.value = true

  try {
    if (!userId.value) {
      error.value = 'Utilisateur non identifié'
      return
    }

    await settingsService.changePassword(userId.value, passwords.value.current, passwords.value.new)
    showSuccess.value = true
    passwords.value = { current: '', new: '', confirm: '' }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Une erreur est survenue'
  } finally {
    loading.value = false
  }
}

const handleReturn = () => {
  router.push('/patient/settings')
}
</script>

<template>
  <div class="p-6 bg-white min-h-screen">
    <h1 class="text-2xl font-bold mb-6">Settings</h1>

    <!-- Success Message -->
    <div v-if="showSuccess" class="max-w-xl mx-auto text-center py-16">
      <div class="mb-6">
        <svg class="w-24 h-24 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Successful</h2>
      <p class="text-gray-600 mb-8">
        Congratulations! Your password has been changed. Click continue to login
      </p>
      <button
        @click="handleReturn"
        class="w-full bg-[#4e55d7] text-white py-3 rounded font-semibold hover:opacity-90 transition"
      >
        RETURN
      </button>
    </div>

    <!-- Change Password Form -->
    <div v-else class="max-w-xl">
      <div class="border-4 border-blue-600 rounded-lg p-8">
        <h1 class="text-2xl font-bold mb-2">Set a new password</h1>
        <p class="text-gray-600 text-sm mb-6">Create a new password. Ensure it differs from previous ones for security</p>

        <!-- Error Message -->
        <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ error }}
        </div>

        <form @submit.prevent="changePassword" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold mb-2">Password</label>
            <input
              v-model="passwords.current"
              type="password"
              placeholder="Enter your password"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4e55d7]"
              :disabled="loading"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">New Password</label>
            <input
              v-model="passwords.new"
              type="password"
              placeholder="Enter your new password"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4e55d7]"
              :disabled="loading"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Confirm Password</label>
            <input
              v-model="passwords.confirm"
              type="password"
              placeholder="Re-enter your new password"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4e55d7]"
              :disabled="loading"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90 mt-6 transition disabled:opacity-50"
            :disabled="loading"
          >
            {{ loading ? 'Mise à jour en cours...' : 'Update Password' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

