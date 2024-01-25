<script setup>
const { path } = useRoute();
const { getItems } = useDirectusItems();

const { data: borondokEsUtazotaskak } = await useAsyncData(path, () =>
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
        kapcsolodoKategoria: { id: { _eq: '7' } },
      },
    },
  })
);

const { pageQuantity, filteredItems } = usePageProperties(
  borondokEsUtazotaskak.value
);
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="borondok-es-utazotaskak" />
    <div class="pt-14 site-padding">
      <TheBreadCrumbs
        category-name="Bőröndök és utazótáskák"
        category-slug="borondok-es-utazotaskak"
      />
      <AppHeader>
        <template #title> Bőröndök és utazótáskák </template>
        <template #description>
          Érezd az adrenalinszint emelkedését, amely egy új hely felfedezésével
          jár. Az utazótáskáink, bőröndjeink és egyéb utazótáskák felejthetetlen
          utazásokra készültek.
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersBorondokEsUtazotaskak
        :quantity="pageQuantity"
        :is-disabled="true"
      />

      <!-- product archive -->
      <ProductList :items="filteredItems" />
    </div>
  </div>
</template>
