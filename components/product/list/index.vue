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
    class="relative grid grid-cols-2 pb-14 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
  >
    <!-- <TransitionGroup name="popup" appear> -->
    <ProductListItem
      v-for="product in items"
      :key="product.id"
      :id="product.id"
      :name="product.termekNev"
      :description="product.termekLeiras"
      :img="`${baseUrl}/assets/${product.termekKep}`"
      :category-slug="product?.kapcsolodoKategoria?.slug"
      :sub-category-slug="product?.kapcsolodoAlKategoria?.slug"
    />
    <!-- </TransitionGroup> -->
  </div>
</template>

<style>
/* .popup-move,
.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s ease;
} */

/* .popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(-50px);
} */

/* .popup-leave-active {
  position: absolute;
} */
</style>
