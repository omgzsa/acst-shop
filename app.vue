<script setup>
useHead({
  htmlAttrs: {
    lang: 'hu',
  },
  charset: 'utf-8',
  title: 'Autócsomagtartó | hivatalos THULE kiskereskedés',
  titleTemplate: (title) =>
    title !== 'Autócsomagtartó | hivatalos THULE kiskereskedés'
      ? `${title} · Autócsomagtartó | hivatalos THULE kiskereskedés`
      : title,
  meta: [],
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>
