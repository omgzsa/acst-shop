<script setup>
const props = defineProps({
  navItems: Array,
});

const isVisible = ref(false);

const menuHover = () => {
  isVisible.value = true;
};

const menuLeave = () => {
  isVisible.value = false;
};
</script>

<template>
  <ul class="relative hidden space-x-6 font-medium menu-main lg:flex">
    <NavbarDesktopItem
      v-for="category in navItems"
      :key="category.id"
      :item="category"
      :is-visible="isVisible"
      @mouseover="menuHover"
      @mouseleave="menuLeave"
    />
  </ul>
</template>
