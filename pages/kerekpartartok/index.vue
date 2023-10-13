<script setup>
const { getItems } = useDirectusItems();

const {
  data: termekekKerekpartartok,
  pending,
  error,
} = await useAsyncData('termekek', () =>
  getItems({
    collection: 'termekek',
    params: {
      fields: [
        'id',
        'termekNev',
        'termekKep',
        'termekLeiras',
        'kapcsolodoKategoria.slug',
        'kapcsolodoAlKategoria.slug',
      ],
      filter: { kapcsolodoKategoria: { id: { _eq: '1' } } },
    },
  })
);

const productQuantity = computed(() => {
  return termekekKerekpartartok.value.length;
});
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
      <ProductFilters :quantity="productQuantity" />

      <!-- product archive -->
      <ProductList :items="termekekKerekpartartok" />
    </div>
  </div>
</template>
