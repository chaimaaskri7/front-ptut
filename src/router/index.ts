import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/medecins/Dashboard.vue'
import PatientsList from '../components/medecins/PatientsList.vue'
import PrescriptionsList from '../components/medecins/PrescriptionsList.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
