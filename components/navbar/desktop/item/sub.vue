<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  name: String,
  link: String,
  subCategories: Array,
});
</script>

<template>
  <ul class="space-y-1">
    <li class="mb-4 tracking-wider rounded-md">
      <NuxtLink
        class="block px-3 py-1.5 text-base font-bold text-gray-800 rounded-md hover:bg-accent-100/70 hover:text-dark-100"
        :to="link"
        :class="defaultTransition"
        >{{ name }}</NuxtLink
      >
    </li>

    <li
      class="tracking-wider rounded"
      v-for="sub in props.subCategories"
      :key="sub.id"
    >
      <NuxtLink
        class="block px-3 py-1.5 text-base font-normal rounded-md hover:bg-accent-100/70 text-gray-700 hover:text-dark-100"
        :to="sub.link"
        :class="defaultTransition"
        >{{ sub.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
