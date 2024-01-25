<script setup>
import usePageProperties from '@/composables/usePageProperties';
const { path, params } = useRoute();
const { getItems } = useDirectusItems();

const { data: hatizsakokEsKezitaskak } = await useAsyncData(path, () =>
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
  usePageProperties(hatizsakokEsKezitaskak.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="hatizsakok-es-kezitaskak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        :category-name="
          hatizsakokEsKezitaskak[0].kapcsolodoKategoria.termekKategoriaNev
        "
        :category-slug="hatizsakokEsKezitaskak[0].kapcsolodoKategoria.slug"
        :sub-category-name="
          hatizsakokEsKezitaskak[0].kapcsolodoAlKategoria.termekAlKategoriaNev
        "
        :sub-category-slug="
          hatizsakokEsKezitaskak[0].kapcsolodoAlKategoria.slug
        "
      />
      <AppHeader>
        <template #title> {{ pageTitle }} </template>
        <template #description>
          {{ pageDescription }}
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersHatizsakokEsKezitaskak
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
