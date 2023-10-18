<script setup>
const props = defineProps({
  specKey: String,
  specId: Number,
});

const { getItemById } = useDirectusItems();

const { data: techSpec } = await useAsyncData('techSpec', () => {
  return getItemById({
    collection: `${props.specKey}`,
    id: `${props.specId}`,
    // params: {
    //   fields: ['.*', `${props.specKey}`],
    // },
  });
});

console.log(techSpec.value);
</script>

<template>
  <!-- PRODUCT TECHNICAL SPECIFICATIONS -->
  <div class="pb-8 space-y-4 border-b lg:col-span-3">
    <h2>Technikai adatok</h2>
    <ul
      class="gap-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProductTechSpecItemNumber
        name="Szállítható kerékpárok"
        :value="techSpec.szallithato_kerekparok"
        v-if="techSpec.szallithato_kerekparok"
      />

      <ProductTechSpecItemString
        name="Terhelhetőség"
        v-if="techSpec.terhelhetoseg"
        :value="techSpec.terhelhetoseg"
      />

      <ProductTechSpecItemString
        name="1db kerékpár max súlya"
        v-if="techSpec.egy_kerekpar_max_sulya"
        :value="techSpec.egy_kerekpar_max_sulya"
      />

      <ProductTechSpecItemString
        name="Méret (HxSZxM)"
        v-if="techSpec.meret_h_sz_m"
        :value="techSpec.meret_h_sz_m"
      />

      <ProductTechSpecItemString
        name="Méret összehajtva"
        v-if="techSpec.meret_osszehajtva"
        :value="techSpec.meret_osszehajtva"
      />

      <ProductTechSpecItemString
        name="Súly"
        v-if="techSpec.suly"
        :value="techSpec.suly"
      />

      <ProductTechSpecItemString
        name="Kerékpárváz méret kompatibilitás"
        v-if="techSpec.kerekparvaz_meret_kompatibilitas"
        :value="techSpec.kerekparvaz_meret_kompatibilitas"
      />

      <ProductTechSpecItemString
        name="Kerek kerékpárváz méret"
        v-if="techSpec.kerek_kerekparvaz_meret"
        :value="techSpec.kerek_kerekparvaz_meret"
      />

      <ProductTechSpecItemString
        name="Ovális kerékpárváz méret"
        v-if="techSpec.ovalis_kerekparvaz_meret"
        :value="techSpec.ovalis_kerekparvaz_meret"
      />

      <ProductTechSpecItemNumber
        name="Max. gumiabroncs szélesség"
        v-if="techSpec.max_gumiabroncs_szelesseg"
        :value="techSpec.max_gumiabroncs_szelesseg"
      />

      <ProductTechSpecItemString
        name="Max. szállítható kerékméret"
        v-if="techSpec.max_szallithato_kerekmeret"
        :value="techSpec.max_szallithato_kerekmeret"
      />

      <ProductTechSpecItemString
        name="Max. tengelytávolság"
        v-if="techSpec.max_tengelytav"
        :value="techSpec.max_tengelytav"
      />

      <ProductTechSpecItemString
        name="Kerékpárok közötti távolság"
        v-if="techSpec.kerekparok_kozotti_tavolsag"
        :value="techSpec.kerekparok_kozotti_tavolsag"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.hatso_lampak_rendszamtabla_lathato"
        name="Hátsó lámpák és rendszámtábla látható kerékpárokkal szerelve"
        :is-true="!techSpec.hatso_lampak_rendszamtabla_lathato"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.karbonvaz_kompatibilis"
        name="Karbonváz kompatibilis"
        :is-true="!techSpec.karbonvaz_kompatibilis"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_SquareBar_rudra_szerelheto"
        name="THULE SquareBar rúdra szerelhető"
        :is-true="!techSpec.THULE_SquareBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_WingBar_EVO_rudra_szerelheto"
        name="THULE WingBar EVO rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_EVO_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_WingBar_Edge_rudra_szerelheto"
        name="THULE WingBar Edge rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_Edge_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_WingBar_rudra_szerelheto"
        name="THULE WingBar rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_ProBar_rudra_szerelheto"
        name="THULE ProBar rúdra szerelhető"
        :is-true="!techSpec.THULE_ProBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_SlideBar_rudra_szerelheto"
        name="THULE SlideBar rúdra szerelhető"
        :is-true="!techSpec.THULE_SlideBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.osszecsukhato"
        name="Összecsukható"
        :is-true="!techSpec.osszecsukhato"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.dontheto !== false"
        name="Dönthető"
        :is-true="!techSpec.dontheto"
      />

      <ProductTechSpecItemString
        name="Elektromos csatlakozás"
        v-if="techSpec.elektromos_csatlakozas"
        :value="techSpec.elektromos_csatlakozas"
      />

      <ProductTechSpecItemString
        name="Szín"
        v-if="techSpec.szin"
        :value="techSpec.szin"
      />

      <ProductTechSpecItemNumber
        name="Típusszám"
        v-if="techSpec.tipusszam"
        :value="techSpec.tipusszam"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.kiegeszito_lampatest"
        name="Kiegészítő lámpatest"
        :is-true="!techSpec.kiegeszito_lampatest"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.eBike_kompatibilis"
        name="E-bike kompatibilis"
        :is-true="!techSpec.eBike_kompatibilis"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.rendszamtabla_tarto"
        name="Rendszámtábla tartó"
        :is-true="!techSpec.rendszamtabla_tarto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.one_key_system_kompatibilis"
        name="One Key System kompatibilis"
        :is-true="!techSpec.one_key_system_kompatibilis"
      />
    </ul>
  </div>
</template>
