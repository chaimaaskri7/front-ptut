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

        <!-- Question 3 - Type de Véhicule -->
        <div class="border-b border-slate-200 pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            3. Quel type de véhicule choisissez-vous ? <span class="text-red-500">*</span>
          </h2>
          <div class="space-y-4">
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors border-2 rounded-lg p-3" :class="form.vehiculeType === 'VSL' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200'">
              <input type="radio" v-model="form.vehiculeType" value="VSL" class="w-5 h-5">
              <span class="text-slate-700 font-medium">VSL (Véhicule Sanitaire Léger)</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors border-2 rounded-lg p-3" :class="form.vehiculeType === 'Ambulance' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200'">
              <input type="radio" v-model="form.vehiculeType" value="Ambulance" class="w-5 h-5">
              <span class="text-slate-700 font-medium">Ambulance</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors border-2 rounded-lg p-3" :class="form.vehiculeType === 'Taxi' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200'">
              <input type="radio" v-model="form.vehiculeType" value="Taxi" class="w-5 h-5">
              <span class="text-slate-700 font-medium">Taxi Conventionné</span>
            </label>
          </div>
        </div>

        <!-- Question 4 -->
        <div class="border-b border-slate-200 pb-8">
          <h2 class="text-lg font-semibold text-slate-900 mb-6">
            4. Quel trajet doit effectuer le patient ?
          </h2>
          <div class="space-y-6">
            <div class="space-y-3">
              <h3 class="font-medium text-slate-800">Lieu de Départ</h3>
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_depart" value="domicile" class="w-5 h-5">
                <span class="text-slate-700">Domicile du patient</span>
              </label>
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_depart" value="autre" class="w-5 h-5">
                <span class="text-slate-700">Autre lieu</span>
              </label>
              <input 
                v-if="form.trajet_depart === 'autre'"
                type="text" 
                v-model="form.trajet_depart_autre" 
                placeholder="Adresse du lieu de départ"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900 w-full"
              >
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_depart" value="structure" class="w-5 h-5">
                <span class="text-slate-700">Structure de soins</span>
              </label>
              <input 
                v-if="form.trajet_depart === 'structure'"
                type="text" 
                v-model="form.trajet_depart_structure" 
                placeholder="Adresse de la structure"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900 w-full"
              >
            </div>
            <div class="space-y-3">
              <h3 class="font-medium text-slate-800">Lieu d'Arrivée</h3>
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_arrivee" value="domicile" class="w-5 h-5">
                <span class="text-slate-700">Domicile du patient</span>
              </label>
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_arrivee" value="autre" class="w-5 h-5">
                <span class="text-slate-700">Autre lieu</span>
              </label>
              <input 
                v-if="form.trajet_arrivee === 'autre'"
                type="text" 
                v-model="form.trajet_arrivee_autre" 
                placeholder="Adresse du lieu d'arrivée"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900 w-full"
              >
              <label class="flex items-center gap-4 mb-3">
                <input type="radio" v-model="form.trajet_arrivee" value="structure" class="w-5 h-5">
                <span class="text-slate-700">Structure de soins</span>
              </label>
              <input 
                v-if="form.trajet_arrivee === 'structure'"
                type="text" 
                v-model="form.trajet_arrivee_structure" 
                placeholder="Adresse de la structure"
                class="ml-9 px-4 py-2 border border-slate-300 rounded-lg text-slate-900 w-full"
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

    <!-- Confirmation Modal -->
    <div v-if="showConfirmation" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-white">
          <h3 class="text-2xl font-bold">Récapitulatif de la Prescription</h3>
          <p class="text-indigo-100 text-sm mt-1">Vérifiez les informations avant de confirmer</p>
        </div>

        <div class="p-6 space-y-6">
          <!-- Situation Section -->
          <div class="border-l-4 border-indigo-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">1. Situation du patient</h4>
            <div class="space-y-1">
              <p v-if="form.situation1.length > 0" class="text-sm text-slate-700">
                <strong>Justifications:</strong> {{ form.situation1.join(', ') }}
              </p>
              <p v-if="form.date_at_mp" class="text-sm text-slate-700">
                <strong>Date AT/MP:</strong> {{ form.date_at_mp }}
              </p>
            </div>
          </div>

          <!-- Transport Mode Section -->
          <div class="border-l-4 border-blue-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">2. Mode de transport</h4>
            <p class="text-sm text-slate-700">{{ form.mode_transport || 'Non spécifié' }}</p>
            <p class="text-sm text-slate-700 mt-1"><strong>Type de véhicule:</strong> {{ form.vehiculeType }}</p>
          </div>

          <!-- Journey Section -->
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-3">3. Trajet du patient</h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong class="text-slate-700">Départ:</strong>
                <p class="text-slate-600 mt-1">
                  {{ getLocationLabel(form.trajet_depart, form.trajet_depart_autre, form.trajet_depart_structure) }}
                </p>
              </div>
              <div>
                <strong class="text-slate-700">Arrivée:</strong>
                <p class="text-slate-600 mt-1">
                  {{ getLocationLabel(form.trajet_arrivee, form.trajet_arrivee_autre, form.trajet_arrivee_structure) }}
                </p>
              </div>
            </div>
            <p v-if="form.nombre_transports > 0" class="text-sm text-slate-700 mt-3">
              <strong>Nombre de transports itératifs:</strong> {{ form.nombre_transports }}
            </p>
          </div>

          <!-- Other Info Section -->
          <div class="border-l-4 border-yellow-500 pl-4">
            <h4 class="font-semibold text-slate-900 mb-2">4. Informations additionnelles</h4>
            <div class="space-y-1 text-sm">
              <p v-if="form.exoneration.length > 0" class="text-slate-700">
                <strong>Exonération du ticket modérateur:</strong> {{ form.exoneration.join(', ') }}
              </p>
              <p v-if="form.pension_militaire.length > 0" class="text-slate-700">
                <strong>Pension militaire d'invalidité:</strong> {{ form.pension_militaire.join(', ') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="sticky bottom-0 bg-slate-50 px-6 py-4 flex gap-4 justify-end border-t border-slate-200">
          <button 
            @click="showConfirmation = false"
            class="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            Retour à la modification
          </button>
          <button 
            @click="confirmSubmission"
            class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            ✓ Confirmer et envoyer
          </button>
        </div>
      </div>
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
  vehiculeType: '',
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

