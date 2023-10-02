<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const { defaultTransition } = useTailwindConfig()

defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  to: {
    type: String,
  },
  isActive: {
    type: Boolean
  }
})
</script>

<template>
  <div class="bg-white w-60 md:w-72 text-dark-100 hover:text-accent-100 hover:bg-dark-100"
    :class="defaultTransition"
  >
    <NuxtLink :to="`${to}`">
      <NuxtImg 
        :src="`${baseUrl}/assets/${image}`"
        :alt="title"
        height="170px"
        width="295px"
      />
      <p class="h-20 p-4 ">
        {{ title }}
      </p>
    </NuxtLink>
  </div>
</template>

