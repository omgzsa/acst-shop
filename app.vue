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