const showConfirmation = ref(false)

const getLocationLabel = (type: string, autre: string, structure: string) => {
  if (type === 'domicile') return 'Domicile du patient'
  if (type === 'autre') return autre || 'Autre lieu (non spécifié)'
  if (type === 'structure') return structure || 'Structure de soins (non spécifiée)'
  return 'Non spécifié'
}

const handleSubmit = async () => {
  try {
    // Vérifier que le type de véhicule est sélectionné
    if (!form.value.vehiculeType) {
      alert('Veuillez sélectionner un type de véhicule')
      return
    }
    // Afficher le modal de confirmation
    showConfirmation.value = true
  } catch (error) {
    console.error('Erreur:', error)
  }
}

const confirmSubmission = async () => {
  try {


    // Envoyer les données au backend pour génération PDF
    const prescriptionData = {
      patientId: parseInt(patientId),
      medecinId: auth.userId.value,
      situation1: form.value.situation1,
      date_at_mp: form.value.date_at_mp,
      mode_transport: form.value.mode_transport,
      vehiculeType: form.value.vehiculeType,
      trajet_depart: form.value.trajet_depart,
      trajet_depart_autre: form.value.trajet_depart_autre,
      trajet_depart_structure: form.value.trajet_depart_structure,
      trajet_arrivee: form.value.trajet_arrivee,
      trajet_arrivee_autre: form.value.trajet_arrivee_autre,
      trajet_arrivee_structure: form.value.trajet_arrivee_structure,
      nombre_transports: form.value.nombre_transports,
      exoneration: form.value.exoneration,
      pension_militaire: form.value.pension_militaire
    }

    const response = await fetch('http://localhost:8081/prescriptions/create-with-pdf', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prescriptionData)
    })

    if (response.ok) {
      const prescription = await response.json()
      
      // Télécharger le PDF généré
      const pdfResponse = await fetch(`http://localhost:8081/prescriptions/${prescription.idprescription}/pdf`, {
        method: 'GET',
        credentials: 'include'
      })
      
      if (pdfResponse.ok) {
        const blob = await pdfResponse.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `prescription_${prescription.idprescription}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        
        alert('Prescription créée avec succès ! Le PDF a été téléchargé.')
      }
      
      showConfirmation.value = false
      router.push('/patients')
    } else {
      const error = await response.text()
      console.error('Erreur:', error)
      alert('Erreur lors de la création de la prescription')
      showConfirmation.value = false
    }
  } catch (error) {
    console.error('Erreur:', error)
    showConfirmation.value = false
    alert('Erreur lors de la création de la prescription: ' + error.message)
  }
}
</script>
