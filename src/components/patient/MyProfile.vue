<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  nom: 'Rawles',
  prenom: 'Alexa',
  email: 'alexarawles@gmail.com',
  nom_last: 'Last Name',
  prenom_first: 'First Name',
  genre: 'Femme',
  pays: 'France',
  adresse: 'Your Address',
  telephone: 'Your Phone Number',
})

const isEditing = ref(false)

const updateProfile = () => {
  isEditing.value = false
  alert('Profil mis à jour!')
}
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← My Profile
    </button>

    <div class="flex justify-between items-start mb-8">
      <!-- Profile Section -->
      <div class="flex gap-6 items-start">
        <div class="flex-shrink-0">
          <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-[#f0f0f0]">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Alexa Rawles"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="flex-1">
          <h1 class="text-2xl font-bold mb-1">{{ profile.prenom }} {{ profile.nom }}</h1>
          <p class="text-gray-600">{{ profile.email }}</p>
        </div>
      </div>

      <button @click="isEditing = !isEditing" class="bg-[#4e55d7] text-white px-6 py-2 rounded font-semibold">
        {{ isEditing ? 'Annuler' : 'Edit' }}
      </button>
    </div>

    <!-- Main Content -->
    <div v-if="isEditing" class="grid grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-semibold mb-2">Last Name</label>
        <input v-model="profile.nom" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">First Name</label>
        <input v-model="profile.prenom" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">Gender</label>
        <select v-model="profile.genre" class="w-full border border-gray-300 rounded px-3 py-2">
          <option>Femme</option>
          <option>Homme</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">Country</label>
        <input v-model="profile.pays" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div class="col-span-2">
        <label class="block text-sm font-semibold mb-2">Address</label>
        <input v-model="profile.adresse" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">Phone Number</label>
        <input v-model="profile.telephone" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <button @click="updateProfile" type="submit" class="col-span-2 bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90">
        Mettre à jour
      </button>
    </div>

    <div v-else>
      <!-- Email Section -->
      <div class="mb-8">
        <h2 class="text-lg font-bold mb-4">My email Address</h2>
        <div class="bg-blue-50 rounded-lg p-4 flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">✓</div>
            <div>
              <p class="font-semibold">{{ profile.email }}</p>
              <p class="text-sm text-gray-600">1 month ago</p>
            </div>
          </div>
        </div>
        <button class="text-[#4e55d7] font-semibold">+ Add Email Address</button>
      </div>
    </div>
  </div>
</template>
