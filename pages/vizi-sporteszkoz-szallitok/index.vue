<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: viziSporteszkoz } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '4' } },
        // viziSporteszkozTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  viziSporteszkoz.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="vizi-sporteszkoz-szallitok" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Vízi sporteszköz szállítók </template>
        <template #description>
          A Thule sportállványok segítségével biztonságosan és egyszerűen
          szállíthatja kajakját vagy szörfdeszkáját. Válassza ki a tökéletes
          vízisport-tartót szenvedélyének.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersViziSporteszkoz
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
