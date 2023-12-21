<script setup>
import {
  getCategoryTitle,
  getCategoryThumbnail,
} from '~/composables/useCategoryUtils';

const props = defineProps({
  categorySlug: String,
});

const { getItems } = useDirectusItems();
const { path, params } = useRoute();

const { data } = await useAsyncData('alKategoriak', () =>
  getItems({
    collection: 'termekAlKategoria',
    fields: ['id', 'termekAlKategoriaNev', 'termekAlKategoriaKep', 'slug'],
    params: {
      filter: { kapcsolodoKategoria: { slug: props.categorySlug } },
    },
  })
);

const computedTitle = computed(() => getCategoryTitle(props.categorySlug));
const computedThumbnail = computed(() =>
  getCategoryThumbnail(props.categorySlug)
);
</script>

<template>
  <div class="bg-gray-100">
    <div class="w-[96vw] sm:w-[97vw] md:w-[98vw]">
      <div
        class="flex flex-row px-1 py-8 overflow-x-scroll overflow-y-hidden md:site-padding 2xl:overflow-x-hidden gap-x-4"
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
