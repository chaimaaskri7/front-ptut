import { DefineComponent } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    role?: 'medecin' | 'patient'
  }
}
