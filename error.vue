<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps(['error']);

// console.log(props);

const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="absolute top-0 z-50 grid items-center w-full h-full bg-dark-100">
    <div class="max-w-md p-16 m-auto space-y-8">
      <p class="text-6xl font-bold text-neutral-200">{{ error.statusCode }}</p>
      <p class="text-2xl text-neutral-300">
        Oooops... az oldal amit keresel nem létezik.
      </p>
      <p class="text-neutral-300">{{ error.message }}</p>
      <button
        :class="defaultTransition"
        class="px-4 py-2 border mt-7 border-dark-300 hover:bg-accent-100 hover:text-dark-100 text-neutral-300"
        @click="handleClearError"
      >
        Vissza
      </button>
    </div>
  </div>
</template>
