<script setup>
import { useCartStore } from '@/stores/cart';
const { getItemById } = useDirectusItems();
const { params, path } = useRoute();

const product = ref({});
const cartStore = useCartStore();

const { data } = await useAsyncData(path, () => {
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
        'tetocsomagtartoTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `tetocsomagtartoTechSpec`,
    id: data.value.tetocsomagtartoTechSpec[0].id,
    filter: {
      kapcsolodoTermekek: { id: { _eq: params.id } },
    },
  });
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Nem találjuk a terméket 💥💥',
    fatal: true,
  });
}

const noTechSpec = computed(() => {
  return techSpec.value === null;
});

product.value = data.value;
</script>

<template>
  <div class="bg-white">
    <div class="py-4 site-padding">
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
            name="Méret (HxSZxM)"
            type="string"
            :value="techSpec.meret_HxSZxM"
            v-if="techSpec.meret_HxSZxM !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            measure="kg"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Max. terhelhetőség"
            type="number"
            measure="kg"
            :value="techSpec.max_terhelhetoseg"
            v-if="techSpec.max_terhelhetoseg !== null"
          />
          <ProductTechSpecItem
            name="Zárat tartalmaz"
            type="boolean"
            :value="techSpec.zarat_tartalmaz"
            :is-true="techSpec.zarat_tartalmaz"
            v-if="techSpec.zarat_tartalmaz !== null"
          />
          <ProductTechSpecItem
            name="Szín"
            type="string"
            :value="techSpec.szin"
            v-if="techSpec.szin !== null"
          />
          <ProductTechSpecItem
            name="Thule WingBar kompatibilis "
            type="boolean"
            :value="techSpec.THULE_WingBar_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule WingBar Evo kompatibilis "
            type="boolean"
            :value="techSpec.THULE_WingBar_EVO_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_EVO_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule WingBar Edge kompatibilis "
            type="boolean"
            :value="techSpec.THULE_WingBar_Egde_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_Egde_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule SquareBar kompatibilis "
            type="boolean"
            :value="techSpec.THULE_SquareBar_rudra_szerelheto"
            v-if="techSpec.THULE_SquareBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule ProBar Evo kompatibilis "
            type="boolean"
            :value="techSpec.THULE_ProBar_EVO_rudra_szerelheto"
            v-if="techSpec.THULE_ProBar_EVO_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule SlideBar kompatibilis "
            type="boolean"
            :value="techSpec.THULE_SlideBar_rudra_szerelheto"
            v-if="techSpec.THULE_SlideBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="One Key System kompatibilis "
            type="boolean"
            :value="techSpec.one_key_system_kompatibilis"
            v-if="techSpec.one_key_system_kompatibilis !== null"
          />
          <ProductTechSpecItem
            name="Rakodási szélesség"
            type="string"
            :value="techSpec.rakodasi_szelesseg"
            v-if="techSpec.rakodasi_szelesseg !== null"
          />
          <ProductTechSpecItem
            name="Magasság"
            type="number"
            :value="techSpec.magassag"
            v-if="techSpec.magassag !== null"
            measure="cm"
          />
          <ProductTechSpecItem
            name="Hosszúság"
            type="number"
            :value="techSpec.hosszusag"
            v-if="techSpec.hosszusag !== null"
            measure="cm"
          />
          <ProductTechSpecItem
            name="T-sínnel felszerelve"
            type="boolean"
            :value="techSpec.tsinnel_felszerelve"
            v-if="techSpec.tsinnel_felszerelve !== null"
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
