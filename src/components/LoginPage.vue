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
            <img src="@/assets/careway-logo.png" alt="CareWay" class="h-[60px] w-auto">
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
          <button @click="showForgotPasswordModal = true" class="text-white font-semibold hover:underline text-sm opacity-90">Forgot password?</button>
        </div>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <div v-if="showForgotPasswordModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
        <h2 class="text-2xl font-bold text-slate-900 mb-2">Reset Password</h2>
        <p class="text-slate-600 text-sm mb-6">Enter your email or code to receive a password reset link</p>

        <!-- Reset Password Form -->
        <form @submit.prevent="handleForgotPassword" class="space-y-4">
          <!-- User Type Selection -->
          <div class="flex gap-2 mb-4">
            <button
              type="button"
              @click="forgotForm.userType = 'medecin'"
              :class="[
                'flex-1 py-2 text-sm font-semibold rounded-lg transition',
                forgotForm.userType === 'medecin'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Medecin
            </button>
            <button
              type="button"
              @click="forgotForm.userType = 'patient'"
              :class="[
                'flex-1 py-2 text-sm font-semibold rounded-lg transition',
                forgotForm.userType === 'patient'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Patient
            </button>
          </div>

          <!-- Email Input -->
          <input
            v-model="forgotForm.email"
            type="email"
            placeholder="Email Address"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800"
          />

          <!-- Code Input (RPPS or NSS) -->
          <input
            v-model="forgotForm.code"
            type="text"
            :placeholder="forgotForm.userType === 'medecin' ? 'RPPS Code' : 'NSS Code'"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800"
          />

          <!-- Error Message -->
          <div v-if="forgotError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
            {{ forgotError }}
          </div>

          <!-- Success Message -->
          <div v-if="forgotSuccess" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
            {{ forgotSuccess }}
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-4">
            <button
              type="button"
              @click="closeForgotPasswordModal"
              class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isForgotLoading"
              class="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-70 font-semibold transition"
            >
              {{ isForgotLoading ? 'Sending...' : 'Send Reset Link' }}
            </button>
          </div>
        </form>
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

const forgotForm = ref({
  userType: 'medecin',
  email: '',
  code: ''
})

const isLoading = ref(false)
const error = ref('')
const showForgotPasswordModal = ref(false)
const isForgotLoading = ref(false)
const forgotError = ref('')
const forgotSuccess = ref('')

const closeForgotPasswordModal = () => {
  showForgotPasswordModal.value = false
  forgotForm.value = { userType: 'medecin', email: '', code: '' }
  forgotError.value = ''
  forgotSuccess.value = ''
}

const handleForgotPassword = async () => {
  forgotError.value = ''
  forgotSuccess.value = ''
  isForgotLoading.value = true

  try {
    const response = await fetch('http://localhost:8081/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userType: forgotForm.value.userType,
        code: forgotForm.value.code,
        email: forgotForm.value.email
      })
    })

    const data = await response.json()

    if (data.success) {
      forgotSuccess.value = `Reset link sent! Token: ${data.resetToken} (check your email or save this token)`
      // Auto close after 5 seconds on success
      setTimeout(() => {
        closeForgotPasswordModal()
      }, 5000)
    } else {
      forgotError.value = data.message || 'Error requesting password reset'
    }
  } catch (err) {
    forgotError.value = 'Error connecting to server'
    console.error('Forgot password error:', err)
  } finally {
    isForgotLoading.value = false
  }
}

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
