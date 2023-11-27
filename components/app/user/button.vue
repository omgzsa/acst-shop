<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <NuxtLink to="/profil">
    <Icon
      name="mdi:account-outline"
      class="p-1.5 rounded-full w-9 h-9 bg-accent-100 hover:bg-dark-100 hover:text-accent-100 cursor-pointer hover:p-2"
      :class="defaultTransition"
    />
  </NuxtLink>
</template>
