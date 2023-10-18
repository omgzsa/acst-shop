<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  name: String,
  link: String,
  subCategories: Array,
});
</script>

<template>
  <ul class="space-y-1.5">
    <li>
      <NuxtLink
        class="w-full px-2 py-1 text-sm font-semibold rounded-md hover:bg-accent-100 hover:font-bold"
        :to="link"
        :class="defaultTransition"
        >{{ name }}</NuxtLink
      >
    </li>
    <li v-for="sub in props.subCategories" :key="sub.id">
      <NuxtLink
        class="px-2 py-1 text-sm rounded-md hover:bg-accent-100 hover:font-bold"
        :to="sub.link"
        :class="defaultTransition"
        >{{ sub.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
