<script setup>
const route = useRoute();

defineProps({
  userNav: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <li v-for="nav in userNav" :key="nav">
    <NuxtLink
      :to="`/profil/${nav.key}`"
      class="block text-sm md:text-base xl:text-lg hover:text-dark-100 hover:font-semibold"
      :class="{ 'text-dark-100 font-semibold': route.path === nav.path }"
      >{{ nav.name }}</NuxtLink
    >
  </li>
</template>

<style></style>
