<script setup>
const props = defineProps({
  name: String,
  link: String,
  subCategories: Object,
});

// console.log(props.subCategories);
</script>
<template>
  <div class="flex flex-col gap-y-1">
    <span
      ><NuxtLink
        :to="`${props.link}`"
        class="block px-2 py-1 text-base font-bold rounded-md hover:bg-accent-100/70 text-dark-100"
        >{{ props.name }}</NuxtLink
      ></span
    >
    <ul class="flex flex-col gap-y-1">
      <li
        v-for="sub in props.subCategories"
        :key="sub.id"
        class="text-base font-normal rounded-md"
      >
        <NuxtLink
          :to="`${sub.link}`"
          class="block px-2 py-1 text-base rounded-md hover:bg-accent-100/70 text-dark-100"
        >
          {{ sub.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
