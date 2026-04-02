<template>
  <div id="app">
    <!-- Page de Login - isolée complètement -->
    <template v-if="isLoginPage">
      <main class="login-main">
        <router-view />
      </main>
    </template>

    <!-- Pages authentifiées -->
    <template v-else>
      <NavToggle />
      <PatientSidebar v-if="isPatientRoute" />
      <Sidebar v-else />
      <main class="default-main">
        <router-view />
      </main>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import PatientSidebar from './components/patient/PatientSidebar.vue'
import NavToggle from './components/NavToggle.vue'

const route = useRoute()
const isPatientRoute = computed(() => route.path.startsWith('/patient/') || route.path === '/patient')
const isLoginPage = computed(() => route.path === '/login' || route.path === '/login/')
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  display: block;
}

main {
  overflow-y: auto;
  transition: margin-left 0.3s ease;
}

main.login-main {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

main.default-main {
  height: calc(100vh - 64px);
  margin-top: 64px;
  margin-left: 0;
}

/* Desktop: Sidebar visible */
@media (min-width: 1024px) {
  main.default-main {
    margin-left: 289px;
  }
}

/* Tablet: Sidebar visible but smaller */
@media (min-width: 768px) and (max-width: 1023px) {
  main.default-main {
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
  main.default-main {
    margin-left: 0;
  }
  
  aside {
    display: none !important;
  }
}
</style>
