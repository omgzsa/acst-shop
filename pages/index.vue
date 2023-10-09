<script setup>
const data = ref([]);
const { getItems } = useDirectusItems();

const fetchFeaturedCategories = async () => {
  try {
    const filters = { nepszeruKategoria: { _eq: 'true' } };
    data.value = await getItems({
      collection: 'termekKategoria',
      params: {
        filter: filters,
      },
    });
    // console.log(data.value);
  } catch (error) {
    console.error(error);
  }
};

await fetchFeaturedCategories();
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
    <section class="grid items-center justify-center h-48">
      ... MORE CONTENT TO COME
    </section>
  </section>
</template>
