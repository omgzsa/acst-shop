<script setup>
const baseUrl = useDirectusUrl();

const props = defineProps({
  gallery: Array,
});
</script>
<template>
  <div class="lg:col-span-2">
    <!-- PRODUCT IMAGE GALLERY -->
    <div class="grid grid-cols-2 gap-2">
      <NuxtImg
        v-for="img in gallery"
        :key="img.id"
        :src="`${baseUrl}/assets/${img.directus_files_id}`"
        class="bg-dark-200"
      />
    </div>
  </div>
</template>
