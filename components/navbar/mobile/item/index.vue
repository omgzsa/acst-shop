<script setup>
const props = defineProps({
  name: String,
  categories: Array,
});

// if one of the details is open the others should close
const closeOtherDetails = (event) => {
  // console.log(event.target);
  const details = event.target.closest('details');
  const detailsList = details.parentElement.querySelectorAll('details');
  detailsList.forEach((item) => {
    if (item !== details) {
      item.removeAttribute('open');
    }
  });
};
</script>

<template>
  <details @click="closeOtherDetails">
    <summary class="flex items-center justify-between list-none cursor-pointer">
      <div
        class="text-2xl font-semibold uppercase transition-colors duration-300 cursor-pointer text-dark-100 hover:text-dark-300"
      >
        {{ props.name }}
        <!-- <Icon name="mdi:chevron-left" class="mb-1" /> -->
        <Icon name="mdi:chevron-down" class="mb-1" />
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

<style>
/* dialog[open] {
  animation: show 0.3s ease normal;
  -webkit-animation: show 0.3s ease normal;
}

@keyframes show {
  from {
    transform: translateY(-110%);
  }
  to {
    transform: translateY(0%);
  }
}

@-webkit-keyframes show {
  from {
    transform: translateY(-110%);
  }
  to {
    transform: translateY(0%);
  }
} */
</style>
