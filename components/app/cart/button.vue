<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div>
    <Icon
      name="mdi:cart-outline"
      class="p-1.5 rounded-full w-9 h-9 bg-accent-100 hover:bg-dark-100 hover:text-dark-200 cursor-pointer"
      :class="defaultTransition"
    />
  </div>
</template>
