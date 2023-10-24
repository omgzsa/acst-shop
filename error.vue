<script setup>
const { defaultTransition } = useTailwindConfig();

defineProps(['error']);

const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="site-padding">
    <div
      class="grid max-w-sm p-10 mx-auto text-center border border-dark-100 place-items-center"
    >
      <p class="text-6xl font-bold mt-7">{{ error.statusCode }}</p>
      <p class="text-2xl mt-7">Oooops...</p>
      <p class="mt-7">{{ error.message }}</p>
      <button
        :class="defaultTransition"
        class="px-4 py-2 border mt-7 border-dark-100 hover:bg-dark-100 hover:text-white"
        @click="handleClearError"
      >
        Vissza
      </button>
    </div>
  </div>
</template>
