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
        'termekGaleria.id',
        'termekGaleria.directus_files_id',
        'iratEsEszkozTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `iratEsEszkozTechSpec`,
    id: data.value.iratEsEszkozTechSpec[0].id,
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
    <div class="site-padding">
      <TheBreadCrumbs />
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
            name="Babakocsi max. terhelhetősége"
            type="number"
            measure="kg"
            :value="techSpec.babakocsi_max_terhelhetosege"
            v-if="techSpec.babakocsi_max_terhelhetosege !== null"
          />
          <ProductTechSpecItem
            name="Méretek összecsukva"
            type="string"
            :value="techSpec.meretek_osszecsukva"
            v-if="techSpec.meretek_osszecsukva !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            measure="kg"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Tolókar szélesség"
            type="number"
            measure="cm"
            :value="techSpec.tolokar_szelesseg"
            v-if="techSpec.tolokar_szelesseg !== null"
          />
          <ProductTechSpecItem
            name="Biztonsági heveder"
            type="string"
            :value="techSpec.biztonsagi_heveder"
            v-if="techSpec.biztonsagi_heveder !== null"
          />
          <ProductTechSpecItem
            name="Ülőmagasság"
            type="number"
            measure="cm"
            :value="techSpec.ulomagassag"
            v-if="techSpec.ulomagassag !== null"
          />
          <ProductTechSpecItem
            name="Max. áthaladható ajtószélesség"
            type="number"
            measure="cm"
            :value="techSpec.max_athaladhato_ajtoszelesseg"
            v-if="techSpec.max_athaladhato_ajtoszelesseg !== null"
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
