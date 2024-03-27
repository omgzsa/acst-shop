<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

defineProps({
  order: Object,
});

const emit = defineEmits(['update:modelValue', 'confirm']);
</script>

<template>
  <VueFinalModal
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    class="flex items-center justify-center"
    content-class="flex flex-col max-w-xl p-4 mx-4 space-y-2 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-700"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div v-for="(i, index) in order" :key="i.PaymentId">
      {{ i }}
    </div>
    <button
      class="px-2 mt-1 ml-auto border rounded-lg"
      @click="emit('confirm')"
    >
      Confirm
    </button>
  </VueFinalModal>
</template>
