<script setup>
import { useProductStore } from '@/stores/products';
const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <section class="grid bg-white gap-y-32">
    <HomeHero title="Maximális kényelem a szabadban" />
    <section>
      <HomeCategories />
    </section>
    <section>
      <HomeCta title="Emeld a következő szintre szabadtéri élményeid" />
    </section>
    <section>
      <h2 class="site-padding">Népszerű termékek</h2>
      <div class="bg-gray-400 h-80"></div>
    </section>
    <section>
      <HomeFeatured />
    </section>
    <section class="grid">
      ... MORE CONTENT TO COME

      <!-- <div v-for="item in productStore.products" :key="item.id">
        {{ item }}
      </div> -->
    </section>
  </section>
</template>
