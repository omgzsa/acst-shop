<script setup>
const { getItems } = useDirectusItems();

const { data: termekekKerekpartartok } = await useAsyncData('termekek', () =>
  getItems({
    collection: 'termekek',
    fields: [
      'id',
      'termekNev',
      'termekAr',
      'termekKategoria.termekKategoria_id',
    ],
    params: {
      filter: { termekKategoria: { termekKategoria_id: { _eq: '1' } } },
    },
  })
);

// console.log(data.value);
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

      <!-- product filters section -->
      <ProductFilters />

      <!-- product archive -->
      <ProductList :items="termekekKerekpartartok" />
    </div>
  </div>
</template>
