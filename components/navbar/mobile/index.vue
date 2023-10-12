<script setup>
const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

// console.log(props.navItems);
</script>

<template>
  <div class="grid gap-y-4">
    <NavbarMobileItem
      v-for="category in navItems"
      :key="category.id"
      :name="category.name"
      :categories="category.categories"
    />
  </div>
</template>
