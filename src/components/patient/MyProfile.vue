<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  nom: 'Rawles',
  prenom: 'Alexa',
  email: 'alexarawles@gmail.com',
  genre: 'Your Gender',
  pays: 'Your Country',
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

    <!-- Form Content (Edit Mode & Display Mode) -->
    <div v-if="isEditing" class="grid grid-cols-2 gap-6 mb-8">
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
          <option>Your Gender</option>
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
      <!-- Display Mode - All Fields -->
      <div class="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label class="block text-xs text-gray-500 font-semibold mb-1">Last Name</label>
          <p class="text-gray-400">{{ profile.nom }}</p>
        </div>
        <div>
          <label class="block text-xs text-gray-500 font-semibold mb-1">First Name</label>
          <p class="text-gray-400">{{ profile.prenom }}</p>
        </div>
        <div>
          <label class="block text-xs text-gray-500 font-semibold mb-1">Gender</label>
          <p class="text-gray-400">{{ profile.genre }}</p>
        </div>
        <div>
          <label class="block text-xs text-gray-500 font-semibold mb-1">Country</label>
          <p class="text-gray-400">{{ profile.pays }}</p>
        </div>
        <div class="col-span-2">
          <label class="block text-xs text-gray-500 font-semibold mb-1">Address</label>
          <p class="text-gray-400">{{ profile.adresse }}</p>
        </div>
        <div>
          <label class="block text-xs text-gray-500 font-semibold mb-1">Phone Number</label>
          <p class="text-gray-400">{{ profile.telephone }}</p>
        </div>
      </div>

      <!-- Email Section -->
      <div class="mb-8">
        <h2 class="text-lg font-bold mb-4">My email Address</h2>
        <div class="bg-blue-50 rounded-lg p-4 flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-sm">✓</div>
            <div>
              <p class="font-semibold text-gray-800">{{ profile.email }}</p>
              <p class="text-sm text-gray-600">1 month ago</p>
            </div>
          </div>
        </div>
        <button class="text-[#4e55d7] font-semibold text-sm">+ Add Email Address</button>
      </div>
    </div>
  </div>
</template>
