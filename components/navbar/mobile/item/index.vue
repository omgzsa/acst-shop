<script setup>
const props = defineProps({
  name: String,
  categories: Array,
});

const detailsRef = ref(null);
const isOpen = ref(null);

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
        <Icon v-if="isOpen" name="mdi:chevron-left" class="mb-1" />
      </div>
    </summary>

    <!-- <Transition name="fade" mode="out-in"> -->
    <div class="grid py-4 rounded gap-y-6 bg-dark-200">
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

<style></style>
