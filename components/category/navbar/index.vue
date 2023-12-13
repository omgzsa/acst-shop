<script setup>
const props = defineProps({
  categorySlug: String,
});
const { getItems } = useDirectusItems();

const { path, params } = useRoute();

const allBikeRacksThumbnail = '59cb511b-7e6e-4263-83d8-49091f9bcb03';
const allRoofRacksThumbnail = 'cf6c6827-6fb1-4227-903b-794fb3203d99';
const allRoofBoxesThumbnail = '664346f5-6579-4434-a2ee-ed03585dbb37';
const allWaterRacksThumbnail = '1c0558e8-5416-43f0-9dbf-3bc3e78affed';

const { data } = await useAsyncData('alKategoriak', () =>
  getItems({
    collection: 'termekAlKategoria',
    fields: ['id', 'termekAlKategoriaNev', 'termekAlKategoriaKep', 'slug'],
    params: {
      filter: { kapcsolodoKategoria: { slug: props.categorySlug } },
    },
  })
);

const computedThumbnail = computed(() => {
  if (props.categorySlug === 'kerekpartartok') {
    return allBikeRacksThumbnail;
  }

  if (props.categorySlug === 'tetocsomagtartok') {
    return allRoofRacksThumbnail;
  }

  if (props.categorySlug === 'csomagtarto-boxok-es-kosarak') {
    return allRoofBoxesThumbnail;
  }

  if (props.categorySlug === 'vizi-sporteszkoz-szallitok') {
    return allWaterRacksThumbnail;
  }
});

const computedTitle = computed(() => {
  if (props.categorySlug === 'kerekpartartok') {
    return 'Összes kerékpártartó';
  }

  if (props.categorySlug === 'tetocsomagtartok') {
    return 'Összes tetőcsomagtartó';
  }

  if (props.categorySlug === 'csomagtarto-boxok-es-kosarak') {
    return 'Összes csomagtartó box és kosár';
  }

  if (props.categorySlug === 'vizi-sporteszkoz-szallitok') {
    return 'Összes vízi sporteszköz szállító';
  }
});
</script>

<template>
  <div class="bg-gray-100">
    <div class="flex flex-row mx-auto w-[96vw] sm:w-[97vw] md:w-[98vw] gap-x-4">
      <div
        class="flex flex-row px-1 py-10 overflow-x-scroll overflow-y-hidden 2xl:site-padding 2xl:overflow-x-hidden gap-x-4"
      >
        <CategoryNavbarItem
          :title="computedTitle"
          :image="computedThumbnail"
          :to="`/${props.categorySlug}`"
          :is-active="path === `/${props.categorySlug}`"
        />
        <CategoryNavbarItem
          v-for="thumb in data"
          :key="thumb.id"
          :id="thumb.id"
          :title="thumb.termekAlKategoriaNev"
          :image="thumb.termekAlKategoriaKep"
          :to="`/${props.categorySlug}/${thumb.slug}`"
          :is-active="path === `/${props.categorySlug}/${thumb.slug}`"
        />
      </div>
    </div>
  </div>
</template>
