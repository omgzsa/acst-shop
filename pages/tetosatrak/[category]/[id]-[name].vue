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
        'tetosatorTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `tetosatorTechSpec`,
    id: data.value.tetosatorTechSpec[0].id,
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
            name="Férőhelyek száma"
            type="number"
            :value="techSpec.ferohelyek_szama"
            v-if="techSpec.ferohelyek_szama !== null"
          />
          <ProductTechSpecItem
            name="Méretek kinyitva"
            type="string"
            :value="techSpec.meretek_kinyitva"
            v-if="techSpec.meretek_kinyitva !== null"
          />
          <ProductTechSpecItem
            name="Méretek összehajtva"
            type="string"
            :value="techSpec.meretek_osszehajtva"
            v-if="techSpec.meretek_osszehajtva !== null"
          />
          <ProductTechSpecItem
            name="Fekvőhely mérete"
            type="string"
            :value="techSpec.fekvohely_merete"
            v-if="techSpec.fekvohely_merete !== null"
          />
          <ProductTechSpecItem
            name="Max. belső magasság"
            type="number"
            measure="cm"
            :value="techSpec.max_belso_magassag"
            v-if="techSpec.max_belso_magassag !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            measure="kg"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Statikus teherbírás"
            type="number"
            measure="kg"
            :value="techSpec.statikus_teherbiras"
            v-if="techSpec.statikus_teherbiras !== null"
          />
          <ProductTechSpecItem
            name="Minimális tartórúd méret"
            type="number"
            measure="cm"
            :value="techSpec.minimalis_tarto_rud_meret"
            v-if="techSpec.minimalis_tarto_rud_meret !== null"
          />
          <ProductTechSpecItem
            name="Sátor alap anyaga"
            type="string"
            :value="techSpec.sator_alap_anyaga"
            v-if="techSpec.sator_alap_anyaga !== null"
          />
          <ProductTechSpecItem
            name="Sátor szövet anyaga"
            type="string"
            :value="techSpec.sator_szovet_anyaga"
            v-if="techSpec.sator_szovet_anyaga !== null"
          />
          <ProductTechSpecItem
            name="Belső keret"
            type="string"
            :value="techSpec.belso_keret"
            v-if="techSpec.belso_keret !== null"
          />
          <ProductTechSpecItem
            name="Szúnyogháló"
            type="boolean"
            :value="techSpec.szunyoghalo"
            v-if="techSpec.szunyoghalo !== null"
          />
          <ProductTechSpecItem
            name="Használhatóság"
            type="string"
            :value="techSpec.hasznalhatosag"
            v-if="techSpec.hasznalhatosag !== null"
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
        </ProductTechSpec>
      </div>
    </div>
  </div>
</template>
