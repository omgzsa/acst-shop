<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: iratEsEszkozrendezoTaskak } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '11' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  iratEsEszkozrendezoTaskak.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="irat-es-eszkozrendezo-taskak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Irat és eszközrendező táskák"
        category-slug="irat-es-eszkozrendezo-taskak"
      />
      <AppHeader>
        <template #title> Irat és eszközrendező táskák </template>
        <template #description>
          Nem számít, milyen messzire utazol, azt szeretnéd, hogy a holmijaid és
          személyes higiéniai cikkeid rendben és rendezetten legyenek.
          Szerencsére az utazótáskáink rendezői pont ebben segítenek.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersIratEsEszkozrendezoTaskak
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
