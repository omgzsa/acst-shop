<script setup>
const { path, params } = useRoute();
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
        'kapcsolodoKategoria.termekKategoriaNev',
        'kapcsolodoKategoria.slug',
        'kapcsolodoAlKategoria.termekAlKategoriaNev',
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

const { pageTitle, pageDescription, pageQuantity, filteredItems } =
  usePageProperties(boxokEsKosarak.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="csomagtarto-boxok-es-kosarak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        :category-name="
          boxokEsKosarak[0].kapcsolodoKategoria.termekKategoriaNev
        "
        :category-slug="boxokEsKosarak[0].kapcsolodoKategoria.slug"
        :sub-category-name="
          boxokEsKosarak[0].kapcsolodoAlKategoria.termekAlKategoriaNev
        "
        :sub-category-slug="boxokEsKosarak[0].kapcsolodoAlKategoria.slug"
      />
      <AppHeader>
        <template #title> {{ pageTitle }} </template>
        <template #description>
          {{ pageDescription }}
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersTetoboxokEsKosarak
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
