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
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Kerékpáros és sporttáskák"
        category-slug="kerekparos-es-sporttaskak"
      />
      <AppHeader>
        <template #title> Kerékpáros és sporttáskák </template>
        <template #description>
          Kerékpár-, sí- és snowboard táskáink segítenek átszelni a világot
          minden sportszerrel. Miután megérkeztél a célállomásodra, könnyű
          magaddal vinni az összes szükséges felszerelést.
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
