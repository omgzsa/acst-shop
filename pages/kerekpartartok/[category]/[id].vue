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
        'termekAr',
        'termekGaleria.id',
        'termekGaleria.directus_files_id',
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
      <ProductInfo
        :img="`${baseUrl}/assets/${product.termekKep}`"
        :name="product.termekNev"
        :description="product.termekLeiras"
        :price="product.termekAr"
        :gallery="product.termekGaleria"
      />
    </div>
  </div>
</template>
