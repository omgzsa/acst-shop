<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const { getItems } = useDirectusItems();

const { data: alKategoriak, pending, error } = await useAsyncData('alKategoriak', () => 
  getItems({
    collection: 'termekAlKategoria',
    fields: ['id', 'termekAlKategoriaNev', 'termekAlKategoriaKep'],
    // params: {
    //   filter: {  id: { "_eq": "2" }  }
    // }
  })
);

// const { data: kategoriak, pending, error } = await useAsyncData('kategoriak', () =>
//   getItems({
//     collection: 'termekKategoria',
//     fields: ['id', 'termekKategoriaNev'],
//   })
// );
</script>

<template>
  <div>
    <CategoryNavbar />
    <AppHeader>
      <template #title>
        Kerékpártartók
      </template>
      <template #description>
        Ezeknél a tartóknál mindenképpen ajánlott a Thule 976 világítás és rendszámtábla tartó használata, különben a kerékpártartó nem felel meg a jelenlegi KRESZ előírásoknak!
      </template>
    </AppHeader>
    <div>
      <div>
        <div v-if="pending" class="flex items-center justify-center h-12 text-xl font-bold text-white bg-red-500">LOADING ...</div>
      </div>
      <div>
        <pre v-for="item in alKategoriak" :key="item.id">
          {{ item }}
        </pre>
      </div>
      
    </div>
      
  </div>
</template>
