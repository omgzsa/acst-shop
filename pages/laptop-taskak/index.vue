<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: laptopTaskak } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '8' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(laptopTaskak.value);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="laptop-taskak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Laptop táskák"
        category-slug="laptop-taskak"
      />
      <AppHeader>
        <template #title> Laptop táskák </template>
        <template #description>
          Legyen szó hátizsákról, aktatáskáról vagy tokról, laptop táska
          kínálatunk megvédi a laptopodat és az mindennapi élet kihívásainak
          ütéseit és karcolásait is kibírja.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersLaptopTaskak
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
