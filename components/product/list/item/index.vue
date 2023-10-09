<script setup>
const { defaultTransition } = useTailwindConfig();

defineProps({
  id: Number,
  name: String,
  img: String,
  description: String,
  categorySlug: String,
  subCategorySlug: String,
});
</script>

<template>
  <NuxtLink
    :to="`/${categorySlug}/${subCategorySlug}/${id}`"
    class="block overflow-hidden group"
  >
    <div class="space-y-4">
      <NuxtImg
        :src="img"
        :alt="name"
        width="179"
        height="240"
        class="object-cover object-bottom py-6 bg-dark-200 group-hover:scale-105"
        :class="defaultTransition"
      />
      <div class="px-1 space-y-2">
        <h4 class="group-hover:underline group-hover:underline-offset-4">
          {{ name }}
        </h4>
        <p class="text-sm tracking-wider md:text-base text-dark-300">
          {{ description.slice(0, 40) }}...
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
