<script setup>
import usePageProperties from '@/composables/usePageProperties';
const { path, params } = useRoute();
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
        'kapcsolodoKategoria.termekKategoriaNev',
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
  usePageProperties(tetosatrak.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="tetosatrak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        :category-name="tetosatrak[0].kapcsolodoKategoria.termekKategoriaNev"
        :category-slug="tetosatrak[0].kapcsolodoKategoria.slug"
        :sub-category-name="
          tetosatrak[0].kapcsolodoAlKategoria.termekAlKategoriaNev
        "
        :sub-category-slug="tetosatrak[0].kapcsolodoAlKategoria.slug"
      />
      <AppHeader>
        <template #title> {{ pageTitle }} </template>
        <template #description>
          {{ pageDescription }}
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersTetosatrak :quantity="pageQuantity" :is-disabled="true" />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
