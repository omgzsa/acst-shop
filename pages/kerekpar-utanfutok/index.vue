<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: kerekparUtanfutok } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '15' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  kerekparUtanfutok.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="kerekpar-utanfutok" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Kerékpár utánfutók"
        category-slug="kerekpar-utanfutok"
      />
      <AppHeader>
        <template #title> Kerékpár utánfutók </template>
        <template #description>
          A Thule kerékpáros utánfutó ideális választás az aktív családok
          számára. Találj kerékpáros utánfutót, amely lehetővé teszi a hétvégi
          kalandokat vagy a mindennapi ingázást gyerekekkel, kutyával vagy
          rakománnyal.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersKerekparUtanfutok
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
