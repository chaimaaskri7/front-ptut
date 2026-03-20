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
}
</style>
