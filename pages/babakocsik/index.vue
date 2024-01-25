<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: babakocsik } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '14' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(babakocsik.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="babakocsik" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs category-name="Babakocsik" category-slug="babakocsik" />
      <AppHeader>
        <template #title> Babakocsik </template>
        <template #description>
          A Thule babakocsik ideálisak arra, hogy aktív életedet biztonságosan
          és kényelmesen megoszd gyerekeiddel. Itt találhatod meg a tökéletes
          babakocsit vagy hordozót.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersBabakocsik :quantity="pageQuantity" :is-disabled="true" />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
