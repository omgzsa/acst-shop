<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: viziSporteszkoz } = await useAsyncData(path, () =>
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
      filter: {
        kapcsolodoKategoria: { id: { _eq: '4' } },
        // viziSporteszkozTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

// const productQuantity = computed(() => {
//   return filteredviziSporteszkoz.value.length;
// });

// const filteredviziSporteszkoz = computed(() => {
//   return viziSporteszkoz.value;
// });

const { pageQuantity, filteredItems } = usePageProperties(
  viziSporteszkoz.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="vizi-sporteszkoz-szallitok" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Csomagtartó boxok és kosarak </template>
        <template #description>
          Rakományszállítóink és rakománydobozaink nagyszerűek, ha extra helyre
          van szüksége. Böngésszen az alábbiakban, hogy megtalálja a tökéletes
          tetőtéri csomagtartót, kosarat, táskát vagy hátsó csomagtartót.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <!-- <ProductFiltersViziSporteszkoz
        :quantity="pageQuantity"
        :is-disabled="true"
      /> -->

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
