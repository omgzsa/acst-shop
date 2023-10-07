<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  img: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: false,
  },
  categorySlug: {
    type: String,
  },
  subCategorySlug: {
    type: String,
    // required: false,
  },
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
        <h4>{{ name }}</h4>
        <p class="text-sm text-dark-300">{{ description.slice(0, 40) }}...</p>
      </div>
    </div>
  </NuxtLink>
</template>
