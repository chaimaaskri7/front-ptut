import { ref, computed } from 'vue'

const userId = ref<number | null>(null)
const userType = ref<'medecin' | 'patient' | null>(null)
const userName = ref<string | null>(null)
const specialite = ref<string | null>(null)
const mail = ref<string | null>(null)

export function useAuth() {
  // Initialiser depuis localStorage au premier appel
  const initFromStorage = () => {
    if (!userId.value) {
      const storedUserId = localStorage.getItem('userId')
      const storedUserType = localStorage.getItem('userType')
      const storedUserName = localStorage.getItem('userName')
      const storedSpecialite = localStorage.getItem('specialite')
      const storedMail = localStorage.getItem('mail')
      
      if (storedUserId && storedUserType) {
        userId.value = parseInt(storedUserId)
        userType.value = storedUserType as 'medecin' | 'patient'
        userName.value = storedUserName
        specialite.value = storedSpecialite
        mail.value = storedMail
      }
    }
  }

  const isAuthenticated = computed(() => {
    initFromStorage()
    return userId.value !== null && userType.value !== null
  })

  const isMedecin = computed(() => {
    initFromStorage()
    return userType.value === 'medecin'
  })

  const isPatient = computed(() => {
    initFromStorage()
    return userType.value === 'patient'
  })

  const login = (id: number, type: 'medecin' | 'patient', name: string, spec?: string, email?: string) => {
    userId.value = id
    userType.value = type
    userName.value = name
    specialite.value = spec || null
    mail.value = email || null

    localStorage.setItem('userId', id.toString())
    localStorage.setItem('userType', type)
    localStorage.setItem('userName', name)
    if (spec) localStorage.setItem('specialite', spec)
    if (email) localStorage.setItem('mail', email)
  }

  const logout = () => {
    userId.value = null
    userType.value = null
    userName.value = null
    specialite.value = null
    mail.value = null

    localStorage.removeItem('userId')
    localStorage.removeItem('userType')
    localStorage.removeItem('userName')
    localStorage.removeItem('specialite')
    localStorage.removeItem('mail')
  }

  return {
    userId,
    userType,
    userName,
    specialite,
    mail,
    isAuthenticated,
    isMedecin,
    isPatient,
    login,
    logout,
    initFromStorage
  }
}
