<script setup>
defineProps({
  name: String,
  value: [String, Number, Boolean],
  measure: String,
  isTrue: Boolean,
  type: String,
});
</script>

<template>
  <div>
    <!-- STRING -->
    <li
      class="flex flex-col space-y-1"
      v-if="type === 'string' && value != null"
    >
      <p class="text-sm md:text-base">{{ name }}</p>
      <span class="text-base md:text-lg text-dark-300">
        {{ value }}
      </span>
    </li>
    <!-- NUMBER -->
    <li
      class="flex flex-col space-y-1"
      v-if="type === 'number' && value != null"
    >
      <p class="text-sm md:text-base">{{ name }}</p>
      <span class="text-base md:text-lg text-dark-300">
        {{ value }} {{ measure }}
      </span>
    </li>
    <!-- BOOLEAN -->
    <li
      class="flex flex-col space-y-1"
      v-if="type === 'boolean' && isTrue != null"
    >
      <p class="text-sm md:text-base">{{ name }}</p>
      <span class="text-base md:text-lg text-dark-300">
        <Icon name="mdi:close" v-if="isTrue" />
        <Icon name="mdi:check" v-else />
      </span>
    </li>
  </div>
</template>

<style></style>
