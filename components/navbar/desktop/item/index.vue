<script setup>
const props = defineProps({
  item: Object,
  isVisible: Boolean,
});
</script>

<template>
  <li class="group">
    <span class="cursor-pointer"> {{ props.item.name }} </span>
    <div class="absolute w-52">&nbsp;</div>
    <Transition name="fade">
      <div
        v-show="isVisible"
        class="absolute left-0 z-50 hidden w-full p-6 overflow-hidden bg-white border rounded-md shadow-md top-12 group-hover:block"
      >
        <div
          class="grid grid-cols-3 xl:grid-flow-col xl:auto-cols-fr gap-x-4 gap-y-8"
        >
          <NavbarDesktopItemSub
            v-for="cat in props.item.categories"
            :key="cat.id"
            :name="cat.name"
            :link="cat.link"
            :sub-categories="cat.subCategories"
          />
        </div>
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
