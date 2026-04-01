<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '../../composables/useAuth'

const auth = useAuth()
const loading = ref(false)
const error = ref<string | null>(null)

const profile = ref({
  nom: '',
  prenom: '',
  email: '',
  genre: '',
  pays: '',
  adresse: '',
  telephone: '',
  nss: '',
  maladie: '',
  datenaiss: '',
})

const isEditing = ref(false)

// Récupérer les données du patient connecté
const fetchPatientProfile = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch(`http://localhost:8080/patients/${auth.userId.value}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log('Données patient reçues:', data)
    
    // Mapper les données du backend au format du profil
    profile.value = {
      nom: data.nom || '',
      prenom: data.prenom || '',
      email: data.mail || '',
      genre: data.genre || '',
      pays: data.pays || '',
      adresse: data.adresse || '',
      telephone: data.tel || '',
      nss: data.nss || '',
      maladie: data.maladie || '',
      datenaiss: data.datenaiss || '',
    }
  } catch (err: any) {
    console.error('Erreur lors de la récupération du profil:', err)
    error.value = `Erreur: ${err.message}`
  } finally {
    loading.value = false
  }
}

const updateProfile = async () => {
  try {
    const response = await fetch(`http://localhost:8080/patients/${auth.userId.value}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: profile.value.nom,
        prenom: profile.value.prenom,
        mail: profile.value.email,
        genre: profile.value.genre,
        pays: profile.value.pays,
        adresse: profile.value.adresse,
        tel: profile.value.telephone,
        nss: profile.value.nss,
        maladie: profile.value.maladie,
        datenaiss: profile.value.datenaiss,
      })
    })
    
    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour')
    }
    
    isEditing.value = false
    alert('Profil mis à jour avec succès!')
  } catch (err: any) {
    console.error('Erreur lors de la mise à jour:', err)
    alert('Erreur: ' + err.message)
  }
}

// Charger le profil au montage du composant
onMounted(() => {
  if (auth.userId.value) {
    fetchPatientProfile()
  }
})
</script>

<template>
  <div class="p-6 bg-white">
    <button class="text-[#4e55d7] font-semibold mb-6 flex items-center">
      ← My Profile
    </button>

    <!-- Error State -->
    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-16">
      <div class="inline-block">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <p class="text-gray-600 mt-4">Chargement du profil...</p>
      </div>
    </div>

    <!-- Profile Content -->
    <div v-else>
      <div class="flex justify-between items-start mb-8">
        <!-- Profile Section -->
        <div class="flex gap-6 items-start">
          <div class="flex-shrink-0">
            <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-[#f0f0f0]">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                :alt="`${profile.prenom} ${profile.nom}`"
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
            <option value="">Sélectionner...</option>
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
        <div>
          <label class="block text-sm font-semibold mb-2">NSS (Social Security)</label>
          <input v-model="profile.nss" type="text" class="w-full border border-gray-300 rounded px-3 py-2" disabled />
        </div>
        <div>
          <label class="block text-sm font-semibold mb-2">Health Condition</label>
          <input v-model="profile.maladie" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <button @click="updateProfile" type="button" class="col-span-2 bg-[#4e55d7] text-white py-2 rounded font-semibold hover:opacity-90">
          Mettre à jour
        </button>
      </div>

      <div v-else>
        <!-- Display Mode - All Fields -->
        <div class="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">Last Name</label>
            <p class="text-gray-800 font-medium">{{ profile.nom }}</p>
          </div>
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">First Name</label>
            <p class="text-gray-800 font-medium">{{ profile.prenom }}</p>
          </div>
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">Gender</label>
            <p class="text-gray-800 font-medium">{{ profile.genre || 'Non spécifié' }}</p>
          </div>
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">Country</label>
            <p class="text-gray-800 font-medium">{{ profile.pays || 'Non spécifié' }}</p>
          </div>
          <div class="col-span-2">
            <label class="block text-xs text-gray-500 font-semibold mb-1">Address</label>
            <p class="text-gray-800 font-medium">{{ profile.adresse || 'Non spécifié' }}</p>
          </div>
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">Phone Number</label>
            <p class="text-gray-800 font-medium">{{ profile.telephone || 'Non spécifié' }}</p>
          </div>
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">NSS (Social Security)</label>
            <p class="text-gray-800 font-medium">{{ profile.nss }}</p>
          </div>
          <div>
            <label class="block text-xs text-gray-500 font-semibold mb-1">Health Condition</label>
            <p class="text-gray-800 font-medium">{{ profile.maladie || 'Non spécifié' }}</p>
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
  </div>
</template>
