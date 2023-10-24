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
    <li class="rounded-md hover:font-semibold">
      <NuxtLink
        class="block px-4 py-2 text-sm font-bold text-gray-600 rounded-md hover:bg-accent-100/50 hover:text-dark-100"
        :to="link"
        :class="defaultTransition"
        >{{ name }}</NuxtLink
      >
    </li>
    <li
      class="rounded-md hover:font-semibold"
      v-for="sub in props.subCategories"
      :key="sub.id"
    >
      <NuxtLink
        class="block px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-accent-100/50 hover:text-dark-100"
        :to="sub.link"
        :class="defaultTransition"
        >{{ sub.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
