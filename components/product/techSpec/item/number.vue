<script setup>
const props = defineProps({
  name: String,
  value: Number,
});

// console.log(typeof props.name);
</script>

<template>
  <li class="flex flex-col space-y-1">
    <p class="text-sm md:text-base">{{ props.name }}</p>
    <span class="text-base md:text-lg text-dark-300">
      {{ props.value }}
    </span>
  </li>
</template>
