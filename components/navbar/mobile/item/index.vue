<script setup>
const props = defineProps({
  name: String,
  categories: Array,
});

const detailsRef = ref(null);
const isOpen = ref(true);

// doesn't work well, something with open state management
const toggleDetails = () => {
  const details = detailsRef.value;
  const detailsList = details.parentElement.children;

  for (let i = 0; i < detailsList.length; i++) {
    const item = detailsList[i];
    if (item.open && item !== details) {
      item.removeAttribute('open');
    }
  }
};

// console.log();
</script>

<template>
  <details @click="toggleDetails" ref="detailsRef">
    <summary class="flex items-center justify-between list-none cursor-pointer">
      <div
        class="text-2xl font-semibold uppercase transition-colors duration-300 cursor-pointer text-dark-100 hover:text-dark-300"
      >
        {{ props.name }}
        <Icon v-if="!isOpen" name="mdi:chevron-down" class="mb-1" />
        <Icon v-else name="mdi:chevron-left" class="mb-1" />
      </div>
    </summary>

    <Transition name="fade" mode="out-in">
      <div
        class="grid py-4 transition-all duration-300 rounded opacity-0 gap-y-6 bg-dark-200"
        :class="{ 'opacity-100 pointer-events-auto': isOpen }"
      >
        <NavbarMobileItemSub
          v-for="category in props.categories"
          :key="category.id"
          :name="category.name"
          :link="category.link"
          :sub-categories="category.subCategories"
        />
      </div>
    </Transition>
  </details>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
