<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: teliSporteszkoz } = await useAsyncData(path, () =>
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
      ],
      filter: {
        kapcsolodoKategoria: { id: { _eq: '5' } },
        // teliSporteszkozTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  teliSporteszkoz.value
);
</script>

<template>
  <div class="bg-white">
    <!-- <CategoryNavbar category-slug="vizi-sporteszkoz-szallitok" /> -->
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        :category-name="
          teliSporteszkoz[0].kapcsolodoKategoria.termekKategoriaNev
        "
        :category-slug="teliSporteszkoz[0].kapcsolodoKategoria.slug"
        :sub-category-name="
          teliSporteszkoz[0].kapcsolodoAlKategoria.termekAlKategoriaNev
        "
        :sub-category-slug="teliSporteszkoz[0].kapcsolodoAlKategoria.slug"
      />
      <AppHeader>
        <template #title> Téli sporteszköz szállítók </template>
        <template #description>
          A Thule autós síléctartó vagy snowboard-tartó gyors, egyszerűen
          használható és biztonságos szállítást biztosít sílécéhez és
          snowboardjához. Segítünk megtalálni a tökéletes hordozót.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersTeliSporteszkoz
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
