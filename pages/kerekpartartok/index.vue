<script setup>
const { getItems } = useDirectusItems();

const bikeFilters = ref([]);
const kerekpartartok = ref([]);

const filter = {
  kapcsolodoKategoria: { id: { _eq: '1' } },
};

if (bikeFilters.value.length > 0) {
  filter.kerekpartartoTechSpec = {
    szallithato_kerekparok: { _in: bikeFilters.value },
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
      ],
      filter, // Use the predefined filter
    },
  })
);

const filteredProducts = computed(() => {
  if (bikeFilters.value.length === 0) {
    return kerekpartartok.value;
  }
  return kerekpartartok.value.filter((product) =>
    bikeFilters.value.includes(
      product.kerekpartartoTechSpec[0].szallithato_kerekparok
    )
  );
});

const productQuantity = computed(() => {
  return filteredProducts.value.length;
});

// Function to clear filters
const clearFilters = () => {
  bikeFilters.value = [];
};

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
      <ProductFilters
        :quantity="productQuantity"
        v-model="bikeFilters"
        @update:modelValue="bikeFilters = $event"
      />

      <!-- product archive -->
      <ProductList :items="filteredProducts" />
    </div>
  </div>
</template>
