<template>
  <header class="bg-white border-b border-[#f0f0f0] px-[40px] py-[14px] flex items-center justify-between sticky top-0 z-10">
    <!-- Left Section -->
    <div class="flex flex-col leading-normal">
      <p class="font-bold text-[24px] text-[#1b1b1b]">Dashboard</p>
      <p class="font-normal text-[14px] text-[#168bd9]">{{ subtitle }}</p>
    </div>

    <!-- Right Section -->
    <div class="flex gap-[25px] items-center">
      <!-- Search Bar -->
      <div class="bg-[#f8f8f8] border border-[#f0f0f0] rounded-[10px] px-[13px] py-[8px] flex gap-[11px] items-center w-[381px]">
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
          <path clip-rule="evenodd" d="M8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15C10.1142 15 11.8006 14.2453 13.023 13.023C14.2453 11.8006 15 10.1142 15 8.25C15 4.52208 11.9779 1.5 8.25 1.5ZM0 8.25C0 3.69365 3.69365 0 8.25 0C12.8063 0 16.5 3.69365 16.5 8.25C16.5 10.2578 15.782 12.0991 14.5899 13.5293L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L13.5293 14.5899C12.0991 15.782 10.2578 16.5 8.25 16.5C3.69365 16.5 0 12.8063 0 8.25Z" fill="#7F7F7F" fill-rule="evenodd" />
        </svg>
        <input 
          type="text" 
          placeholder="Search" 
          class="bg-transparent border-none outline-none font-normal text-[16px] text-[#7f7f7f] flex-1"
        />
      </div>

      <!-- Notification Icon -->
      <div class="w-[32px] h-[32px] border border-[#f0f0f0] rounded-[5px] flex items-center justify-center cursor-pointer relative">
        <svg class="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </div>

      <!-- User Profile -->
      <div class="flex gap-[8px] items-center cursor-pointer">
        <div class="w-[34px] h-[34px] rounded-[50px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" 
            alt="Dr Amirul Haque" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col font-medium leading-normal gap-px w-[131px]">
          <p class="text-[#1b1b1b] text-[16px]">Dr Amirul Haque</p>
          <p class="text-[#7f7f7f] text-[14px]">Medecin généraliste</p>
        </div>
        <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
          <path clip-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" fill="#7F7F7F" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string;
}>();
</script>
