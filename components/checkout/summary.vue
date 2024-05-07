<script setup>
const props = defineProps({
  stepValues: Object,
  receiptName: String,
  receiptStreetAndNumber: String,
  receiptCity: String,
  receiptPostCode: String,
  total: Number,
});
</script>

<template>
  <div class="grid p-4 border shadow-sm lg:p-6 xl:p-8 gap-y-4 sm:grid-cols-2">
    <h2 class="text-base uppercase col-span-full">Összegzés</h2>

    <div class="col-span-full sm:col-span-1 lg:col-span-full">
      <h3
        class="mb-1 text-sm font-normal underline uppercase underline-offset-2"
      >
        Szállítás
      </h3>
      <p class="text-sm">
        Név: <span class="font-medium">{{ stepValues.name }}</span>
      </p>
      <p class="text-sm">
        Telefonszám:
        <span class="font-medium">{{ stepValues.phone }}</span>
      </p>
      <p class="text-sm">
        Utca, házszám:
        <span class="font-medium">{{ stepValues.streetAndNumber }}</span>
      </p>
      <p class="text-sm">
        Város: <span class="font-medium">{{ stepValues.city }}</span>
      </p>
      <p class="text-sm">
        Irányítószám:
        <span class="font-medium">{{ stepValues.postCode }}</span>
      </p>
    </div>

    <!-- if adressMatch ... else -->
    <div class="col-span-full sm:col-span-1 lg:col-span-full">
      <h3
        class="mb-1 text-sm font-normal underline uppercase underline-offset-2"
      >
        Számlázás
      </h3>
      <p class="text-sm">
        Számlázási név:
        <span class="font-medium">{{ receiptName }}</span>
      </p>
      <p class="text-sm">
        Számlázási utca, házszám:
        <span class="font-medium">{{ receiptStreetAndNumber }}</span>
      </p>
      <p class="text-sm">
        Számlázási város:
        <span class="font-medium">{{ receiptCity }}</span>
      </p>
      <p class="text-sm">
        Számlázási irányítószám:
        <span class="font-medium">{{ receiptPostCode }}</span>
      </p>
    </div>

    <p class="text-sm col-span-full">
      Szállítás módja:
      <span class="font-medium">{{ stepValues.deliveryMode }}</span>
    </p>

    <p class="pt-4 ml-auto text-base sm:col-start-2 col-span-full">
      Teljes összeg:
      <span class="font-medium underline underline-offset-8">{{ total }}</span>
      Ft
    </p>
  </div>
</template>
