<script setup>
const { getItems } = useDirectusItems();

const { path, params } = useRoute();

const allBikeRacksThumbnail = '59cb511b-7e6e-4263-83d8-49091f9bcb03';

const { data: kerekpartartokAlKategoriak } = await useAsyncData(
  'alKategoriak',
  () =>
    getItems({
      collection: 'termekAlKategoria',
      fields: ['id', 'termekAlKategoriaNev', 'termekAlKategoriaKep', 'slug'],
      params: {
        filter: { kapcsolodoKategoria: { _eq: '1' } },
      },
    })
);
</script>

<template>
  <div class="w-screen bg-gray-100">
    <div class="flex flex-row py-10 gap-x-4">
      <div
        class="flex flex-row px-1 mx-auto overflow-x-scroll overflow-y-hidden 2xl:overflow-x-hidden gap-x-4"
      >
        <CategoryNavbarItem
          title="Összes kerékpártartó"
          :image="allBikeRacksThumbnail"
          to="/kerekpartartok"
          :is-active="path === `/kerekpartartok`"
        />
        <CategoryNavbarItem
          v-for="thumb in kerekpartartokAlKategoriak"
          :key="thumb.id"
          :id="thumb.id"
          :title="thumb.termekAlKategoriaNev"
          :image="thumb.termekAlKategoriaKep"
          :to="`/kerekpartartok/${thumb.slug}`"
          :is-active="path === `/kerekpartartok/${thumb.slug}`"
        />
      </div>
    </div>
  </div>
</template>
