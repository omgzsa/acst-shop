<script setup>
const availableBikeFilter = computed(() => {
  return [2, 3, 4];
});

const props = defineProps({
  quantity: Number,
  modelValue: Array,
});

const emit = defineEmits(['update:modelValue']);

const filterByBikeNumber = (event) => {
  const { value } = event.target;

  if (event.target.checked) {
    emit('update:modelValue', [...props.modelValue, Number(value)]);
  } else {
    emit(
      'update:modelValue',
      props.modelValue.filter((item) => item !== Number(value))
    );
  }
};
</script>

<template>
  <div
    class="relative grid grid-cols-6 py-3 border-t-2 border-b-2 border-dark-200"
  >
    <details class="col-span-6">
      <summary
        class="flex items-center justify-between list-none cursor-pointer"
      >
        <div class="flex items-center hover:font-semibold">
          <Icon name="mdi:filter-variant" size="22" class="mb-0.5 mr-2" />
          <span>Szűrés</span>
        </div>
      </summary>
      <details
        class="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden group"
      >
        <summary
          class="flex items-center justify-between gap-2 pt-4 text-gray-900 transition bg-white cursor-pointer"
        >
          <span class="group-hover:font-bold group-hover:text-dark-100">
            Szállítható kerékpárok
          </span>

          <span class="transition group-open:-rotate-180">
            <Icon name="mdi:chevron-down" class="mb-1" size="18" />
          </span>
        </summary>
        <div class="py-2 space-y-1">
          <label
            v-for="option in availableBikeFilter"
            :key="option"
            class="flex items-center gap-x-2"
            for="filterMaxBikeNumber"
          >
            <input
              id="filterMaxBikeNumber"
              type="checkbox"
              :value="option"
              @change="filterByBikeNumber"
            />
            <p>{{ option }}</p>
          </label>
        </div>
      </details>
    </details>
    <span class="absolute right-0 top-3">{{ quantity }} termék</span>
  </div>
</template>
