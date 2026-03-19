<template>
  <div 
    class="bg-white min-w-[240px] relative cursor-pointer transition-colors"
    :class="{ 'bg-[#ebebeb]': hover }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="toggleCheck"
  >
    <div class="flex items-center min-w-inherit px-[16px] py-[12px] gap-[5px]">
      <!-- Checkbox Icon -->
      <div class="w-[19.429px] h-[20px] relative">
        <svg class="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4286 20">
          <g>
            <rect 
              height="18" 
              width="17.4286" 
              x="1" 
              y="1" 
              stroke="black" 
              stroke-width="2"
              :fill="checked ? 'black' : 'none'"
            />
            <path 
              v-if="checked"
              d="M4.71429 10L8.57143 13.8571L14.2857 6.14286" 
              stroke="white" 
              stroke-width="2" 
            />
          </g>
        </svg>
      </div>
      
      <!-- Label -->
      <p class="font-bold text-[12px] text-black whitespace-nowrap" style="font-family: 'Inter', sans-serif;">
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string;
  modelValue?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const hover = ref(false);
const checked = ref(props.modelValue || false);

const toggleCheck = () => {
  checked.value = !checked.value;
  emit('update:modelValue', checked.value);
};
</script>
