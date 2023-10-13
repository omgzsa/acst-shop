<script setup>
const props = defineProps({
  item: Object,
  isVisible: Boolean,
});
</script>

<template>
  <li class="cursor-pointer group">
    <span> {{ props.item.name }} </span>
    <div class="absolute w-44">&nbsp;</div>
    <Transition name="fade">
      <div
        v-show="isVisible"
        class="absolute left-0 hidden w-full px-6 py-4 overflow-hidden bg-white border rounded-lg shadow-sm top-12 menu-sub group-hover:block"
      >
        <ul class="grid grid-cols-4 gap-x-6 gap-y-8 space-y-0.5">
          <NavbarDesktopItemSub
            v-for="cat in props.item.categories"
            :key="cat.id"
            :name="cat.name"
            :link="cat.link"
            :sub-categories="cat.subCategories"
          />
        </ul>
      </div>
    </Transition>
  </li>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
