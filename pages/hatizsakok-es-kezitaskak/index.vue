<script setup>
const { path } = useRoute();
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
        'kapcsolodoAlKategoria.slug',
      ],
      filter: {
        kapcsolodoKategoria: { id: { _eq: '9' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  hatizsakokEsKezitaskak.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="hatizsakok-es-kezitaskak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Hátizsákok és kézitáskák"
        category-slug="hatizsakok-es-kezitaskak"
      />
      <AppHeader>
        <template #title> Hátizsákok és kézitáskák </template>
        <template #description>
          Hátizsákjaink és napi táskáink okos tároló rekeszekkel rendelkeznek,
          valamint különböző modellek és színek állnak rendelkezésedre, hogy
          illeszkedjenek mindennapi stílusodhoz.
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
