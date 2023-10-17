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

// console.log(techSpec.value);
</script>

<template>
  <!-- PRODUCT TECHNICAL SPECIFICATIONS -->
  <div class="pb-8 space-y-4 border-b site-padding">
    <h2>Technikai adatok</h2>
    <ul class="space-y-4">
      <ProductTechSpecItem
        name="Szállítható kerékpárok"
        v-if="techSpec.szallithato_kerekparok"
      >
        {{ techSpec.szallithato_kerekparok }}
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Terhelhetőség" v-if="techSpec.terhelhetoseg">
        {{ techSpec.terhelhetoseg }}
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Méret (HxSZxM)" v-if="techSpec.meret_h_sz_m">
        {{ techSpec.meret_h_sz_m }}
      </ProductTechSpecItem>
      <ProductTechSpecItem
        name="Méret összehajtva"
        v-if="techSpec.meret_osszehajtva"
      >
        {{ techSpec.meret_osszehajtva }}
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Súly" v-if="techSpec.suly">
        {{ techSpec.suly }}
      </ProductTechSpecItem>
      <ProductTechSpecItem
        name="Max. szállítható kerékméret"
        v-if="techSpec.max_szallithato_kerekmeret"
      >
        {{ techSpec.max_szallithato_kerekmeret }}
      </ProductTechSpecItem>
      <ProductTechSpecItem
        name="Kerékpárok közötti távolság"
        v-if="techSpec.kerekparok_kozotti_tavolsag"
      >
        {{ techSpec.kerekparok_kozotti_tavolsag }}
      </ProductTechSpecItem>
      <ProductTechSpecItem
        name="Elektromos csatlakozás"
        v-if="techSpec.elektromos_csatlakozas"
      >
        {{ techSpec.elektromos_csatlakozas }}
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Szín" v-if="techSpec.szin">
        {{ techSpec.szin }}
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Típusszám" v-if="techSpec.tipusszam">
        {{ techSpec.tipusszam }}
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Összecsukható" v-if="techSpec.osszecsukhato">
        <Icon name="mdi:check" v-if="techSpec.osszecsukhato" />
        <Icon name="mdi:close" v-else />
        <div class="hidden">{{ techSpec.osszecsukhato }}</div>
      </ProductTechSpecItem>
      <ProductTechSpecItem name="Dönthető" v-if="techSpec.dontheto">
        <Icon name="mdi:check" v-if="techSpec.dontheto" />
        <Icon name="mdi:close" v-else />
        <div class="hidden">{{ techSpec.dontheto }}</div>
      </ProductTechSpecItem>
    </ul>
  </div>
</template>
