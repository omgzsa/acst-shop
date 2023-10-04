<script setup>
const { path, params } = useRoute();
// console.log(path === `/kerekpartartok/${params.category}`);
</script>

<template>
  <div class="bg-white">
    {{ params.category }}
    <CategoryNavbar />
    <div class="space-y-12 site-padding">
      <AppHeader>
        <template #title> Kerékpártartók </template>
        <template #description>
          Ezeknél a tartóknál mindenképpen ajánlott a Thule 976 világítás és
          rendszámtábla tartó használata, különben a kerékpártartó nem felel meg
          a jelenlegi KRESZ előírásoknak!
        </template>
      </AppHeader>
      <div>PRODUCT ARCHIVE</div>
    </div>
  </div>
</template>
