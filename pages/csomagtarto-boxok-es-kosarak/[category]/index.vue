<script setup>
const { path, params } = useRoute();
const { getItems } = useDirectusItems();

const { data } = await useAsyncData(path, () =>
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
        'kapcsolodoAlKategoria.termekAlKategoriaNev',
        'kapcsolodoAlKategoria.termekAlKategoriaLeiras',
      ],
      filter: {
        kapcsolodoAlKategoria: { slug: { _eq: params.category } },
      }, // Use the predefined filter
    },
  })
);

const pageTitle = computed(() => {
  return data?.value[0].kapcsolodoAlKategoria.termekAlKategoriaNev;
});

const pageDescription = computed(() => {
  return data?.value[0].kapcsolodoAlKategoria.termekAlKategoriaLeiras;
});

// const productQuantity = computed(() => {
//   return data.value[0].length;
// });
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="csomagtarto-boxok-es-kosarak" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> {{ pageTitle }} </template>
        <template #description>
          {{ pageDescription }}
        </template>
      </AppHeader>

      <!-- product filters section -->
      <!-- <ProductFiltersKerekpartartok :quantity="productQuantity" /> -->

      <!-- product archive -->
      <ProductList :items="data" />
    </div>
  </div>
</template>
