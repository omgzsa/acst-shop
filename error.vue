<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps(['error']);

// console.log(props);

const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="grid items-center h-[85vh] site-padding">
    <div class="max-w-md p-16 m-auto space-y-8 border border-dark-100">
      <p class="text-6xl font-bold">{{ error.statusCode }}</p>
      <p class="text-2xl">Oooops... az oldal amit keresel nem létezik.</p>
      <p class="">{{ error.message }}</p>
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
