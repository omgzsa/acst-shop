<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: kerekparosEsSporttaskak } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '10' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  kerekparosEsSporttaskak.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="kerekparos-es-sporttaskak" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Hátizsákok és kézitáskák </template>
        <template #description>
          Hátizsákjaink és napi táskáink okos tároló rekeszekkel rendelkeznek,
          valamint különböző modellek és színek állnak rendelkezésedre, hogy
          illeszkedjenek mindennapi stílusodhoz.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersKerekparosEsSporttaskak
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
