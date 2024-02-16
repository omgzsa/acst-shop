<script setup>
defineProps({
  label: String,
  to: String,
  disabled: Boolean,
});
</script>

<template>
  <NuxtLink :to="to">
    <button
      class="px-4 py-2 space-x-2 font-semibold transition-all ease-in-out border rounded-md shadow-md border-accent-100 duration-250 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
      :class="{
        'cursor-not-allowed': disabled,
      }"
      :disabled="disabled"
    >
      <span class="text-base leading-snug tracking-wide xl:text-lg">
        {{ label }}
      </span>
    </button>
  </NuxtLink>
</template>
