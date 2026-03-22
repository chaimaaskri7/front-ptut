<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const isChecked = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="isChecked"
      @change="isChecked = !isChecked"
      class="sr-only"
    />
    <div class="w-10 h-6 bg-gray-300 rounded-full shadow-inner transition"
         :class="isChecked ? 'bg-[#4e55d7]' : 'bg-gray-300'"
    />
    <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition"
         :class="isChecked ? 'translate-x-4' : 'translate-x-0'"
    />
  </div>
</template>
