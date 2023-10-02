<script setup>
const route = useRoute();
</script>

<template>
  <div>
    {{ route.params.category }}
  </div>
</template>