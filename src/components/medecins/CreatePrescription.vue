<template>
  <div class="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
    <Header subtitle="Prescription" />
    
    <div class="p-4 md:p-8 max-w-4xl mx-auto">
      <!-- Back Button -->
      <div class="mb-6">
        <router-link to="/patients" class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux patients
        </router-link>
      </div>

      <!-- Title Section -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold text-slate-900 mb-2">Création d'une prescription</h1>
          <p class="text-slate-600">Remplissez le formulaire pour créer une nouvelle prescription</p>
        </div>
        <button class="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-lg p-8 space-y-8">
        <!-- Question 1 -->
        <div class="border-b border-slate-200 pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            1. Dans quelle situation permettant la prise en charge du transport se trouve votre patient ? (plusieurs choix possibles)
          </h2>
          <div class="space-y-4">
            <label class="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.situation1" value="hospitalisation" class="w-5 h-5 mt-1 rounded border-slate-300">
              <span class="text-slate-700">Entrée ou sortie d'hospitalisation (complète, partielle ou ambulatoire), y compris séances de chimiothérapie, radiothérapie et hémodialyse</span>
            </label>
            <label class="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.situation1" value="ald" class="w-5 h-5 mt-1 rounded border-slate-300">
              <span class="text-slate-700">ALD exonérante</span>
            </label>
            <label class="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.situation1" value="ald_non_exo" class="w-5 h-5 mt-1 rounded border-slate-300">
              <span class="text-slate-700">ALD non exonérante</span>
            </label>
            <label class="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.situation1" value="maternite" class="w-5 h-5 mt-1 rounded border-slate-300">
              <span class="text-slate-700">Transport Engagement maternité de lieu de résidence vers la maternité ou l'hébergement temporaire non médicalisé</span>
            </label>
            <label class="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.situation1" value="accident" class="w-5 h-5 mt-1 rounded border-slate-300">
              <span class="text-slate-700">Transport lié à un accident du travail ou une maladie professionnelle</span>
            </label>
            <div class="flex items-center gap-4 p-3">
              <span class="text-slate-700">Date de l'AT/MP :</span>
              <input type="date" v-model="form.date_at_mp" class="px-3 py-2 border border-slate-300 rounded-lg text-slate-900">
            </div>
          </div>
        </div>

        <!-- Question 2 -->
        <div class="border-b border-slate-200 pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            2. Quel mode de transport prescrivez-vous au regard de l'état de santé et d'autonomie du patient
          </h2>
          <div class="space-y-4">
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="position_allongee" class="w-5 h-5">
              <span class="text-slate-700">Position allongée ou demi-assise</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="surveillance" class="w-5 h-5">
              <span class="text-slate-700">Surveillance par une personne qualifiée</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="administration_oxygene" class="w-5 h-5">
              <span class="text-slate-700">d'administration d'oxygène</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="brancardage" class="w-5 h-5">
              <span class="text-slate-700">Brancardage ou d'un portage</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="transport_professionnel" class="w-5 h-5">
              <span class="text-slate-700">Transport assis professionnalisé (VSL, taxi conventionné)</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="incompatible" class="w-5 h-5">
              <span class="text-slate-700">L'état de santé du patient n'est pas compatible avec un transport partagé</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="mobilite_reduite" class="w-5 h-5">
              <span class="text-slate-700">Un transport pour patient à mobilité réduite dans son fauteuil roulant est adapté</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="transport_individuel" class="w-5 h-5">
              <span class="text-slate-700">Moyen de transport individuel</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="radio" v-model="form.mode_transport" value="transport_commun" class="w-5 h-5">
              <span class="text-slate-700">Transport en commun terrestre</span>
            </label>
          </div>
        </div>

        <!-- Question 3 -->
        <div class="border-b border-slate-200 pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            3. Quel trajet doit effectuer le patient ?
          </h2>
          <div class="space-y-6">
            <div>
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_depart" value="domicile" class="w-5 h-5">
                <span class="text-slate-700">Départ - Domicile</span>
              </label>
              <input 
                v-if="form.trajet_depart === 'domicile'"
                type="text" 
                v-model="form.trajet_depart_autre" 
                placeholder="Autre lieu"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900"
              >
              <input 
                v-else
                type="text" 
                v-model="form.trajet_depart_structure" 
                placeholder="Structure de soins"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900"
              >
            </div>
            <div>
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_arrivee" value="domicile" class="w-5 h-5">
                <span class="text-slate-700">Arrivée - Domicile</span>
              </label>
              <input 
                v-if="form.trajet_arrivee === 'domicile'"
                type="text" 
                v-model="form.trajet_arrivee_autre" 
                placeholder="Autre lieu"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900"
              >
              <input 
                v-else
                type="text" 
                v-model="form.trajet_arrivee_structure" 
                placeholder="Structure de soins"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900"
              >
            </div>
            <div>
              <label class="text-slate-700 font-medium">Nombre de transports itératif</label>
              <input 
                type="number" 
                v-model.number="form.nombre_transports" 
                placeholder="0"
                class="mt-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-900 w-full"
              >
            </div>
          </div>
        </div>

        <!-- Question 4 -->
        <div class="border-b border-slate-200 pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            4. Cas particuliers d'exonération du ticket modérateur :
          </h2>
          <div class="space-y-4">
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.exoneration" value="oui" class="w-5 h-5">
              <span class="text-slate-700">Oui</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.exoneration" value="non" class="w-5 h-5">
              <span class="text-slate-700">Non</span>
            </label>
          </div>
        </div>

        <!-- Question 5 -->
        <div class="pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            5. Ce transport est-il lié à des soins dispensés au titre d'une pension militaire d'invalidité ?
          </h2>
          <div class="space-y-4">
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.pension_militaire" value="oui" class="w-5 h-5">
              <span class="text-slate-700">Oui</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors">
              <input type="checkbox" v-model="form.pension_militaire" value="non" class="w-5 h-5">
              <span class="text-slate-700">Non</span>
            </label>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex gap-4 justify-end pt-8 border-t border-slate-200">
          <router-link to="/patients" class="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
            Annuler
          </router-link>
          <button type="submit" class="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Créer la prescription
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Header from '../Header.vue'
import { useAuth } from '../../composables/useAuth'

