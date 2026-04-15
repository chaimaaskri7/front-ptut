<script setup lang="ts">
import { ref, computed } from 'vue'
import { evaluationService } from '../../services/evaluationService'
import { useAuth } from '../../composables/useAuth'

interface Props {
  isOpen: boolean
  transport: any
}

interface Emits {
  (e: 'close'): void
  (e: 'submitted'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const auth = useAuth()

const transportRating = ref(3)
const driverRating = ref(3)
const feedback = ref('')
const isSubmitting = ref(false)
const submitMessage = ref<{ type: string; text: string } | null>(null)

const transportStars = computed(() => Array(5).fill(0).map((_, i) => i < transportRating.value))
const driverStars = computed(() => Array(5).fill(0).map((_, i) => i < driverRating.value))

const closeModal = () => {
  transportRating.value = 3
  driverRating.value = 3
  feedback.value = ''
  submitMessage.value = null
  emit('close')
}

const submitEvaluation = async () => {
  if (!props.transport) return
  
  isSubmitting.value = true
  submitMessage.value = null
  
  try {
    const evaluationData = {
      patientId: auth.userId.value,
      transportId: props.transport.idtransport,
      transporteurId: props.transport.transporteur?.idtransporteur,
      transportRating: transportRating.value,
      driverRating: driverRating.value,
      feedback: feedback.value,
      date: new Date().toISOString(),
      notes: feedback.value
    }
    
    await evaluationService.createEvaluation(evaluationData)
    
    submitMessage.value = {
      type: 'success',
      text: 'Évaluation soumise avec succès!'
    }
    
    // Fermer le modal après 1.5 secondes
    setTimeout(() => {
      closeModal()
      emit('submitted')
    }, 1500)
  } catch (err: any) {
    console.error('Erreur lors de la soumission:', err)
    submitMessage.value = {
      type: 'error',
      text: 'Erreur lors de la soumission. Veuillez réessayer.'
    }
  } finally {
    isSubmitting.value = false
  }
}

const setTransportRating = (stars: number) => {
  transportRating.value = stars
}

const setDriverRating = (stars: number) => {
  driverRating.value = stars
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-full max-w-xl mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-gray-800">Share your feedback</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">
          ✕
        </button>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- How was the transport? -->
        <div>
          <label class="block text-sm font-semibold mb-3 text-gray-700">How was the transport?</label>
          <div class="flex gap-4">
            <button 
              v-for="star in 5"
              :key="star"
              @click="setTransportRating(star)"
              class="text-4xl transition hover:scale-110"
              :class="star <= transportRating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </button>
          </div>
        </div>

        <!-- Feedback -->
        <div>
          <label class="block text-sm font-semibold mb-3 text-gray-700">Pouvez-vous nous en dire plus ?</label>
          <textarea 
            v-model="feedback"
            placeholder="Ajouter des commentaires"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <!-- Rate the driver -->
        <div class="border-t border-gray-200 pt-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-gray-800">Évaluer le conducteur !</h3>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <p class="text-sm text-gray-600 mb-4">Help us improve our tool to best suit your needs by rating us here!</p>
          
          <div class="flex gap-3 mb-6">
            <button 
              v-for="star in 5"
              :key="`driver-${star}`"
              @click="setDriverRating(star)"
              class="text-4xl transition hover:scale-110"
              :class="star <= driverRating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </button>
          </div>

          <!-- Message de succès/erreur -->
          <div v-if="submitMessage" :class="[
            'mb-4 p-3 rounded-lg text-sm font-semibold',
            submitMessage.type === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          ]">
            {{ submitMessage.text }}
          </div>

          <!-- Actions -->
          <div class="flex gap-3">
            <button 
              @click="closeModal"
              :disabled="isSubmitting"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button 
              @click="submitEvaluation"
              :disabled="isSubmitting"
              class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition disabled:opacity-50"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
