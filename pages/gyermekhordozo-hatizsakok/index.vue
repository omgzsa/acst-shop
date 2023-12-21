<script setup>
definePageMeta({
  middleware: 'to-child-backpack-category',
});

// const { path } = useRoute();
// const { getItems } = useDirectusItems();

// const { data: gyermekhordozoHatizsak } = await useAsyncData(path, () =>
//   getItems({
//     collection: 'termekek',
//     params: {
//       fields: [
//         'id',
//         'termekNev',
//         'termekKep',
//         'termekLeiras',
//         'kapcsolodoKategoria.slug',
//         'kapcsolodoAlKategoria.slug',
//       ],
//       filter: {
//         kapcsolodoKategoria: { id: { _eq: '5' } },
//       },
//     },
//   })
// );

// const { pageQuantity, filteredItems } = usePageProperties(
//   gyermekhordozoHatizsak.value
// );
</script>

<template>
  <div class="bg-white">
    <!-- <CategoryNavbar category-slug="vizi-sporteszkoz-szallitok" /> -->
    <!-- <div class="pt-14 space-y-14 site-padding"> -->
    <!-- <AppHeader>
        <template #title> Téli sporteszköz szállítók </template>
        <template #description>
          A Thule autós síléctartó vagy snowboard-tartó gyors, egyszerűen
          használható és biztonságos szállítást biztosít sílécéhez és
          snowboardjához. Segítünk megtalálni a tökéletes hordozót.
        </template>
      </AppHeader> -->

    <!-- product filters section -->
    <!-- <ProductFiltersGyermekhordozoHatizsakok
        :quantity="pageQuantity"
        :is-disabled="true"
      /> -->

    <!-- product archive -->
    <!-- <ProductList :items="filteredItems" /> -->
    <!-- </div> -->
  </div>
</template>
