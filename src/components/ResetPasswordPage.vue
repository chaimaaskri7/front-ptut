<template>
  <div class="reset-password-container">
    <div class="reset-password-box">
      <h1>Réinitialiser votre mot de passe</h1>
      
      <div v-if="!success" class="form-group">
        <div class="input-group">
          <label>Nouveau mot de passe</label>
          <input 
            v-model="newPassword" 
            type="password" 
            placeholder="Entrez votre nouveau mot de passe"
            @keyup.enter="handleResetPassword"
          />
        </div>

        <div class="input-group">
          <label>Confirmer le mot de passe</label>
          <input 
            v-model="confirmPassword" 
            type="password" 
            placeholder="Confirmez votre mot de passe"
            @keyup.enter="handleResetPassword"
          />
        </div>

        <div v-if="error" class="error-message">
          ❌ {{ error }}
        </div>

        <button 
          @click="handleResetPassword"
          :disabled="loading"
          class="reset-btn"
        >
          {{ loading ? 'Réinitialisation...' : 'Réinitialiser le mot de passe' }}
        </button>
      </div>

      <div v-else class="success-message">
        <h2>✅ Mot de passe réinitialisé avec succès!</h2>
        <p>Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.</p>
        <router-link to="/login" class="login-link">Aller à la connexion</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref(false)
const loading = ref(false)
const resetToken = ref('')
const userType = ref('')

onMounted(() => {
  // Récupérer le token et userType de l'URL
  resetToken.value = (route.query.token as string) || ''
  userType.value = (route.query.userType as string) || ''

  if (!resetToken.value || !userType.value) {
    error.value = 'Lien de réinitialisation invalide ou expiré'
  }
})

const handleResetPassword = async () => {
  error.value = ''

  // Validation
  if (!newPassword.value || !confirmPassword.value) {
    error.value = 'Veuillez remplir tous les champs'
    return
  }

  if (newPassword.value !== confirmPassword.value) {
    error.value = 'Les mots de passe ne correspondent pas'
    return
  }

  if (newPassword.value.length < 6) {
    error.value = 'Le mot de passe doit contenir au moins 6 caractères'
    return
  }

  if (!resetToken.value) {
    error.value = 'Lien de réinitialisation invalide'
    return
  }

  loading.value = true

  try {
    const response = await fetch('http://localhost:8081/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        resetToken: resetToken.value,
        newPassword: newPassword.value
      })
    })

    const data = await response.json()

    if (data.success) {
      success.value = true
      // Redirection automatique après 3 secondes
      setTimeout(() => {
        router.push('/login')
      }, 3000)
    } else {
      error.value = data.message || 'Erreur lors de la réinitialisation du mot de passe'
    }
  } catch (err) {
    error.value = 'Erreur de connexion au serveur'
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.reset-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.reset-password-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 24px;
}

h2 {
  color: #27ae60;
  margin-bottom: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

input {
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
}

.success-message {
  background-color: #efe;
  color: #363;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.success-message p {
  margin: 10px 0;
  font-size: 14px;
}

.reset-btn {
  padding: 12px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reset-btn:hover:not(:disabled) {
  background-color: #764ba2;
}

.reset-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-link {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.login-link:hover {
  background-color: #764ba2;
}
</style>
