<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <li class="flex flex-col space-y-1">
    <p class="text-sm md:text-base">{{ name }}</p>
    <span class="text-base md:text-lg text-dark-300">
      <slot />
    </span>
  </li>
</template>
