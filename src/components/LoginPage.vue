<template>
  <div class="fixed inset-0 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 overflow-hidden">
    <!-- Decorative blob left -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-white opacity-20 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
    <!-- Decorative blob right -->
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-20 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

    <!-- Content -->
    <div class="absolute inset-0 flex items-center justify-center z-10 px-8">
      <div class="w-full max-w-md">
        <!-- Logo Section -->
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#06B6D4" opacity="0.9"></circle>
              <path d="M20 8L32 14V26L20 32L8 26V14L20 8Z" fill="#10B981"></path>
            </svg>
            <h1 class="text-5xl font-bold text-white">CareWay</h1>
          </div>
        </div>

        <!-- Role Selection -->
        <div class="flex gap-4 mb-12">
          <button
            @click="form.userType = 'medecin'"
            :class="[
              'flex-1 py-3 font-bold text-lg rounded-xl transition-all duration-200',
              form.userType === 'medecin'
                ? 'bg-white text-indigo-600 shadow-xl'
                : 'bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10'
            ]"
          >
            Medecin
          </button>
          <button
            @click="form.userType = 'patient'"
            :class="[
              'flex-1 py-3 font-bold text-lg rounded-xl transition-all duration-200',
              form.userType === 'patient'
                ? 'bg-white text-indigo-600 shadow-xl'
                : 'bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10'
            ]"
          >
            Patient
          </button>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Code Input -->
          <input
            v-model="form.code"
            type="text"
            :placeholder="form.userType === 'medecin' ? 'CODE RPPS' : 'NSS'"
            class="w-full px-6 py-4 bg-white text-gray-800 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition text-lg font-medium"
          />

          <!-- Password Input -->
          <input
            v-model="form.password"
            type="password"
            placeholder="PASSWORD"
            class="w-full px-6 py-4 bg-white text-gray-800 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition text-lg font-medium"
          />

          <!-- Error Message -->
          <div v-if="error" class="bg-red-500 bg-opacity-30 border border-red-300 text-white px-4 py-3 rounded-xl text-sm font-semibold">
            {{ error }}
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-white text-indigo-600 font-bold py-4 px-6 rounded-xl hover:shadow-xl disabled:opacity-70 transition text-lg uppercase tracking-widest"
          >
            {{ isLoading ? 'Connexion...' : 'Login' }}
          </button>
        </form>

        <!-- FranceConnect Button -->
        <button class="w-full mt-6 bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-4 px-6 rounded-xl transition flex items-center justify-center gap-3 text-lg">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"></circle>
            <circle cx="12" cy="8" r="2" fill="currentColor"></circle>
            <path d="M12 10v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
          S'identifier avec FranceConnect
        </button>

        <!-- Forgot Password -->
        <div class="text-center mt-8">
          <a href="#" class="text-white font-semibold hover:underline text-sm opacity-90">Forgot password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const auth = useAuth()

const form = ref({
  userType: 'medecin',
  code: '',
  password: ''
})

const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true

  try {
    const response = await fetch('http://localhost:8081/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userType: form.value.userType,
        code: form.value.code,
        password: form.value.password
      }),
      credentials: 'include'
    })

    const data = await response.json()

    if (data.success) {
      auth.login(data.userId, data.userType, data.userName, data.specialite, data.mail)

      if (data.userType === 'medecin') {
        router.push('/dashboard')
      } else {
        router.push('/patient/profile')
      }
    } else {
      error.value = data.message || 'Erreur de connexion'
    }
  } catch (err) {
    error.value = 'Erreur de connexion au serveur'
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>
