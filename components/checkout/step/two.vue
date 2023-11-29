<script setup>
const value = ref('GLS');
</script>

<template>
  <div>
    <FormKit
      v-model="value"
      type="radio"
      label="Szállítási szolgáltató"
      :options="['GLS', 'MPL', 'Foxpost', 'Személyes átvétel']"
      help="Ki szállítsa a csomagot?"
    />
  </div>
</template>
