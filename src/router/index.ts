import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/medecins/Dashboard.vue'
import PatientsList from '../components/medecins/PatientsList.vue'
import PrescriptionsList from '../components/medecins/PrescriptionsList.vue'
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

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
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
    component: Dashboard
  },
  {
    path: '/patients',
    name: 'Patients',
    component: PatientsList
  },
  {
    path: '/prescriptions',
    name: 'Prescriptions',
    component: PrescriptionsList
  },
  // Patient routes
  {
    path: '/patient/profile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/patient/transports',
    name: 'MyTransports',
    component: MyTransports
  },
  {
    path: '/patient/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/patient/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/patient/qrcode',
    name: 'QRCode',
    component: QRCode
  },
  {
    path: '/patient/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/patient/settings/password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/patient/favorite-carrier',
    name: 'FavoriteCarrier',
    component: FavoriteCarrier
  },
  {
    path: '/patient/documents',
    name: 'Documents',
    component: Documents
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
