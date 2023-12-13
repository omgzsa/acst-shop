<script setup>
import { useCartStore } from '@/stores/cart';
const { getItemById } = useDirectusItems();
const { params, path } = useRoute();

// const product = ref({});
const cartStore = useCartStore();

const { data: product } = await useAsyncData(path, () => {
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
        'boxokEsKosarakTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `boxokEsKosarakTechSpec`,
    id: product.value.boxokEsKosarakTechSpec[0].id,
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
            name="Űrtartalom"
            type="number"
            measure="L"
            :value="techSpec.urtartalom"
            v-if="techSpec.urtartalom !== null"
          />
          <ProductTechSpecItem
            name="Méretek"
            type="string"
            :value="techSpec.meretek"
            v-if="techSpec.meretek !== null"
          />
          <ProductTechSpecItem
            name="Hossz"
            type="number"
            :value="techSpec.hossz"
            v-if="techSpec.hossz !== null"
            measure="cm"
          />
          <ProductTechSpecItem
            name="Szélesség"
            type="number"
            :value="techSpec.szelesseg"
            v-if="techSpec.szelesseg !== null"
            measure="cm"
          />
          <ProductTechSpecItem
            name="Magasság"
            type="number"
            :value="techSpec.magassag"
            v-if="techSpec.magassag !== null"
            measure="cm"
          />
          <ProductTechSpecItem
            name="Külső méretek"
            type="string"
            :value="techSpec.kulso_meretek"
            v-if="techSpec.kulso_meretek !== null"
          />
          <ProductTechSpecItem
            name="Belső méretek"
            type="string"
            :value="techSpec.belso_meretek"
            v-if="techSpec.belso_meretek !== null"
          />
          <ProductTechSpecItem
            name="Terhelhetőség"
            type="number"
            measure="kg"
            :value="techSpec.terhelhetoseg"
            v-if="techSpec.terhelhetoseg !== null"
          />
          <ProductTechSpecItem
            name="Szerelési rendszer"
            type="string"
            :value="techSpec.szerelesi_rendszer"
            v-if="techSpec.szerelesi_rendszer !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            measure="kg"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Zárrendszer"
            type="string"
            :value="techSpec.zarrendszer"
            v-if="techSpec.zarrendszer !== null"
          />
          <ProductTechSpecItem
            name="Zárat tartalmaz"
            type="boolean"
            :value="techSpec.zarat_tartalmaz"
            :is-true="techSpec.zarat_tartalmaz"
            v-if="techSpec.zarat_tartalmaz !== null"
          />
          <ProductTechSpecItem
            name="One Key System kompatibilis "
            type="boolean"
            :value="techSpec.one_key_system_kompatibilis"
            v-if="techSpec.one_key_system_kompatibilis !== null"
          />
          <ProductTechSpecItem
            name="T-sínnel felszerelve"
            type="boolean"
            :value="techSpec.tsinnel_felszerelve"
            v-if="techSpec.tsinnel_felszerelve !== null"
          />

          <ProductTechSpecItem
            name="Szállítható sílécek (pár)"
            type="string"
            :value="techSpec.szallithato_silecek_par"
            v-if="techSpec.szallithato_silecek_par !== null"
          />
          <ProductTechSpecItem
            name="Szállítható snowboard"
            type="string"
            :value="techSpec.szallithato_snowboard"
            v-if="techSpec.szallithato_snowboard !== null"
          />
          <ProductTechSpecItem
            name="Max. síléc hossz"
            type="number"
            measure="cm"
            :value="techSpec.max_silec_hossz"
            v-if="techSpec.max_silec_hossz !== null"
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
            name="Thule SlideBar kompatibilis "
            type="boolean"
            :value="techSpec.THULE_SlideBar_rudra_szerelheto"
            v-if="techSpec.THULE_SlideBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule ProBar kompatibilis "
            type="boolean"
            :value="techSpec.THULE_ProBar_rudra_szerelheto"
            v-if="techSpec.THULE_ProBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule ProBar Evo kompatibilis "
            type="boolean"
            :value="techSpec.THULE_ProBar_EVO_rudra_szerelheto"
            v-if="techSpec.THULE_ProBar_EVO_rudra_szerelheto !== null"
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
