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
        'kerekpartartoTechSpec.*',
      ],
    },
  });
});

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `kerekpartartoTechSpec`,
    id: data.value.kerekpartartoTechSpec[0].id,
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
            name="Szállítható kerékpárok"
            type="number"
            :value="techSpec.szallithato_kerekparok"
            v-if="techSpec.szallithato_kerekparok !== null"
          />
          <ProductTechSpecItem
            name="Terhelhetőség"
            type="string"
            :value="techSpec.terhelhetoseg"
            v-if="techSpec.terhelhetoseg !== null"
          />
          <ProductTechSpecItem
            name="Egy kerékpár max súlya"
            type="number"
            :value="techSpec.egy_kerekpar_max_sulya"
            measure="kg"
            v-if="techSpec.egy_kerekpar_max_sulya !== null"
          />
          <ProductTechSpecItem
            name="Méret (HxSZxM)"
            type="number"
            :value="techSpec.meret_HxSZxM"
            v-if="techSpec.meret_HxSZxM !== null"
          />
          <ProductTechSpecItem
            name="Méret összehajtva"
            type="string"
            :value="techSpec.meret_osszehajtva"
            v-if="techSpec.meret_osszehajtva !== null"
          />
          <ProductTechSpecItem
            name="Kerékpárváz méret kompatibilitás"
            type="string"
            :value="techSpec.kerekparvaz_meret_kompatibilitas"
            v-if="techSpec.kerekparvaz_meret_kompatibilitas !== null"
          />
          <ProductTechSpecItem
            name="Súly"
            type="number"
            measure="kg"
            :value="techSpec.suly"
            v-if="techSpec.suly !== null"
          />
          <ProductTechSpecItem
            name="Max. szállítható kerékméret"
            type="string"
            :value="techSpec.max_szallithato_kerekmeret"
            v-if="techSpec.max_szallithato_kerekmeret !== null"
          />
          <ProductTechSpecItem
            name="Kerékpárok közötti távolság"
            type="number"
            measure="mm"
            :value="techSpec.kerekparok_kozotti_tavolsag"
            v-if="techSpec.kerekparok_kozotti_tavolsag !== null"
          />
          <ProductTechSpecItem
            name="Elektromos csatlakozás"
            type="boolean"
            :value="techSpec.elektromos_csatlakozas"
            :is-true="techSpec.elektromos_csatlakozas"
            v-if="techSpec.elektromos_csatlakozas !== null"
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
            name="Összecsukható"
            type="boolean"
            :value="techSpec.osszecsukhato"
            :is-true="techSpec.osszecsukhato"
            v-if="techSpec.osszecsukhato !== null"
          />
          <ProductTechSpecItem
            name="Dönthető"
            type="boolean"
            :value="techSpec.dontheto"
            :is-true="techSpec.dontheto"
            v-if="techSpec.dontheto !== null"
          />
          <ProductTechSpecItem
            name="Kiegészítő lámpatest"
            type="boolean"
            :value="techSpec.kiegeszito_lampatest"
            :is-true="techSpec.kiegeszito_lampatest"
            v-if="techSpec.kiegeszito_lampatest !== null"
          />
          <ProductTechSpecItem
            name="E-bike kompatibilis"
            type="boolean"
            :value="techSpec.eBike_kompatibilis"
            :is-true="techSpec.eBike_kompatibilis"
            v-if="techSpec.eBike_kompatibilis !== null"
          />
          <ProductTechSpecItem
            name="Rendszámtábla tartó"
            type="boolean"
            :value="techSpec.rendszamtabla_tarto"
            :is-true="techSpec.rendszamtabla_tarto"
            v-if="techSpec.rendszamtabla_tarto !== null"
          />
          <ProductTechSpecItem
            name="Kerek kerékpárváz méret"
            type="string"
            :value="techSpec.kerek_kerekparvaz_meret"
            v-if="techSpec.kerek_kerekparvaz_meret !== null"
          />
          <ProductTechSpecItem
            name="Ovális kerékpárváz méret"
            type="string"
            :value="techSpec.ovalis_kerekparvaz_meret"
            v-if="techSpec.ovalis_kerekparvaz_meret !== null"
          />
          <ProductTechSpecItem
            name="Max. gumiabroncs szélesség"
            type="number"
            :value="techSpec.max_gumiabroncs_szelesseg"
            v-if="techSpec.max_gumiabroncs_szelesseg !== null"
          />
          <ProductTechSpecItem
            name="Max. tengelytáv"
            type="number"
            :value="techSpec.max_tengelytav"
            v-if="techSpec.max_tengelytav !== null"
          />
          <ProductTechSpecItem
            name="Karbonváz kompatibilis"
            type="boolean"
            :value="techSpec.karbonvaz_kompatibilis"
            :is-true="techSpec.karbonvaz_kompatibilis"
            v-if="techSpec.karbonvaz_kompatibilis !== null"
          />
          <ProductTechSpecItem
            name="THULE SquareBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_SquareBar_rudra_szerelheto"
            :is-true="techSpec.THULE_SquareBar_rudra_szerelheto"
            v-if="techSpec.THULE_SquareBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="THULE WingBar Evo kompatibilis"
            type="boolean"
            :value="techSpec.THULE_WingBar_EVO_rudra_szerelheto"
            :is-true="techSpec.THULE_WingBar_EVO_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_EVO_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="THULE WingBar Edge kompatibilis"
            type="boolean"
            :value="techSpec.THULE_WingBar_Egde_rudra_szerelheto"
            :is-true="techSpec.THULE_WingBar_Egde_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_Egde_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="THULE WingBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_WingBar_rudra_szerelheto"
            :is-true="techSpec.THULE_WingBar_rudra_szerelheto"
            v-if="techSpec.THULE_WingBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="THULE ProBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_ProBar_rudra_szerelheto"
            :is-true="techSpec.THULE_ProBar_rudra_szerelheto"
            v-if="techSpec.THULE_ProBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="THULE SlideBar kompatibilis"
            type="boolean"
            :value="techSpec.THULE_SlideBar_rudra_szerelheto"
            :is-true="techSpec.THULE_SlideBar_rudra_szerelheto"
            v-if="techSpec.THULE_SlideBar_rudra_szerelheto !== null"
          />
          <ProductTechSpecItem
            name="20x20mm-es T-profilú nem THULE rúdra szerelhető"
            type="boolean"
            :value="techSpec['20x20_Tprofilu_nem_THULE_szerelheto']"
            :is-true="techSpec['20x20_Tprofilu_nem_THULE_szerelheto']"
            v-if="techSpec['20x20_Tprofilu_nem_THULE_szerelheto'] !== null"
          />
          <ProductTechSpecItem
            name="24x30mm-es T-profilú nem THULE rúdra szerelhető"
            type="boolean"
            :value="techSpec['24x30_Tprofilu_nem_THULE_szerelheto']"
            :is-true="techSpec['24x30_Tprofilu_nem_THULE_szerelheto']"
            v-if="techSpec['24x30_Tprofilu_nem_THULE_szerelheto'] !== null"
          />
          <ProductTechSpecItem
            name="One Key System kompatibilis"
            type="boolean"
            :value="techSpec.one_key_system_kompatibilis"
            :is-true="techSpec.one_key_system_kompatibilis"
            v-if="techSpec.one_key_system_kompatibilis !== null"
          />
          <ProductTechSpecItem
            name="Hátsó lámpákkal felszerelve rendszámtábla látható"
            type="boolean"
            :value="techSpec.hatso_lampak_rendszamtabla_lathato"
            :is-true="techSpec.hatso_lampak_rendszamtabla_lathato"
            v-if="techSpec.hatso_lampak_rendszamtabla_lathato !== null"
          />
        </ProductTechSpec>
      </div>
    </div>
  </div>
</template>
