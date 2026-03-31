import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Dashboard from '../components/medecins/Dashboard.vue'
import PatientsList from '../components/medecins/PatientsList.vue'
import PrescriptionsList from '../components/medecins/PrescriptionsList.vue'
import CreatePrescription from '../components/medecins/CreatePrescription.vue'
import MyProfile from '../components/patient/MyProfile.vue'
import MyTransports from '../components/patient/MyTransports.vue'
import Notifications from '../components/patient/Notifications.vue'
import Transactions from '../components/patient/Transactions.vue'
import QRCode from '../components/patient/QRCode.vue'
import Settings from '../components/patient/Settings.vue'
import ChangePassword from '../components/patient/ChangePassword.vue'
import FavoriteCarrier from '../components/patient/FavoriteCarrier.vue'
import Documents from '../components/patient/Documents.vue'
import TestDataDisplay from '../components/TestDataDisplay.vue'
import { useAuth } from '../composables/useAuth'
import '../types/router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/test',
    name: 'Test',
    component: TestDataDisplay
  },
  // Doctor routes
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, role: 'medecin' }
  },
  {
    path: '/patients',
    name: 'Patients',
    component: PatientsList,
    meta: { requiresAuth: true, role: 'medecin' }
  },
  {
    path: '/prescriptions',
    name: 'Prescriptions',
    component: PrescriptionsList,
    meta: { requiresAuth: true, role: 'medecin' }
  },
  {
    path: '/prescription/create/:patientId',
    name: 'CreatePrescription',
    component: CreatePrescription,
    meta: { requiresAuth: true, role: 'medecin' }
  },
  // Patient routes
  {
    path: '/patient/profile',
    name: 'MyProfile',
    component: MyProfile,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/transports',
    name: 'MyTransports',
    component: MyTransports,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/transactions',
    name: 'Transactions',
    component: Transactions,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/qrcode',
    name: 'QRCode',
    component: QRCode,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/settings/password',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/favorite-carrier',
    name: 'FavoriteCarrier',
    component: FavoriteCarrier,
    meta: { requiresAuth: true, role: 'patient' }
  },
  {
    path: '/patient/documents',
    name: 'Documents',
    component: Documents,
    meta: { requiresAuth: true, role: 'patient' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route guards
router.beforeEach((to, from, next) => {
  const auth = useAuth()
  auth.initFromStorage()

  const isAuthenticated = auth.isAuthenticated.value
  const userType = auth.userType.value
  const requiresAuth = to.meta.requiresAuth as boolean
  const requiredRole = to.meta.role as string | undefined

  // Si la route ne nécessite pas d'authentification et l'utilisateur n'est pas connecté
  if (!requiresAuth) {
    // Si l'utilisateur est connecté et essaie d'accéder à la page de login
    if (to.path === '/login' && isAuthenticated) {
      // Rediriger vers le dashboard approprié
      next(userType === 'medecin' ? '/dashboard' : '/patient/profile')
    } else {
      next()
    }
    return
  }

  // Si la route nécessite l'authentification mais l'utilisateur n'est pas connecté
  if (!isAuthenticated) {
    next('/login')
    return
  }

  // Vérifier les permissions de rôle
  if (requiredRole && userType !== requiredRole) {
    // Rediriger vers le dashboard approprié si tentative d'accès à une route différente
    next(userType === 'medecin' ? '/dashboard' : '/patient/profile')
    return
  }

  next()
})

export default router
