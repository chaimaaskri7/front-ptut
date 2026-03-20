<template>
  <aside class="w-[289px] bg-white border-r border-[#f0f0f0] h-screen flex flex-col fixed left-0 top-0 z-50">
    <!-- Logo -->
    <div class="flex gap-[6px] items-center px-[19px] py-[21px]">
      <div class="flex items-center justify-center p-[13.522px] w-[40px] h-[34.872px]">
        <div class="w-[30.392px] h-[23.259px] relative">
          <svg class="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.3916 23.2588">
            <path d="M6.68457 8.41797C11.1889 8.41801 14.8398 12.0699 14.8398 16.5742V23.2588H10.7832V16.5742C10.7832 16.0945 10.7012 15.6339 10.5498 15.2061L4.59082 21.165L1.72266 18.2959L7.46875 12.5498C7.21494 12.5006 6.95275 12.4746 6.68457 12.4746H0V8.41797H6.68457ZM30.3916 12.4746H23.707C23.3313 12.4746 22.9667 12.5255 22.6211 12.6201L28.8545 18.8535L25.9863 21.7217L19.7529 15.4883C19.6582 15.834 19.6074 16.1985 19.6074 16.5742V23.2588H15.5508V16.5742C15.5508 12.0699 19.2027 8.41797 23.707 8.41797H30.3916V12.4746ZM15.1455 0C17.5351 0.000223412 19.4726 1.93746 19.4727 4.32715C19.4727 6.71684 17.5351 8.65407 15.1455 8.6543C12.7557 8.6543 10.8184 6.71698 10.8184 4.32715C10.8184 1.93733 12.7557 0 15.1455 0Z" fill="#168BD9" />
          </svg>
        </div>
      </div>
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

      <div class="flex gap-[10px] items-center cursor-pointer">
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
        <span class="font-semibold text-[16px] text-[#7f7f7f]">Help</span>
      </div>

      <div class="flex gap-[10px] items-center cursor-pointer">
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127a.75.75 0 00.96-.064l1.217-.826a1.125 1.125 0 011.37.198l1.833 1.834c.459.459.578 1.148.198 1.37l-.826 1.218a.75.75 0 00-.064.96c.044.073.087.146.127.22.183.332.495.582.87.645l1.28.213c.543.09.94.56.94 1.11v2.594c0 .55-.397 1.02-.94 1.11l-1.28.213a.75.75 0 00-.87.645 8.217 8.217 0 01-.128.22.75.75 0 00.065.96l.826 1.218c.38.222.26.91-.198 1.37l-1.834 1.833a1.125 1.125 0 01-1.369.198l-1.218-.826a.75.75 0 00-.96.064 8.217 8.217 0 01-.22.128.75.75 0 00-.645.87l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.397-1.11-.94l-.213-1.28a.75.75 0 00-.645-.87 8.217 8.217 0 01-.22-.128.75.75 0 00-.96.064l-1.217.826a1.125 1.125 0 01-1.37-.198l-1.833-1.834a1.125 1.125 0 01-.198-1.37l.826-1.217a.75.75 0 00.064-.96 8.217 8.217 0 01-.127-.22.75.75 0 00-.87-.645l-1.281-.213a1.125 1.125 0 01-.94-1.11V12c0-.55.398-1.02.94-1.11l1.281-.213a.75.75 0 00.87-.645c.041-.074.084-.147.128-.22a.75.75 0 00-.065-.96l-.826-1.218a1.125 1.125 0 01.198-1.37l1.834-1.833a1.125 1.125 0 011.37-.198l1.217.826c.3.203.686.25.96.064a8.217 8.217 0 01.22-.127.75.75 0 00.645-.87l.213-1.28z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span class="font-semibold text-[16px] text-[#7f7f7f]">Settings</span>
      </div>
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
a {
  text-decoration: none;
}
</style>
