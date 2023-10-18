<script setup>
// const config = useRuntimeConfig();
// const baseUrl = config.public.directusUrl;

const { getItemById } = useDirectusItems();
const { params, path } = useRoute();

const product = ref({});

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
        'termekGaleria.id',
        'termekGaleria.directus_files_id',
        'vonohorograKerekpartartoTechSpec.vonohorograKerekpartartoTechSpec_id',
        'tetoreKerekpartartoTechSpec.tetoreKerekpartartoTechSpec_id',
        'csomagtartoraKerekpartartoTechSpec.csomagtartoraKerekpartartoTechSpec_id',
        'kerekparKiegeszitoTechSpec.kerekparKiegeszitoTechSpec_id',
      ],
    },
  });
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Nem találjuk a terméket 💥💥',
    // fatal: true,
  });
}

product.value = data.value;

// return ONLY the techSpec array from product that's length is > 0
const availableTechSpec = computed(() => {
  return Object.entries(product.value).filter(([key, value]) => {
    if (key.includes('TechSpec')) {
      return value.length > 0;
    }
  });
});

// corresponding techSpec key and value
const [specKey, [specValue]] = availableTechSpec.value[0];

// corresponding techSpec id
const specId = computed(() => {
  return Object.values(specValue)[0];
});

// console.log(params);
</script>

<template>
  <div class="bg-white">
    <div class="site-padding">
      <TheBreadCrumbs />
      <div
        v-if="pending"
        class="flex items-center justify-center h-12 text-xl font-bold text-white bg-red-500"
      >
        LOADING ...
      </div>
      <div v-if="error" class="h-12 mx-auto my-auto bg-red-400">
        {{ error.message }}
      </div>
    </div>
    <div v-if="product">
      <div class="grid lg:grid-cols-3 gap-x-6 gap-y-10 site-padding">
        <ProductGallery :gallery="product.termekGaleria" />
        <ProductInfo
          :name="product.termekNev"
          :description="product.termekLeiras"
          :price="product.termekAr"
          :details="product.termekReszletek"
          :has-varranty="product.eredetiThuleGarancia"
        />
        <ProductTechSpec :spec-key="specKey" :spec-id="specId" />
      </div>
    </div>
  </div>
</template>
