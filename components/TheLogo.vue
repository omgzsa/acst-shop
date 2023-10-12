<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <NuxtLink to="/" class="inline-flex items-center font-semibold group">
    <div
      class="flex flex-row items-center justify-center space-x-1 text-3xl group-hover:font-bold"
    >
      <span
        class="text-dark-300 group-hover:text-accent-100"
        :class="defaultTransition"
      >
        <div class="block group-hover:hidden">
          <Icon name="ph:activity-bold" />
        </div>
        <div class="hidden group-hover:block">
          <Icon name="mdi:music-accidental-sharp" />
        </div>
      </span>

      <span
        class="logo text-dark-100 decoration-accent-100 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-accent-100"
        :class="defaultTransition"
      >
        ACST
      </span>
    </div>
  </NuxtLink>
</template>

<style>
/* @supports (-webkit-text-stroke: 0.5px black) {
  .logo {
    -webkit-text-fill-color: #b6dd47;
    -webkit-text-stroke: 0.5px black;
  }
} */
</style>
