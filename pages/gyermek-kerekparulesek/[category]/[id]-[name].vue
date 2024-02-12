<script setup>
import { useCartStore } from '@/stores/cart';
const { getItemById } = useDirectusItems();
const { params, path } = useRoute();

const product = ref({});
const cartStore = useCartStore();

const { data, pending, error } = await useAsyncData(path, () => {
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
        'gyermekKerekparulesTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData(`${path}-techSpec`, () => {
  return getItemById({
    collection: `gyermekKerekparulesTechSpec`,
    id: data.value.gyermekKerekparulesTechSpec[0].id,
    filter: {
      kapcsolodoTermekek: { id: { _eq: params.id } },
    },
  });
});
const noTechSpec = computed(() => {
  return techSpec.value === null;
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Nem találjuk a terméket 💥💥',
    fatal: true,
  });
}

product.value = data.value;
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
            name="Max. gyermeksúly"
            type="number"
            measure="kg"
            :value="techSpec.max_gyermeksuly"
            v-if="techSpec.max_gyermeksuly !== null"
          />
          <ProductTechSpecItem
            name="Max. gyermek magasság"
            type="number"
            measure="cm"
            :value="techSpec.max_gyermek_magassag"
            v-if="techSpec.max_gyermek_magassag !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            measure="kg"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Biztonsági heveder"
            type="string"
            :value="techSpec.biztonsagi_heveder"
            v-if="techSpec.biztonsagi_heveder !== null"
          />
          <ProductTechSpecItem
            name="Megfelel a biztonsági előírásoknak"
            type="boolean"
            :value="techSpec.megfelel_biztonsagi_eloirasoknak"
            v-if="techSpec.megfelel_biztonsagi_eloirasoknak !== null"
          />
          <ProductTechSpecItem
            name="Szállítható gyermekek száma"
            type="number"
            :value="techSpec.szallithato_gyermekek_szama"
            v-if="techSpec.szallithato_gyermekek_szama !== null"
          />
          <ProductTechSpecItem
            name="Szín"
            type="string"
            :value="techSpec.szin"
            v-if="techSpec.szin !== null"
          />
          <ProductTechSpecItem
            name="Típusszám"
            type="number"
            :value="techSpec.tipusszam"
            v-if="techSpec.tipusszam !== null"
          />
          <ProductTechSpecItem
            name="Kompatibilitás"
            type="string"
            :value="techSpec.kompatibilitas"
            v-if="techSpec.kompatibilitas !== null"
          />
        </ProductTechSpec>
      </div>
    </div>
  </div>
</template>
