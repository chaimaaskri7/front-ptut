<template>
  <div id="app" class="flex min-h-screen bg-white">
    <Sidebar />
    <main class="flex-1 ml-[289px]">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: white;
  overflow-x: hidden;
}
</style>
