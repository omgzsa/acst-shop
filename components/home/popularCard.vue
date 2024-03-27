<script setup>
const baseUrl = useDirectusUrl();
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  product: Object,
});

const slugName = computed(() => {
  return props?.product?.termekNev
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
});

// console.log(slugName.value);
</script>

<template>
  <NuxtLink
    v-if="product"
    :to="`/${product.kapcsolodoKategoria.slug}/${product.kapcsolodoAlKategoria.slug}/${product.id}-${slugName.value}`"
    class="block max-w-xs overflow-hidden group"
  >
    <div class="space-y-4">
      <NuxtImg
        :src="`${baseUrl}/assets/${product.termekKep}`"
        :alt="product.termekNev"
        width="179"
        height="240"
        class="object-cover object-bottom py-6 bg-dark-200 group-hover:scale-105"
        :class="defaultTransition"
      />
      <div class="px-1 space-y-2">
        <h4 class="group-hover:underline group-hover:underline-offset-4">
          {{ product.termekNev }}
        </h4>
        <p class="text-sm tracking-wider md:text-base text-dark-300">
          {{ product.termekLeiras.slice(0, 40) }}...
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style></style>
