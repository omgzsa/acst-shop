<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: gyermekKerekparulesek } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '16' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  gyermekKerekparulesek.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="gyermek-kerekparulesek" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Gyermek kerékpárülések </template>
        <template #description>
          A Thule gyermekbicikli ülés lehetővé teszi, hogy te és gyermeked
          élvezzétek a közösen töltött időt - az út szabadságával. Nézze meg
          kínálatunkat a biztonságos és könnyen használható gyermek- és
          bababicikli üléseink között.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersGyermekKerekparulesek
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
