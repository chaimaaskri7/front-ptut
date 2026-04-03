<template>
  <header class="bg-white border-b border-[#f0f0f0] px-4 md:px-6 lg:px-[40px] py-3 md:py-[14px] flex items-center justify-between sticky top-0 z-[60] gap-4">
    <!-- Left Section - Back arrow + Title -->
    <div class="flex items-center gap-2 md:gap-[16px] flex-1 md:flex-none">
      <h2 class="font-semibold text-base md:text-lg lg:text-[18px] text-[#1b1b1b] truncate">{{ subtitle }}</h2>
    </div>

    <!-- Center Section - Search Bar (Hidden on mobile) -->
    <div class="hidden md:flex search-bar bg-[#f8f8f8] border border-[#f0f0f0] rounded-[10px] px-3 md:px-[13px] py-2 md:py-[8px] gap-2 md:gap-[11px] items-center w-[200px] md:w-[300px] flex-1">
      <svg class="w-4 md:w-[20px] h-4 md:h-[20px]" fill="none" viewBox="0 0 24 24">
        <path clip-rule="evenodd" d="M8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15C10.1142 15 11.8006 14.2453 13.023 13.023C14.2453 11.8006 15 10.1142 15 8.25C15 4.52208 11.9779 1.5 8.25 1.5ZM0 8.25C0 3.69365 3.69365 0 8.25 0C12.8063 0 16.5 3.69365 16.5 8.25C16.5 10.2578 15.782 12.0991 14.5899 13.5293L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L13.5293 14.5899C12.0991 15.782 10.2578 16.5 8.25 16.5C3.69365 16.5 0 12.8063 0 8.25Z" fill="#7F7F7F" fill-rule="evenodd" />
      </svg>
      <input 
        type="text" 
        placeholder="Search" 
        v-model="searchQuery"
        @input="$emit('search', searchQuery)"
        class="bg-transparent border-none outline-none font-normal text-sm md:text-[14px] text-[#7f7f7f] flex-1 w-full"
      />
    </div>

    <!-- Right Section -->
    <div class="flex gap-2 md:gap-[20px] items-center flex-shrink-0">
      <!-- Notification Icon - Only for Patients -->
      <div v-if="auth.isPatient.value" class="notification w-8 md:w-[32px] h-8 md:h-[32px] border border-[#f0f0f0] rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
        <svg class="w-4 md:w-[18px] h-4 md:h-[18px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </div>

      <!-- User Profile with Dropdown -->
      <div class="user-profile flex gap-1 md:gap-[8px] items-center cursor-pointer relative">
        <button 
          @click="showProfileMenu = !showProfileMenu"
          class="flex gap-1 md:gap-[8px] items-center hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors"
        >
          <div class="w-8 md:w-[32px] h-8 md:h-[32px] rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" 
              :alt="auth.userName.value || 'User'" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col font-medium leading-tight hidden md:flex">
            <p class="text-[#1b1b1b] text-[13px]">Dr {{ auth.userName.value }}</p>
            <p class="text-[#7f7f7f] text-[11px]">{{ auth.specialite.value || 'Utilisateur' }}</p>
          </div>
          <svg 
            class="w-[20px] h-[20px] transition-transform" 
            :class="{ 'rotate-180': showProfileMenu }"
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path clip-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" fill="#7F7F7F" />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div 
          v-if="showProfileMenu" 
          class="absolute top-[60px] right-0 bg-white border border-[#f0f0f0] rounded-lg shadow-lg min-w-[200px] z-[70]"
        >
          <div class="p-3 border-b border-[#f0f0f0] text-sm text-[#7f7f7f]">
            <p class="font-semibold text-[#1b1b1b]">{{ auth.userName.value }}</p>
            <p class="text-xs">{{ auth.mail.value }}</p>
          </div>
          <button 
            @click="handleLogout"
            class="w-full text-left px-4 py-3 text-[#e85d5d] hover:bg-red-50 font-medium text-sm transition-colors flex items-center gap-2"
          >
            <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const auth = useAuth()
const router = useRouter()
const searchQuery = ref('')
const showProfileMenu = ref(false)

defineProps<{
  subtitle: string;
}>();

defineEmits<{
  search: [query: string]
}>();

const handleLogout = async () => {
  auth.logout()
  showProfileMenu.value = false
  await router.push('/login')
}
</script>

<style scoped>
header {
  padding: 14px 40px;
}

@media (max-width: 1023px) {
  header {
    padding: 14px 20px;
  }
  
  .search-bar {
    width: 200px;
  }
}

@media (max-width: 767px) {
  header {
    padding: 14px 16px;
    flex-wrap: wrap;
  }
  
  .search-bar {
    display: none;
  }
  
  .user-profile {
    display: none;
  }
}

.notification {
  margin-left: auto;
}
</style>
