<script setup>
const { getItems } = useDirectusItems();

const kerekpartartok = ref([]);
const bikeFilters = ref([]);
const eBikeCompatible = ref(null);

const filter = {
  kapcsolodoKategoria: { id: { _eq: '1' } },
};

if (bikeFilters.value.length > 0) {
  filter.kerekpartartoTechSpec = {
    szallithato_kerekparok: { _in: bikeFilters.value },
  };
}

if (eBikeCompatible.value) {
  filter.kerekpartartoTechSpec = {
    eBike_kompatibilis: { _eq: eBikeCompatible.value },
  };
}

const { data } = await useAsyncData('termekek', () =>
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
        'kerekpartartoTechSpec.szallithato_kerekparok',
        'kerekpartartoTechSpec.eBike_kompatibilis',
      ],
      filter, // Use the predefined filter
    },
  })
);

const filteredProducts = computed(() => {
  if (bikeFilters.value.length === 0 && eBikeCompatible.value === null) {
    // No filters applied, return all products
    return kerekpartartok.value;
  }

  return kerekpartartok.value.filter((product) => {
    // Filter based on bikeFilters
    const bikeFilterMatch =
      bikeFilters.value.length === 0 ||
      bikeFilters.value.includes(
        product.kerekpartartoTechSpec[0].szallithato_kerekparok
      );

    // Filter based on eBikeCompatible
    const eBikeCompatibleMatch =
      eBikeCompatible.value === null ||
      product.kerekpartartoTechSpec[0].eBike_kompatibilis ===
        eBikeCompatible.value;

    // Return products that match both filters
    return bikeFilterMatch && eBikeCompatibleMatch;
  });
});

const productQuantity = computed(() => {
  return filteredProducts.value.length;
});

kerekpartartok.value = data.value;
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> Kerékpártartók </template>
        <template #description>
          Ezeknél a tartóknál mindenképpen ajánlott a Thule 976 világítás és
          rendszámtábla tartó használata, különben a kerékpártartó nem felel meg
          a jelenlegi KRESZ előírásoknak!
        </template>
      </AppHeader>

      <!-- product filters section -->
      <ProductFiltersKerekpartartok
        :quantity="productQuantity"
        v-model:model-value="bikeFilters"
        v-model:e-bike-filter="eBikeCompatible"
      />

      <!-- product archive -->
      <ProductList :items="filteredProducts" />
    </div>
  </div>
</template>
