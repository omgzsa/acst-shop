<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
const store = useAuthStore();

const userNav = ref([
  { id: 1, name: 'Információ', key: 'info', path: '/profil/info' },
  { id: 2, name: 'Rendeléseim', key: 'rendeles', path: '/profil/rendeles' },
  // { id: 3, name: 'Kijelentkezés', key: 'kijelentkezes'  },
]);
</script>

<template>
  <div class="bg-white">
    <ul class="flex items-start gap-4 md:flex-col text-dark-300">
      <ProfileNavItem :user-nav="userNav" />
      <button
        class="ml-auto text-sm leading-snug tracking-wide md:m-0 md:text-base xl:text-lg hover:text-red-500 hover:font-semibold"
        @click="store.userLogout()"
      >
        Kijelentkezés
      </button>
    </ul>
  </div>
</template>

<style></style>
