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
    <ul class="space-x-2 space-y-2 text-xl sm:space-x-0 text-dark-300">
      <ProfileNavItem :user-nav="userNav" />
      <button
        class="text-base leading-snug tracking-wide xl:text-lg hover:text-red-700 hover:font-semibold"
        @click="store.userLogout()"
      >
        Kijelentkezés
      </button>
    </ul>
  </div>
</template>

<style></style>
