<template>
  <div id="app" class="min-h-screen bg-white">
    <Sidebar />
    <main class="ml-[289px]">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
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
  height: 100vh;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  padding-top: 62px;
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
