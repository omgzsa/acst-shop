<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

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
        'vonohorograKerekpartartoTechSpec',
      ],
      // filter: { kapcsolodoKategoria: { id: { _eq: '1' } } },
    },
  });
});

console.log(data.value);
product.value = data.value;
</script>

<template>
  <div class="bg-white">
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
    <div v-else>
      <ProductGallery :gallery="product.termekGaleria" />
      <ProductInfo
        :name="product.termekNev"
        :description="product.termekLeiras"
        :price="product.termekAr"
        :details="product.termekReszletek"
        :has-varranty="product.eredetiThuleGarancia"
      />
      <ProductTechSpec />
    </div>
  </div>
</template>
