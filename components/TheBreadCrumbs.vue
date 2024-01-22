<script setup>
const { categoryName, categorySlug, subCategoryName, subCategorySlug } =
  defineProps({
    categoryName: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
    subCategoryName: {
      type: String,
      required: false,
    },
    subCategorySlug: {
      type: String,
      required: false,
    },
    productName: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <nav aria-label="breadcrumb" class="py-4 text-xs tracking-wide">
    <ol class="items-center hidden sm:flex gap-x-2">
      <li>
        <NuxtLink to="/" title="Vissza a kezdőlapra"
          ><Icon class="mb-1 hover:text-accent-200" name="heroicons:home"
        /></NuxtLink>
      </li>
      >
      <li>
        <NuxtLink
          :to="`/${categorySlug}`"
          title="Vissza a főkategóriához"
          class="text-xs hover:text-accent-200"
          >{{ categoryName }}</NuxtLink
        >
      </li>
      >
      <li v-if="subCategorySlug">
        <NuxtLink
          :to="`/${categorySlug}/${subCategorySlug}`"
          title="Vissza az alkategóriához"
          class="text-xs hover:text-accent-200"
          >{{ subCategoryName }}</NuxtLink
        >
      </li>
      >
      <li><span class="text-xs">Thule Epos</span></li>
    </ol>
  </nav>
</template>
