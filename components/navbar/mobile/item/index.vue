<script setup>
const props = defineProps({
  name: String,
  categories: Array,
});
</script>

<template>
  <details
    class="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between list-none cursor-pointer">
      <div
        class="text-2xl font-semibold uppercase transition-colors duration-300 cursor-pointer text-dark-100 hover:text-dark-300"
      >
        {{ props.name }}
        <Icon name="mdi:chevron-down" class="" />
      </div>
    </summary>

    <!-- <Transition name="fade" mode="out-in"> -->
    <div
      class="grid py-4 rounded-md sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-x-6 md:gap-x-3"
    >
      <NavbarMobileItemSub
        v-for="category in props.categories"
        :key="category.id"
        :name="category.name"
        :link="category.link"
        :sub-categories="category.subCategories"
      />
    </div>
    <!-- </Transition> -->
  </details>
</template>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
} */
</style>
