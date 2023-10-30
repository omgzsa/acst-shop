<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  name: String,
  link: String,
  subCategories: Array,
});
</script>

<template>
  <ul>
    <li class="tracking-wider rounded-md hover:font-semibold">
      <NuxtLink
        class="block px-4 py-2 text-sm font-bold text-gray-600 rounded-md hover:bg-accent-100/70 hover:text-dark-100"
        :to="link"
        :class="defaultTransition"
        >{{ name }}</NuxtLink
      >
    </li>
    <li
      class="tracking-wider rounded-md hover:font-medium"
      v-for="sub in props.subCategories"
      :key="sub.id"
    >
      <NuxtLink
        class="block px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-accent-100/70 hover:text-dark-100"
        :to="sub.link"
        :class="defaultTransition"
        >{{ sub.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
