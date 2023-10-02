<script setup>
const { getItems } = useDirectusItems();

const { data } = await useAsyncData('alKategoriak', () => 
  getItems({
    collection: 'termekAlKategoria',
    fields: ['id', 'termekAlKategoriaNev', 'termekAlKategoriaKep'],
    params: {
      filter: {  kapcsolodoKategoria: { _eq: "1" }  }
    }
  })
);

// console.log(alKategoriak.value);
</script>

<template>
  <div class="bg-gray-100 ">
    <div class="flex flex-row py-10 gap-x-4 site-padding">
      <div class="flex flex-row gap-x-4">
        <div class="w-60 md:w-72">
          <NuxtLink to="/kerekpartartok">
            <NuxtImg 
              src="/tetocsomagtartok-thumb-nav.webp"
              alt="Összes kerékpártartó"
              height="170px"
              width="295px"
            />
            <p class="h-20 p-4 bg-dark-100 text-accent-100">Összes kerékpártartó</p>
          </NuxtLink>
        </div>
        <CategoryNavbarItem
          v-for="thumb in data" :key="thumb.id"
          :title="thumb.termekAlKategoriaNev" 
          :image="thumb.termekAlKategoriaKep" 
          :to="`/kerekpartartok`"
        />
      </div>
    </div>
  </div>
</template>