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
        'teliSporteszkozTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `teliSporteszkozTechSpec`,
    id: product.value.teliSporteszkozTechSpec[0].id,
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
            name="Méretek"
            type="String"
            :value="techSpec.meretek"
            v-if="techSpec.meretek !== null"
          />
          <ProductTechSpecItem
            name="Rakodási szélesség"
            type="string"
            :value="techSpec.rakodasi_szelesseg"
            v-if="techSpec.rakodasi_szelesseg !== null"
          />
          <ProductTechSpecItem
            name="Extra nagy nyomógomb"
            type="boolean"
            :value="techSpec.extra_nagy_nyomogomb"
            :is-true="techSpec.extra_nagy_nyomogomb"
            v-if="techSpec.extra_nagy_nyomogomb !== null"
          />
          <ProductTechSpecItem
            name="Hely a magas kötésekhez"
            type="boolean"
            :value="techSpec.hely_a_magas_kotesekhez"
            :is-true="techSpec.hely_a_magas_kotesekhez"
            v-if="techSpec.hely_a_magas_kotesekhez !== null"
          />
          <ProductTechSpecItem
            name="Sílecek a tartóhoz rögzíthetők"
            type="boolean"
            :value="techSpec.silecek_tartohoz_rogzithetok"
            :is-true="techSpec.silecek_tartohoz_rogzithetok"
            v-if="techSpec.silecek_tartohoz_rogzithetok !== null"
          />
          <ProductTechSpecItem
            name="Tartó a tetőcsomagtartóhoz rögzíthatő"
            type="boolean"
            :value="techSpec.tarto_tetocsomagtartohoz_rogzitheto"
            :is-true="techSpec.tarto_tetocsomagtartohoz_rogzitheto"
            v-if="techSpec.tarto_tetocsomagtartohoz_rogzitheto !== null"
          />
          <ProductTechSpecItem
            name="Szín"
            type="string"
            :value="techSpec.szin"
            v-if="techSpec.szin !== null"
          />

          <ProductTechSpecItem
            name="24x30-as T-profilú nem THULE rúdra szerelhető"
            type="boolean"
            :value="techSpec['24x30_Tprofilu_nem_THULE_szerelheto']"
            v-if="techSpec['24x30_Tprofilu_nem_THULE_szerelheto'] !== null"
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
            name="Thule WingBar Edge kompatibilis"
            type="boolean"
            :value="techSpec.THULE_WingBar_Egde_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_Egde_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule SquareBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_SquareBar_rudra_szerelheto"
            v-if="techSpec.THULE_SquareBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule SlideBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_SlideBar_rudra_szerelheto"
            v-if="techSpec.THULE_SlideBar_rudra_szerelheto !== null"
          />
          <!-- <ProductTechSpecItem
            name="Thule ProBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_ProBar_rudra_szerelheto"
            v-if="techSpec.THULE_ProBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="Thule ProBar Evo kompatibilis"
            type="boolean"
            :value="techSpec.THULE_ProBar_EVO_rudra_szerelheto"
            v-if="techSpec.THULE_ProBar_EVO_rudra_szerelheto !== null"
          /> -->
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
