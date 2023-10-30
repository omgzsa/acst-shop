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
  });
});
</script>

<template>
  <!-- PRODUCT TECHNICAL SPECIFICATIONS -->
  <div class="pb-8 space-y-4 border-b lg:col-span-3">
    <h3>Technikai adatok</h3>
    <ul
      class="gap-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProductTechSpecItemNumber
        v-if="techSpec.szallithato_kerekparok !== null"
        name="Szállítható kerékpárok"
        :value="techSpec.szallithato_kerekparok"
      />

      <ProductTechSpecItemString
        v-if="techSpec.terhelhetoseg !== null"
        name="Terhelhetőség"
        :value="techSpec.terhelhetoseg"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.egy_kerekpar_max_sulya !== null"
        name="1db kerékpár max súlya"
        :value="techSpec.egy_kerekpar_max_sulya"
        measure="kg"
      />

      <ProductTechSpecItemString
        v-if="techSpec.meret_HxSZxM !== null"
        name="Méret (HxSZxM)"
        :value="techSpec.meret_HxSZxM"
      />

      <ProductTechSpecItemString
        v-if="techSpec.meret_osszehajtva !== null"
        name="Méret összehajtva"
        :value="techSpec.meret_osszehajtva"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.suly !== null"
        name="Súly"
        :value="techSpec.suly"
        measure="kg"
      />

      <ProductTechSpecItemString
        v-if="techSpec.kerekparvaz_meret_kompatibilitas !== null"
        name="Kerékpárváz méret kompatibilitás"
        :value="techSpec.kerekparvaz_meret_kompatibilitas"
      />

      <ProductTechSpecItemString
        v-if="techSpec.kerek_kerekparvaz_meret !== null"
        name="Kerek kerékpárváz méret"
        :value="techSpec.kerek_kerekparvaz_meret"
      />

      <ProductTechSpecItemString
        v-if="techSpec.ovalis_kerekparvaz_meret !== null"
        name="Ovális kerékpárváz méret"
        :value="techSpec.ovalis_kerekparvaz_meret"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.max_gumiabroncs_szelesseg !== null"
        name="Max. gumiabroncs szélesség"
        :value="techSpec.max_gumiabroncs_szelesseg"
        measure="”"
      />

      <ProductTechSpecItemString
        v-if="techSpec.max_szallithato_kerekmeret !== null"
        name="Max. szállítható kerékméret"
        :value="techSpec.max_szallithato_kerekmeret"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.max_tengelytav !== null"
        name="Max. tengelytávolság"
        :value="techSpec.max_tengelytav"
        measure="mm"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.kerekparok_kozotti_tavolsag !== null"
        name="Kerékpárok közötti távolság"
        :value="techSpec.kerekparok_kozotti_tavolsag"
        measure="cm"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.hatso_lampak_rendszamtabla_lathato !== null"
        name="Hátsó lámpák és rendszámtábla látható kerékpárokkal szerelve"
        :is-true="!techSpec.hatso_lampak_rendszamtabla_lathato"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.karbonvaz_kompatibilis !== null"
        name="Karbonváz kompatibilis"
        :is-true="!techSpec.karbonvaz_kompatibilis"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_SquareBar_rudra_szerelheto !== null"
        name="THULE SquareBar rúdra szerelhető"
        :is-true="!techSpec.THULE_SquareBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_WingBar_EVO_rudra_szerelheto !== null"
        name="THULE WingBar EVO rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_EVO_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_WingBar_Egde_rudra_szerelheto !== null"
        name="THULE WingBar Edge rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_Egde_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_WingBar_rudra_szerelheto !== null"
        name="THULE WingBar rúdra szerelhető"
        :is-true="!techSpec.THULE_WingBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_ProBar_rudra_szerelheto !== null"
        name="THULE ProBar rúdra szerelhető"
        :is-true="!techSpec.THULE_ProBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.THULE_SlideBar_rudra_szerelheto !== null"
        name="THULE SlideBar rúdra szerelhető"
        :is-true="!techSpec.THULE_SlideBar_rudra_szerelheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.osszecsukhato !== null"
        name="Összecsukható"
        :is-true="!techSpec.osszecsukhato"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.dontheto !== null"
        name="Dönthető"
        :is-true="!techSpec.dontheto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.elektromos_csatlakozas !== null"
        name="Elektromos csatlakozás"
        :value="techSpec.elektromos_csatlakozas"
      />

      <ProductTechSpecItemString
        v-if="techSpec.szin !== null"
        name="Szín"
        :value="techSpec.szin"
      />

      <ProductTechSpecItemNumber
        v-if="techSpec.tipusszam !== null"
        name="Típusszám"
        :value="techSpec.tipusszam"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.kiegeszito_lampatest !== null"
        name="Kiegészítő lámpatest"
        :is-true="!techSpec.kiegeszito_lampatest"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.eBike_kompatibilis !== null"
        name="E-bike kompatibilis"
        :is-true="!techSpec.eBike_kompatibilis"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.rendszamtabla_tarto !== null"
        name="Rendszámtábla tartó"
        :is-true="!techSpec.rendszamtabla_tarto"
      />

      <ProductTechSpecItemBool
        v-if="techSpec.one_key_system_kompatibilis !== null"
        name="One Key System kompatibilis"
        :is-true="!techSpec.one_key_system_kompatibilis"
      />
    </ul>
  </div>
</template>