const router = useRouter()
const route = useRoute()
const auth = useAuth()

// Get patient ID from route params
const patientId = route.params.patientId

const form = ref({
  situation1: [] as string[],
  date_at_mp: '',
  mode_transport: '',
  trajet_depart: 'domicile',
  trajet_depart_autre: '',
  trajet_depart_structure: '',
  trajet_arrivee: 'domicile',
  trajet_arrivee_autre: '',
  trajet_arrivee_structure: '',
  nombre_transports: 0,
  exoneration: [] as string[],
  pension_militaire: [] as string[]
})

const handleSubmit = async () => {
  try {
    // Create prescription
    const prescriptionData = {
      idpatient: patientId,
      medecin: auth.userId.value,
      motifmedical: 'Transport médical',
      typetransport: form.value.mode_transport,
      situationPatient: form.value.situation1.join(', '),
      trajetDepart: form.value.trajet_depart,
      trajetArrivee: form.value.trajet_arrivee,
      nombreTransports: form.value.nombre_transports,
      exoneration: form.value.exoneration.includes('oui'),
      pensionMilitaire: form.value.pension_militaire.includes('oui')
    }

    const response = await fetch('http://localhost:8080/prescriptions', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prescriptionData)
    })

    if (response.ok) {
      alert('Prescription créée avec succès!')
      router.push('/patients')
    } else {
      alert('Erreur lors de la création de la prescription')
    }
  } catch (error) {
    console.error('Erreur:', error)
    alert('Erreur lors de la création de la prescription')
  }
}
</script>
