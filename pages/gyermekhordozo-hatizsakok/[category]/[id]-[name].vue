<script setup>
import { useCartStore } from '@/stores/cart';
const { getItemById } = useDirectusItems();
const { params, path } = useRoute();

// const product = ref({});
const cartStore = useCartStore();

const { data: product } = await useAsyncData(`${path}-techSpec`, () => {
  return getItemById({
    collection: 'termekek',
    id: params.id,
    params: {
      fields: [
        'id',
        'termekNev',
        'termekKep',
        'termekLeiras',
        'termekReszletek',
        'termekAr',
        'eredetiThuleGarancia',
        'kapcsolodoKategoria.termekKategoriaNev',
        'kapcsolodoKategoria.slug',
        'kapcsolodoAlKategoria.termekAlKategoriaNev',
        'kapcsolodoAlKategoria.slug',
        'termekGaleria.id',
        'termekGaleria.directus_files_id',
        'gyermekhordozoHatizsakTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `gyermekhordozoHatizsakTechSpec`,
    id: product.value.gyermekhordozoHatizsakTechSpec[0].id,
    filter: {
      kapcsolodoTermekek: { id: { _eq: params.id } },
    },
  });
});

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: 'Nem találjuk a terméket 💥💥',
    fatal: true,
  });
}

const noTechSpec = computed(() => {
  return techSpec.value === null;
});
</script>

<template>
  <div class="bg-white">
    <div class="pt-4 site-padding">
      <TheBreadCrumbs
        :category-name="product.kapcsolodoKategoria.termekKategoriaNev"
        :category-slug="product.kapcsolodoKategoria.slug"
        :sub-category-name="product.kapcsolodoAlKategoria.termekAlKategoriaNev"
        :sub-category-slug="product.kapcsolodoAlKategoria.slug"
        :product-name="product.termekNev"
      />
      <!-- <div
        v-if="pending"
        class="flex items-center justify-center h-12 text-xl font-bold text-white bg-red-500"
      >
        LOADING ...
      </div>
      <div v-if="error" class="h-12 mx-auto my-auto bg-red-400">
        {{ error.message }}
      </div> -->
    </div>
    <div v-if="product">
      <div class="grid lg:grid-cols-3 gap-x-6 gap-y-10 site-padding">
        <ProductGallery :gallery="product.termekGaleria" />
        <ProductInfo
          :id="product.id"
          :name="product.termekNev"
          :img="product.termekGaleria[0].directus_files_id"
          :description="product.termekLeiras"
          :price="product.termekAr"
          :details="product.termekReszletek"
          :has-varranty="product.eredetiThuleGarancia"
          @add-to-cart="cartStore.addItems($event)"
        />
        <ProductTechSpec v-if="!noTechSpec">
          <ProductTechSpecItem
            name="Szín"
            type="string"
            :value="techSpec.szin"
            v-if="techSpec.szin !== null"
          />
          <ProductTechSpecItem
            name="Nem"
            type="string"
            :value="techSpec.termek_nem"
            v-if="techSpec.termek_nem !== null"
          />
          <ProductTechSpecItem
            name="Anyaga"
            type="string"
            :value="techSpec.anyaga"
            v-if="techSpec.anyaga !== null"
          />
          <ProductTechSpecItem
            name="Súlykapacitás"
            type="number"
            :value="techSpec.sulykapacitas"
            v-if="techSpec.sulykapacitas !== null"
          />
          <ProductTechSpecItem
            name="Max. gyermeksúly"
            type="number"
            :value="techSpec.max_gyermeksuly"
            v-if="techSpec.max_gyermeksuly !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Méretek"
            type="string"
            :value="techSpec.meret_HxSZxM"
            v-if="techSpec.meret_HxSZxM !== null"
          />
          <ProductTechSpecItem
            name="Vízálló réteg anyaga"
            type="string"
            :value="techSpec.vizallo_reteg_anyaga"
            v-if="techSpec.vizallo_reteg_anyaga !== null"
          />
          <ProductTechSpecItem
            name="Típusszám"
            type="number"
            :value="techSpec.tipusszam"
            v-if="techSpec.tipusszam !== null"
          />
        </ProductTechSpec>
      </div>
    </div>
  </div>
</template>
