<template>
  <div class="bg-white rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)] p-6 h-[120px] relative">
    <div class="flex items-start justify-between h-full">
      <div class="flex flex-col justify-between h-full">
        <p class="font-normal text-[14px] text-[#7f7f7f] whitespace-nowrap">{{ title }}</p>
        <p class="font-bold text-[32px] text-[#1b1b1b]">{{ value }}</p>
      </div>
      <div class="w-[48px] h-[48px] rounded-[10px] flex items-center justify-center" :style="{ backgroundColor: iconBg }">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
  iconBg: string;
}>();
</script>
