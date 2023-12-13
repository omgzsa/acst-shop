<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: tetocsomagtartok } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '2' } },
        // tetocsomagtartoTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

const productQuantity = computed(() => {
  return filteredTetocsomagtartok.value.length;
});

// const availableNumberOfBikes = computed(() => {
//   const bikeNumbers = data.value.map(
//     (product) => product.kerekpartartoTechSpec[0].szallithato_kerekparok
//   );

//   return [...new Set(bikeNumbers.filter((value) => value !== null))];
// });
const filteredTetocsomagtartok = computed(() => {
  return tetocsomagtartok.value;
});
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="tetocsomagtartok" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Tetőcsomagtartók </template>
        <template #description>
          Bármit is kell szállítania &mdash; minden a tetőcsomagtartóval
          kezdődik. A Thule autós tetőcsomagtartók aerodinamikusak és könnyen
          felszerelhetők minden típusú járműre.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersTetocsomagtartok
        :quantity="productQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredTetocsomagtartok" />
    </div>
  </div>
</template>
