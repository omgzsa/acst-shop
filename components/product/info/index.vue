<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  img: String,
  gallery: Array,
  name: String,
  description: String,
  details: String,
  price: Number,
  hasVarranty: Boolean,
});
</script>

<template>
  <div class="pb-10 space-y-4">
    <!-- PRODUCT IMAGE GALLERY -->
    <div>
      <!-- <NuxtImg
        :src="props.img"
        :alt="props.description"
        class="object-contain h-96 bg-dark-200"
      /> -->
      <div class="grid grid-cols-6 gap-x-1">
        <NuxtImg
          v-for="img in gallery"
          :key="img.id"
          :src="`${baseUrl}/assets/${img.directus_files_id}`"
        />
      </div>
    </div>
    <!-- PRODUCT IMPORTANT INFOS -->
    <div class="flex flex-col pt-4 pb-10 space-y-6 border-b site-padding">
      <h1>{{ props.name }}</h1>
      <p>{{ props.description }}</p>
      <div class="tracking-wide">
        <span class="block text-xs sm:text-sm">Online ár:</span>
        <div class="space-x-1">
          <p class="inline text-2xl font-bold lg:text-3xl">
            {{ props.price }} Ft
          </p>
          <span>(ÁFA-val)</span>
        </div>
      </div>
      <button
        class="flex items-center justify-center px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md border-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
        :class="defaultTransition"
      >
        <Icon name="mdi:cart-outline" class="mb-1 text-lg" />
        <span class="text-base tracking-wide">Kosárba rakom</span>
      </button>
    </div>

    <!-- PRODUCT HASVARRANTY BOOL -->
    <div
      v-if="hasVarranty"
      class="flex items-center pt-4 pb-8 space-x-2 border-b site-padding"
    >
      <Icon
        name="mdi:check"
        class="p-0.5 text-xl text-white rounded-full bg-dark-100"
      />
      <span class="tracking-wide"> Eredeti THULE garancia </span>
    </div>

    <!-- PRODUCT LONG DESCRIPTION -->
    <div class="pt-4 pb-8 space-y-4 border-b site-padding">
      <h2>Termék leírása</h2>
      <p>
        {{ props.details }}
      </p>
    </div>

    <!-- PRODUCT TECHNICAL SPECIFICATIONS -->
    <div class="pt-4 pb-8 space-y-4 border-b site-padding">
      <h2>Technikai adatok</h2>
      <div class="grid grid-cols-2 gap-4">
        <ul class="space-y-2">
          <li>Termék jellemző 1</li>
          <li>Termék jellemző 2</li>
          <li>Termék jellemző 3</li>
          <li>Termék jellemző 4</li>
          <li>Termék jellemző 5</li>
        </ul>
        <ul class="space-y-2">
          <li>Termék jellemző 1</li>
          <li>Termék jellemző 2</li>
          <li>Termék jellemző 3</li>
          <li>Termék jellemző 4</li>
          <li>Termék jellemző 5</li>
        </ul>
      </div>
    </div>
  </div>
</template>
