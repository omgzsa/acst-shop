<script setup>
defineProps({
  icon: String,
});
</script>

<template>
  <div class="flex items-start gap-x-2">
    <Icon :name="icon" class="w-5 h-5 text-accent-100" />
    <slot />
  </div>
</template>
