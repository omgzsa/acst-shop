<script setup>
// import { useUserStore } from '@/stores/users';

// const { users, fetchUsers } = useUserStore();

// await fetchUsers();

// console.log(users.value);
</script>

<template>
  <div class="bg-white">
    <div class="flex justify-between gap-4 site-padding">
      <ProfileLogin />
      <ProfileRegister />
      <!-- <h1>Profil</h1>
      {{ refreshToken }}
      <button
        class="px-6 py-3 text-white bg-gray-500 rounded hover:bg-gray-800"
        @click="logout()"
      >
        logout
      </button>
       -->
    </div>
  </div>
</template>
