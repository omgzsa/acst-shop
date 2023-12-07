<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  // key: 'rendeles',
  // layout: 'user',
});
</script>
<template>
  <div class="bg-white">
    <div class="py-10 site-padding">
      <h1>Rendeléseim</h1>
      <ProfileNav />
    </div>
  </div>
</template>

<style></style>
