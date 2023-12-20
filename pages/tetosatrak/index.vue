<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: tetosatrak } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '12' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(tetosatrak.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="tetosatrak" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Tetősátrak </template>
        <template #description>
          Elindulsz terepen vagy felfedezed az új látnivalókat a családdal? Ezek
          a puha vagy kemény héjú autós sátrak megváltoztatják a kempingezésről
          alkotott elképzelésedet.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersTetosatrak :quantity="pageQuantity" :is-disabled="true" />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
