<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  id: Number,
  title: String,
  image: String,
  to: String,
  isActive: Boolean,
});

// onMounted(() => {
//   console.log('updating: ' + props.isActive);
// });
</script>

<template>
  <div
    class="flex flex-col flex-none bg-white w-60 md:w-72 text-dark-100 hover:text-accent-100 hover:bg-dark-100"
    :class="defaultTransition"
  >
    <NuxtLink
      :class="{
        'font-semibold bg-dark-100 text-accent-100': props.isActive
          ? true
          : false,
      }"
      :to="`${props.to}`"
    >
      <NuxtImg
        :src="`${baseUrl}/assets/${props.image}`"
        :alt="title"
        height="170px"
        width="295px"
      />
      <p class="h-20 p-4">
        {{ props.title }}
      </p>
    </NuxtLink>
  </div>
</template>
