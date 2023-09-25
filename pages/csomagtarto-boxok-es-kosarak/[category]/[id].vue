<script setup>
const route = useRoute();
</script>

<template>
  <div>
    Itt egy termék a <strong>{{ route.params.category }}</strong> kategóriából,
    azon belül az <strong>{{ route.params.id }}</strong> termék.
  </div>
</template>
