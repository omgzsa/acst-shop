<script setup>
const props = defineProps({
  quantity: Number,
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

// const emit = defineEmits(['update:model-value']);

// const clearAllFilters = () => {
//   emit('update:model-value', []);
// };
</script>

<template>
  <div
    class="relative grid grid-cols-6 py-4 border-t-2 border-b-2 border-dark-200"
  >
    <details
      class="col-span-6 overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        class="flex items-center justify-between list-none cursor-pointer"
      >
        <div
          class="flex items-center hover:font-semibold"
          :class="{
            'cursor-not-allowed opacity-50 hover:line-through': isDisabled,
          }"
        >
          <Icon name="mdi:filter-variant" size="22" class="mb-0.5 mr-2" />
          <span>Szűrés</span>
        </div>
      </summary>
      <div>
        <!-- more filters -->
      </div>
    </details>
    <span class="absolute right-0 top-4">{{ quantity }} termék</span>
  </div>
</template>
