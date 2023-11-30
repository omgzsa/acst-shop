<script setup>
const { getItems } = useDirectusItems();

// local state for filter by bike number
const bikeFilters = ref([]);
// local state for filter by eBike compatibility
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
    return data.value;
  }

  return data.value.filter((product) => {
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

const availableNumberOfBikes = computed(() => {
  const bikeNumbers = data.value.map(
    (product) => product.kerekpartartoTechSpec[0].szallithato_kerekparok
  );

  return [...new Set(bikeNumbers.filter((value) => value !== null))];
});
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
        :available-bike-numbers="availableNumberOfBikes"
        v-model:model-value="bikeFilters"
        v-model:e-bike-filter="eBikeCompatible"
      />

      <!-- product archive -->
      <ProductList :items="filteredProducts" />
    </div>
  </div>
</template>
