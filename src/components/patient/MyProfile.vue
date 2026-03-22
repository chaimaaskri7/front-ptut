<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  nom: 'Askri',
  prenom: 'Chaima',
  email: 'chaima@example.com',
  telephone: '+212 6XX XXX XXX',
  adresse: '123 Rue de Test',
  ville: 'Casablanca',
  codePostal: '20000',
  pays: 'Maroc',
})

const updateProfile = () => {
  alert('Profil mis à jour!')
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-[#4e55d7]">Mon Profil</h1>
    <div class="bg-white rounded-lg shadow-lg p-6">
      <form @submit.prevent="updateProfile" class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold mb-1">Prénom</label>
          <input v-model="profile.prenom" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Nom</label>
          <input v-model="profile.nom" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Email</label>
          <input v-model="profile.email" type="email" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Téléphone</label>
          <input v-model="profile.telephone" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div class="col-span-2">
          <label class="block text-sm font-semibold mb-1">Adresse</label>
          <input v-model="profile.adresse" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Ville</label>
          <input v-model="profile.ville" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Code Postal</label>
          <input v-model="profile.codePostal" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <button type="submit" class="col-span-2 bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90">
          Mettre à jour
        </button>
      </form>
    </div>
  </div>
</template>
