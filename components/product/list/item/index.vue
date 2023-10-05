<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div>
    <div>
      <h3>{{ name }}</h3>
      <p>{{ price }}</p>
    </div>
  </div>
</template>
