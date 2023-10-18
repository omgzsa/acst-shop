<script setup>
const props = defineProps({
  name: String,
  isTrue: Boolean,
});
</script>

<template>
  <li class="flex flex-col space-y-1">
    <p class="text-sm md:text-base">{{ props.name }}</p>
    <span class="text-base md:text-lg text-dark-300">
      <Icon name="mdi:close" v-if="props.isTrue" />
      <Icon name="mdi:check" v-else />
    </span>
  </li>
</template>
