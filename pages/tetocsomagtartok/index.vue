<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: tetocsomagtartok } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '2' } },
        // tetocsomagtartoTechSpec: {
        //   one_key_system_kompatibilis: { _eq: true },
        // },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  tetocsomagtartok.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="tetocsomagtartok" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Tetőcsomagtartók"
        category-slug="tetocsomagtartok"
      />
      <AppHeader>
        <template #title> Tetőcsomagtartók </template>
        <template #description>
          Bármit is kell szállítania &mdash; minden a tetőcsomagtartóval
          kezdődik. A Thule autós tetőcsomagtartók aerodinamikusak és könnyen
          felszerelhetők minden típusú járműre.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersTetocsomagtartok
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
