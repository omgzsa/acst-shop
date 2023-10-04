<script setup>
const { getItems } = useDirectusItems();

const { data } = await useAsyncData('id', () =>
  getItems({
    collection: 'termekek',
    fields: ['id', 'termekNev', 'termekAr'],
    // params: {
    //   filter: { kapcsolodoKategoria: { _eq: '1' } },
    // },
  })
);

console.log(data.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Kerékpártartók </template>
        <template #description>
          Ezeknél a tartóknál mindenképpen ajánlott a Thule 976 világítás és
          rendszámtábla tartó használata, különben a kerékpártartó nem felel meg
          a jelenlegi KRESZ előírásoknak!
        </template>
      </AppHeader>
      <div>
        <!-- <div v-for="item in data" :key="item.id">
          <h3>{{ item.termekNev }}</h3>
          <p>{{ item.termekAr }}</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
