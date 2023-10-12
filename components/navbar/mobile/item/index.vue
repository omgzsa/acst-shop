<script setup>
const props = defineProps({
  name: String,
  categories: Array,
});

// console.log(props.categories);
</script>

<template>
  <details>
    <summary class="flex items-center justify-between list-none cursor-pointer">
      <div
        class="text-2xl font-semibold transition-colors duration-300 cursor-pointer text-dark-100 hover:text-dark-300"
      >
        {{ props.name }}
        <Icon name="mdi:chevron-down" />
      </div>
    </summary>

    <div class="grid py-4 gap-y-6">
      <NavbarMobileItemSub
        v-for="category in props.categories"
        :key="category.id"
        :name="category.name"
        :link="category.link"
        :sub-categories="category.subCategories"
      />
    </div>
  </details>
</template>
