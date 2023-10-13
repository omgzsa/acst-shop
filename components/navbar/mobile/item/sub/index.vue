<script setup>
const props = defineProps({
  name: String,
  link: String,
  subCategories: Object,
});

// console.log(props.subCategories);
</script>

<template>
  <div class="grid gap-y-2">
    <span
      ><NuxtLink
        :to="`${props.link}`"
        class="px-2 py-1 text-base font-semibold leading-snug tracking-wide transition-colors duration-300 rounded xl:text-lg hover:text-dark-100 hover:bg-accent-100 hover:font-bold"
        >{{ props.name }}</NuxtLink
      ></span
    >
    <ul class="grid gap-y-2">
      <li
        v-for="sub in props.subCategories"
        :key="sub.id"
        class="text-sm rounded-md hover:font-bold"
      >
        <NuxtLink
          :to="`${sub.link}`"
          class="px-2 py-1 transition-colors duration-300 rounded hover:text-dark-100 hover:bg-accent-100 hover:font-semibold"
        >
          {{ sub.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
