<script setup>
import { useCartStore } from '@/stores/cart';
const { defaultTransition } = useTailwindConfig();

const cartStore = useCartStore();
</script>

<template>
  <NuxtLink to="/kosar">
    <div class="relative">
      <Icon
        name="mdi:cart-outline"
        class="p-1.5 rounded-full w-9 h-9 bg-accent-100 hover:bg-dark-100 hover:text-accent-100 cursor-pointer hover:p-2"
        :class="defaultTransition"
      />
      <span
        v-if="cartStore.itemCount"
        class="absolute flex items-center justify-center w-5 h-5 pt-0.5 text-xs font-semibold text-white bg-red-600 border rounded-full -top-2 -right-2"
        >{{ cartStore.itemCount }}</span
      >
    </div>
  </NuxtLink>
</template>
