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
  <div class="p-6">
    <RouterLink to="/patient/settings" class="text-[#4e55d7] font-semibold hover:underline mb-6 inline-block">
      ← Retour aux paramètres
    </RouterLink>

    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Changer le mot de passe</h1>

    <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <form @submit.prevent="changePassword" class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-1">Mot de passe actuel</label>
          <input v-model="passwords.current" type="password" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Nouveau mot de passe</label>
          <input v-model="passwords.new" type="password" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Confirmer le mot de passe</label>
          <input v-model="passwords.confirm" type="password" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <button type="submit" class="w-full bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90">
          Mettre à jour
        </button>
      </form>
    </div>
  </div>
</template>
