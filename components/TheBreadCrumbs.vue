<script setup>
const {
  categoryName,
  categorySlug,
  subCategoryName,
  subCategorySlug,
  productName,
} = defineProps({
  categoryName: String,
  categorySlug: String,
  subCategoryName: String,
  subCategorySlug: String,
  productName: String,
});
</script>

<template>
  <nav aria-label="breadcrumb" class="pb-4 text-xs tracking-wide">
    <ol class="items-center hidden sm:flex gap-x-2">
      <li class="flex items-center gap-x-2">
        <NuxtLink to="/" title="Vissza a kezdőlapra"
          ><Icon class="-mb-0.5 hover:text-accent-200" name="heroicons:home"
        /></NuxtLink>
        /
      </li>
      <li class="flex items-center gap-x-2">
        <NuxtLink
          :to="`/${categorySlug}`"
          title="Vissza a főkategóriához"
          class="text-xs hover:text-accent-200"
          >{{ categoryName }}</NuxtLink
        >
      </li>
      <li class="flex items-center gap-x-2" v-if="subCategorySlug">
        /
        <NuxtLink
          :to="`/${categorySlug}/${subCategorySlug}`"
          title="Vissza az alkategóriához"
          class="text-xs hover:text-accent-200"
          >{{ subCategoryName }}</NuxtLink
        >
      </li>
      <li class="flex items-center gap-x-2" v-if="productName">
        /
        <span class="text-xs">{{ productName }}</span>
      </li>
    </ol>
  </nav>
</template>
