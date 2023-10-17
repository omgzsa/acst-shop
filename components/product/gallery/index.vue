<script setup>
//

const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const props = defineProps({
  gallery: Array,
});
</script>
<template>
  <div>
    <!-- PRODUCT IMAGE GALLERY -->
    <div class="grid grid-cols-6 gap-x-1">
      <NuxtImg
        v-for="img in gallery"
        :key="img.id"
        :src="`${baseUrl}/assets/${img.directus_files_id}`"
      />
    </div>
  </div>
</template>
