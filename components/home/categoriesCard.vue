<script setup>
const props = defineProps({
  title: String,
  alt: String,
  img: String,
  to: String,
});
</script>

<template>
  <NuxtLink :to="to">
    <div class="relative max-w-xs">
      <div class="absolute bottom-0 h-[72px] xl:h-20 inset-x-6">
        <span class="text-lg font-semibold text-white sm:text-xl xl:text-2xl">
          {{ props.title }}
        </span>
      </div>
      <img
        :src="props.img"
        :alt="props.alt"
        width="311"
        height="420"
        class="object-contain object-bottom"
      />
    </div>
  </NuxtLink>
</template>
