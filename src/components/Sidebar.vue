<template>
  <aside class="sidebar bg-white border-r border-[#f0f0f0] h-screen flex flex-col fixed left-0 top-0 z-50">
    <!-- Logo -->
    <div class="flex gap-[6px] items-center px-[19px] py-[21px]">
      <img src="@/assets/careway-logo.png" alt="CareWay" class="h-[40px] w-auto">
      <p class="font-bold text-[24px] text-[#0c284f] whitespace-nowrap" style="font-family: 'Geologica', sans-serif;">
        CareWay
      </p>
    </div>

    <!-- Divider -->
    <div class="h-0 w-[293px] relative">
      <svg class="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293 1">
        <line stroke="#F8F8F8" x2="293" y1="0.5" y2="0.5" />
      </svg>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 flex flex-col gap-[20px] px-[19px] mt-[39px] overflow-y-auto">
      <router-link 
        to="/dashboard" 
        class="flex gap-[10px] items-center px-[15px] py-[7px] rounded-[10px] transition-colors"
        :class="currentRoute === 'dashboard' ? 'bg-[rgba(44,216,255,0.12)]' : ''"
      >
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" :stroke="currentRoute === 'dashboard' ? '#168BD9' : '#7F7F7F'" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
        <span class="font-semibold text-[16px]" :class="currentRoute === 'dashboard' ? 'text-[#168BD9]' : 'text-[#7f7f7f]'">
          Dashboard
        </span>
      </router-link>

      <router-link 
        to="/patients" 
        class="flex gap-[10px] items-center px-[15px] py-[7px] rounded-[10px] transition-colors"
        :class="currentRoute === 'patients' ? 'bg-[rgba(44,216,255,0.12)]' : ''"
      >
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" :fill="currentRoute === 'patients' ? '#168BD9' : '#7F7F7F'" />
        </svg>
        <span class="font-semibold text-[16px]" :class="currentRoute === 'patients' ? 'text-[#168BD9]' : 'text-[#7f7f7f]'">
          Patients
        </span>
      </router-link>

      <router-link 
        to="/prescriptions" 
        class="flex gap-[10px] items-center px-[15px] py-[7px] rounded-[10px] transition-colors"
        :class="currentRoute === 'prescriptions' ? 'bg-[rgba(44,216,255,0.12)]' : ''"
      >
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" :stroke="currentRoute === 'prescriptions' ? '#168BD9' : '#7F7F7F'" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <span class="font-semibold text-[16px]" :class="currentRoute === 'prescriptions' ? 'text-[#168BD9]' : 'text-[#7f7f7f]'">
          Prescriptions
        </span>
      </router-link>
    </nav>

    <!-- Bottom Menu -->
    <div class="border-t border-[#f0f0f0] px-[19px] py-[20px] flex flex-col gap-[19px]">
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path.split('/')[1] || 'dashboard')
</script>

<style scoped>
aside {
  position: fixed;
  left: 0;
  top: 0;
  width: 289px;
  height: 100vh;
  background: white;
  border-right: 1px solid #f0f0f0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s ease;
}

<style scoped>
aside {
  position: fixed;
  left: 0;
  top: 0;
  width: 289px;
  height: 100vh;
  background: white;
  border-right: 1px solid #f0f0f0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s ease;
}

nav {
  flex: 1;
  overflow-y: auto;
}

a {
  text-decoration: none;
}

/* Tablet: Collapse sidebar to icon-only */
@media (max-width: 1023px) and (min-width: 768px) {
  aside {
    width: 100px !important;
  }
  
  aside p,
  aside span {
    display: none !important;
  }
}

/* Mobile: Hide sidebar */
@media (max-width: 767px) {
  aside {
    display: none !important;
  }
}
</style>
