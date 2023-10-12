<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  name: String,
  link: String,
  subCategories: Array,
});
</script>

<template>
  <div>
    <li
      class="px-2 py-1 text-sm rounded-md hover:bg-accent-100 hover:font-bold"
      :class="defaultTransition"
    >
      <NuxtLink class="w-full font-semibold" :to="link">{{ name }}</NuxtLink>
    </li>
    <li
      v-for="sub in props.subCategories"
      :key="sub.id"
      class="px-2 py-1 text-sm rounded-md hover:bg-accent-100 hover:font-bold"
      :class="defaultTransition"
    >
      <NuxtLink class="w-full" :to="sub.link">{{ sub.name }}</NuxtLink>
    </li>
  </div>
</template>
