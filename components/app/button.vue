<script setup>
const { defaultTransition } = useTailwindConfig();

defineProps({
  label: String,
  to: String,
});
</script>

<template>
  <button
    class="px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md border-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
    :class="defaultTransition"
  >
    <NuxtLink :to="to">
      <span class="text-base leading-snug tracking-wide xl:text-lg">
        {{ label }}
      </span></NuxtLink
    >
  </button>
</template>
