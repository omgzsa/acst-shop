<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const props = defineProps({
  img: String,
  gallery: Array,
  name: String,
  description: String,
  price: Number,
});
</script>

<template>
  <div class="space-y-4">
    <NuxtImg
      :src="props.img"
      :alt="props.description"
      class="object-contain -mb-4 h-96 bg-dark-200"
    />
    <div class="grid grid-cols-5 gap-x-1">
      <NuxtImg
        v-for="img in gallery"
        :key="img.id"
        :src="`${baseUrl}/assets/${img.directus_files_id}`"
      />
    </div>
    <div class="site-padding">
      <h1>{{ props.name }}</h1>
      <p>{{ props.description }}</p>
      <p>{{ props.price }}</p>
    </div>
  </div>
</template>
