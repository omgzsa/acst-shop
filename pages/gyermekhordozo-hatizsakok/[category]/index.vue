<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: gyermekhordozoHatizsak } = await useAsyncData(path, () =>
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
      ],
      filter: {
        kapcsolodoKategoria: { id: { _eq: '17' } },
        // gyermekhordozoHatizsakTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  gyermekhordozoHatizsak.value
);
</script>

<template>
  <div class="bg-white">
    <!-- <CategoryNavbar category-slug="vizi-sporteszkoz-szallitok" /> -->
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        :category-name="
          gyermekhordozoHatizsak[0].kapcsolodoKategoria.termekKategoriaNev
        "
        :category-slug="gyermekhordozoHatizsak[0].kapcsolodoKategoria.slug"
        :sub-category-name="
          gyermekhordozoHatizsak[0].kapcsolodoAlKategoria.termekAlKategoriaNev
        "
        :sub-category-slug="
          gyermekhordozoHatizsak[0].kapcsolodoAlKategoria.slug
        "
      />
      <AppHeader>
        <template #title> Gyermekhordozó hátizsákok </template>
        <template #description>
          A Thule babahordozó hátizsák az ideális gyermekszállító eszköz.
          Biztonságos és kényelmes mindkettőtök számára, lehetővé teszi, hogy
          egy tökéletes napot tölts el a túrán.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersGyermekhordozoHatizsakok
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
