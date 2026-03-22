<script setup lang="ts">
import { ref } from 'vue'

const passwords = ref({
  current: '',
  new: '',
  confirm: '',
})

const changePassword = () => {
  if (passwords.value.new !== passwords.value.confirm) {
    alert('Les mots de passe ne correspondent pas!')
    return
  }
  alert('Mot de passe mis à jour!')
  passwords.value = { current: '', new: '', confirm: '' }
}
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← Settings
    </button>

    <div class="max-w-xl">
      <div class="border-4 border-blue-600 rounded-lg p-8">
        <h1 class="text-2xl font-bold mb-2">Set a new password</h1>
        <p class="text-gray-600 text-sm mb-6">Create a new password. Ensure it differs from previous ones for security</p>

        <form @submit.prevent="changePassword" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold mb-2">Password</label>
            <input v-model="passwords.current" type="password" placeholder="Enter your password" class="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">New Password</label>
            <input v-model="passwords.new" type="password" placeholder="Enter your new password" class="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Confirm Password</label>
            <input v-model="passwords.confirm" type="password" placeholder="Re-enter your new password" class="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <button type="submit" class="w-full bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90 mt-6">
            Update Password
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
