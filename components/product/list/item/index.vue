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
  <NuxtLink :to="`/${categorySlug}/${subCategorySlug}/${id}`">
    <div class="space-y-4">
      <NuxtImg
        :src="img"
        :alt="name"
        width="179"
        height="240"
        class="object-contain object-bottom py-6 bg-dark-200"
      />
      <div class="px-1 space-y-2">
        <h4>
          {{ name }}
        </h4>
        <p class="text-xs sm:text-sm md:text-base text-dark-300">
          {{ description.slice(0, 40) }}...
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
