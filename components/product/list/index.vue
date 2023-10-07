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
    class="grid grid-cols-2 pb-14 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
  >
    <ProductListItem
      v-for="product in items"
      :key="product.id"
      :id="product.id"
      :name="product.termekNev"
      :description="product.termekLeiras"
      :img="`${baseUrl}/assets/${product.termekKep}`"
      :category-slug="product.kapcsolodoKategoria.slug"
      :sub-category-slug="product.kapcsolodoAlKategoria.slug"
    />
  </div>
</template>
