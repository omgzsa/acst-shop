<script setup>
const { path, params } = useRoute();
const { getItems } = useDirectusItems();

const { data, pending, error } = await useAsyncData('termekek', () =>
  getItems({
    collection: 'termekek',
    params: {
      fields: [
        'id',
        'termekNev',
        'termekKep',
        'termekLeiras',
        'kapcsolodoKategoria.slug',
        'kapcsolodoAlKategoria.termekAlKategoriaNev',
        'kapcsolodoAlKategoria.slug',
        'kapcsolodoAlKategoria.termekAlKategoriaLeiras',
      ],
      filter: {
        kapcsolodoAlKategoria: {
          slug: { _eq: params.category },
        },
      },
    },
  })
);

const pageTitle = computed(() => {
  return data.value[0].kapcsolodoAlKategoria.termekAlKategoriaNev;
});

const pageDescription = computed(() => {
  return data.value[0].kapcsolodoAlKategoria.termekAlKategoriaLeiras;
});

const productQuantity = computed(() => {
  return data.value.length;
});

// console.log(data.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> {{ pageTitle }} </template>
        <template #description>
          {{ pageDescription }}
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFilters :quantity="productQuantity" />

      <!-- product archive -->
      <ProductList :items="data" />
    </div>
  </div>
</template>
