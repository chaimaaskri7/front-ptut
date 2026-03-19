<template>
  <div class="flex justify-between items-center pt-4 border-t border-[#f0f0f0]">
    <!-- Left Pagination -->
    <div class="flex items-center">
      <button 
        class="px-[10px] py-[6px] border border-[#f0f0f0] bg-white text-[14px] text-[#1b1b1b] rounded-l-[5px] flex items-center gap-[10px] hover:bg-gray-50"
        @click="$emit('previous')"
        :disabled="currentPage === 1"
      >
        <svg class="w-[12px] h-[7px]" fill="none" viewBox="0 0 12.5 7.36396">
          <path d="M12.3536 4.03553C12.5488 3.84027 12.5488 3.52369 12.3536 3.32843L9.17157 0.146447C8.97631 -0.0488155 8.65973 -0.0488155 8.46447 0.146447C8.2692 0.341709 8.2692 0.658291 8.46447 0.853554L11.2929 3.68198L8.46447 6.51041C8.2692 6.70567 8.2692 7.02225 8.46447 7.21751C8.65973 7.41278 8.97631 7.41278 9.17157 7.21751L12.3536 4.03553ZM0 3.68198V4.18198H12V3.68198V3.18198H0V3.68198Z" fill="#1B1B1B" transform="rotate(180 6.25 3.68198)" />
        </svg>
        Previous
      </button>
      
      <button 
        v-for="page in pages" 
        :key="page"
        class="px-[10px] py-[6px] border-t border-b border-r border-[#f0f0f0] text-[14px]"
        :class="page === currentPage ? 'bg-[#168bd9] text-white border-[#168bd9]' : 'bg-white text-[#1b1b1b] hover:bg-gray-50'"
        @click="$emit('change-page', page)"
      >
        {{ page }}
      </button>

      <button 
        class="px-[10px] py-[6px] border border-[#f0f0f0] bg-white text-[14px] text-[#1b1b1b] rounded-r-[5px] flex items-center gap-[5px] hover:bg-gray-50"
        @click="$emit('next')"
        :disabled="currentPage === totalPages"
      >
        Next
        <svg class="w-[12px] h-[7px]" fill="none" viewBox="0 0 12.5 7.36396">
          <path d="M12.3536 4.03553C12.5488 3.84027 12.5488 3.52369 12.3536 3.32843L9.17157 0.146447C8.97631 -0.0488155 8.65973 -0.0488155 8.46447 0.146447C8.2692 0.341709 8.2692 0.658291 8.46447 0.853554L11.2929 3.68198L8.46447 6.51041C8.2692 6.70567 8.2692 7.02225 8.46447 7.21751C8.65973 7.41278 8.97631 7.41278 9.17157 7.21751L12.3536 4.03553ZM0 3.68198V4.18198H12V3.68198V3.18198H0V3.68198Z" fill="#1B1B1B" />
        </svg>
      </button>
    </div>

    <!-- Right Page Selector -->
    <div class="flex gap-[5px] items-center text-[14px] text-[#1b1b1b]">
      <span>Page</span>
      <div class="px-[10px] py-[6px] border border-[#f0f0f0] rounded-[5px] bg-white flex items-center gap-[10px] cursor-pointer">
        <span class="text-black">{{ currentPage }}</span>
        <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
          <path clip-rule="evenodd" d="M9.39775 12.2102C9.17808 12.4299 8.82192 12.4299 8.60225 12.2102L2.97725 6.58525C2.75758 6.36558 2.75758 6.00942 2.97725 5.78975C3.19692 5.57008 3.55308 5.57008 3.77275 5.78975L9 11.017L14.2273 5.78975C14.4469 5.57008 14.8031 5.57008 15.0227 5.78975C15.2424 6.00942 15.2424 6.36558 15.0227 6.58525L9.39775 12.2102Z" fill="#7F7F7F" fill-rule="evenodd" />
        </svg>
      </div>
      <span>of</span>
      <span>{{ totalPages }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits(['previous', 'next', 'change-page']);

const pages = computed(() => {
  const pagesArray = [];
  const maxVisible = 5;
  
  if (props.totalPages <= maxVisible + 2) {
    for (let i = 1; i <= props.totalPages; i++) {
      pagesArray.push(i);
    }
  } else {
    pagesArray.push(1);
    
    if (props.currentPage > 3) {
      pagesArray.push('...');
    }
    
    const start = Math.max(2, props.currentPage - 1);
    const end = Math.min(props.totalPages - 1, props.currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      pagesArray.push(i);
    }
    
    if (props.currentPage < props.totalPages - 2) {
      pagesArray.push('...');
    }
    
    pagesArray.push(props.totalPages);
  }
  
  return pagesArray;
});
</script>
