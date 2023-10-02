<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const { getItemById } = useDirectusItems();
const { params, path } = useRoute()

const product = ref({})

const { data, pending, error } = await useAsyncData(path, () => {
  return getItemById({
    collection: "termekek",
    id: params.id,
  });
},
{
   pick: ['termekNev', 'termekLeiras', 'termekKep'],
})

product.value = data.value
</script>

<template>
  <div>
    <div v-if="pending" class="flex items-center justify-center h-12 text-xl font-bold text-white bg-red-500">LOADING ...</div>
    <div v-if="error" class="h-12 mx-auto my-auto bg-red-400">{{ error.message }}</div>
    <div v-else>
      <p>
      Itt egy termék a <strong>{{ params.category }}</strong> kategóriából,
    azon belül az <strong>{{ params.id }}</strong> termék.
    </p>
    <div>
      <!-- <code>{{ product }}</code> -->
      <h1>{{ product.termekNev }}</h1>
      <p>{{ product.termekLeiras }}</p>
      <NuxtImg 
        :src="`${baseUrl}/assets/${product.termekKep}`" :alt="product.termekLeiras" 
        class="w-96 h-96"
      />
    </div>
    </div>
  </div>
</template>