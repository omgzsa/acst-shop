<script setup>
const baseUrl = useDirectusUrl();

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <div
      v-if="items.length > 0"
      class="relative grid grid-cols-2 pb-14 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
    >
      <TransitionGroup name="popup" appear>
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
      </TransitionGroup>
    </div>
    <div v-else class="h-96">
      <span class="text-xl font-bold text center"
        >Nem találtam a szűrésnek megfelelő terméket.</span
      >
    </div>
  </div>
</template>

<style>
.popup-move,
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* .popup-leave-active {
  position: absolute;
} */
</style>
