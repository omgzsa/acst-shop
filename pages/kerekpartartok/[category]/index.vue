<script setup>
const { path, params } = useRoute();
const { getItems } = useDirectusItems();

const kerekpartartok = ref([]);
const bikeFilters = ref([]);
const eBikeCompatible = ref(null);

const filter = {
  kapcsolodoAlKategoria: { slug: { _eq: params.category } },
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

const { data } = await useAsyncData(path, () =>
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
        'kapcsolodoAlKategoria.termekAlKategoriaNev',
        'kapcsolodoAlKategoria.termekAlKategoriaLeiras',
        'kerekpartartoTechSpec.szallithato_kerekparok',
        'kerekpartartoTechSpec.eBike_kompatibilis',
      ],
      filter, // Use the predefined filter
    },
  })
);

const pageTitle = computed(() => {
  return data?.value[0].kapcsolodoAlKategoria.termekAlKategoriaNev;
});

const pageDescription = computed(() => {
  return data?.value[0].kapcsolodoAlKategoria.termekAlKategoriaLeiras;
});

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

kerekpartartok.value = data?.value;
</script>

<template>
  <div class="bg-white">
    <CategoryNavbar category-slug="kerekpartartok" />
    <div class="pt-14 space-y-14 site-padding">
      <AppHeader>
        <template #title> {{ pageTitle }} </template>
        <template #description>
          {{ pageDescription }}
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
