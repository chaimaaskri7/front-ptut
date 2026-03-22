<template>
  <div id="app" class="min-h-screen bg-white">
    <NavToggle />
    <PatientSidebar v-if="isPatientRoute" />
    <Sidebar v-else />
    <main class="ml-[289px] pt-[64px]">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import PatientSidebar from './components/patient/PatientSidebar.vue'
import NavToggle from './components/NavToggle.vue'

const route = useRoute()
const isPatientRoute = computed(() => route.path.startsWith('/patient'))
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100vh;
  display: block;
}

main {
  height: calc(100vh - 64px);
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  margin-top: 64px;
}

/* Desktop: Sidebar visible */
@media (min-width: 1024px) {
  main {
    margin-left: 289px;
  }
}

/* Tablet: Sidebar visible but smaller */
@media (min-width: 768px) and (max-width: 1023px) {
  main {
    margin-left: 100px;
  }
  
  aside {
    width: 100px !important;
  }
  
  aside p,
  aside span {
    display: none;
  }
}

/* Mobile: Sidebar hidden */
@media (max-width: 767px) {
  main {
    margin-left: 0;
  }
  
  aside {
    display: none !important;
  }
}
</style>
