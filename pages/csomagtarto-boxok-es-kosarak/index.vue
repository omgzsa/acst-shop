<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: boxokEsKosarak } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '3' } },
        // boxokEsKosarakTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

const productQuantity = computed(() => {
  return filteredBoxokEsKosarak.value.length;
});

const filteredBoxokEsKosarak = computed(() => {
  return boxokEsKosarak.value;
});
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="csomagtarto-boxok-es-kosarak" />
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
      <ProductFiltersTetoboxokEsKosarak
        :quantity="productQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredBoxokEsKosarak" />
    </div>
  </div>
</template>
