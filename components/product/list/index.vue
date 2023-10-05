<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <ProductListItem
      v-for="product in items"
      :key="product.id"
      :name="product.termekNev"
      :price="product.termekAr"
    />
  </div>
</template>
