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

// return true if key exists in techSpec
const renderIfKeyExists = (key) => {
  return Object.keys(techSpec.value).includes(key);
};
</script>

<template>
  <!-- PRODUCT TECHNICAL SPECIFICATIONS -->
  <div class="pb-8 space-y-4 border-b lg:col-span-3">
    <h3>Technikai adatok</h3>
    <ul
      class="gap-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProductTechSpecItemNumber
        v-if="renderIfKeyExists('szallithato_kerekparok')"
        name="Szállítható kerékpárok"
        :value="techSpec.szallithato_kerekparok"
      />

      <ProductTechSpecItemString
        v-if="techSpec.terhelhetoseg"
        name="Terhelhetőség"
        :value="techSpec.terhelhetoseg"
      />

      <ProductTechSpecItemString
        v-if="techSpec.egy_kerekpar_max_sulya"
        name="1db kerékpár max súlya"
        :value="techSpec.egy_kerekpar_max_sulya"
      />

      <ProductTechSpecItemString
        v-if="techSpec.meret_h_sz_m"
        name="Méret (HxSZxM)"
        :value="techSpec.meret_h_sz_m"
      />

      <ProductTechSpecItemString
        v-if="techSpec.meret_osszehajtva"
        name="Méret összehajtva"
        :value="techSpec.meret_osszehajtva"
      />

      <ProductTechSpecItemString
        v-if="techSpec.suly"
        name="Súly"
        :value="techSpec.suly"
      />

      <ProductTechSpecItemString
        v-if="techSpec.kerekparvaz_meret_kompatibilitas"
        name="Kerékpárváz méret kompatibilitás"
        :value="techSpec.kerekparvaz_meret_kompatibilitas"
      />

      <ProductTechSpecItemString
        v-if="techSpec.kerek_kerekparvaz_meret"
        name="Kerek kerékpárváz méret"
        :value="techSpec.kerek_kerekparvaz_meret"
      />

      <ProductTechSpecItemString
        v-if="techSpec.ovalis_kerekparvaz_meret"
        name="Ovális kerékpárváz méret"
        :value="techSpec.ovalis_kerekparvaz_meret"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.max_gumiabroncs_szelesseg"
        name="Max. gumiabroncs szélesség"
        :value="techSpec.max_gumiabroncs_szelesseg"
      />

      <ProductTechSpecItemString
        v-if="techSpec.max_szallithato_kerekmeret"
        name="Max. szállítható kerékméret"
        :value="techSpec.max_szallithato_kerekmeret"
      />

      <ProductTechSpecItemString
        v-if="techSpec.max_tengelytav"
        name="Max. tengelytávolság"
        :value="techSpec.max_tengelytav"
      />

      <ProductTechSpecItemString
        v-if="techSpec.kerekparok_kozotti_tavolsag"
        name="Kerékpárok közötti távolság"
        :value="techSpec.kerekparok_kozotti_tavolsag"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('hatso_lampak_rendszamtabla_lathato')"
        name="Hátsó lámpák és rendszámtábla látható kerékpárokkal szerelve"
        :is-true="!techSpec.hatso_lampak_rendszamtabla_lathato"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('karbonvaz_kompatibilis')"
        name="Karbonváz kompatibilis"
        :is-true="!techSpec.karbonvaz_kompatibilis"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('THULE_SquareBar_rudra_szerelheto')"
        name="THULE SquareBar rúdra szerelhető"
        :is-true="!techSpec.THULE_SquareBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('THULE_WingBar_EVO_rudra_szerelheto')"
        name="THULE WingBar EVO rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_EVO_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('THULE_WingBar_Edge_rudra_szerelheto')"
        name="THULE WingBar Edge rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_Edge_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('THULE_WingBar_rudra_szerelheto')"
        name="THULE WingBar rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('THULE_ProBar_rudra_szerelheto')"
        name="THULE ProBar rúdra szerelhető"
        :is-true="!techSpec.THULE_ProBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('THULE_SlideBar_rudra_szerelheto')"
        name="THULE SlideBar rúdra szerelhető"
        :is-true="!techSpec.THULE_SlideBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('osszecsukhato')"
        name="Összecsukható"
        :is-true="!techSpec.osszecsukhato"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('dontheto')"
        name="Dönthető"
        :is-true="!techSpec.dontheto"
      />

      <ProductTechSpecItemString
        v-if="techSpec.elektromos_csatlakozas"
        name="Elektromos csatlakozás"
        :value="techSpec.elektromos_csatlakozas"
      />

      <ProductTechSpecItemString
        v-if="techSpec.szin"
        name="Szín"
        :value="techSpec.szin"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.tipusszam"
        name="Típusszám"
        :value="techSpec.tipusszam"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('kiegeszito_lampatest')"
        name="Kiegészítő lámpatest"
        :is-true="!techSpec.kiegeszito_lampatest"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('eBike_kompatibilis')"
        name="E-bike kompatibilis"
        :is-true="!techSpec.eBike_kompatibilis"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('rendszamtabla_tarto')"
        name="Rendszámtábla tartó"
        :is-true="!techSpec.rendszamtabla_tarto"
      />

      <ProductTechSpecItemBool
        v-if="renderIfKeyExists('one_key_system_kompatibilis')"
        name="One Key System kompatibilis"
        :is-true="!techSpec.one_key_system_kompatibilis"
      />
    </ul>
  </div>
</template>
