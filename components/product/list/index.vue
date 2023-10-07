<script setup>
const config = useRuntimeConfig();

const baseUrl = config.public.directusUrl;

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid grid-cols-2 pb-14 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4"
  >
    <ProductListItem
      v-for="product in items"
      :key="product.id"
      :id="product.id"
      :name="product.termekNev"
      :price="product.termekAr"
      :description="product.termekLeiras"
      :category-slug="product.kapcsolodoKategoria.slug"
      :sub-category-slug="product.kapcsolodoAlKategoria.slug"
      :img="`${baseUrl}/assets/${product.termekKep}`"
    />
  </div>
</template>
