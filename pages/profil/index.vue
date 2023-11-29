<script setup>
const { token, refreshTokens, refreshToken, expires } = useDirectusToken();
const { logout } = useDirectusAuth();
definePageMeta({
  middleware: ['auth', 'logged-in'],
});

const user = useDirectusUser();
</script>

<template>
  <div class="bg-white">
    <div class="site-padding">
      <h1>Profil</h1>
      {{ refreshToken }}
    </div>
    <button
      class="px-6 py-3 text-white bg-gray-500 rounded hover:bg-gray-800"
      @click="logout()"
    >
      logout
    </button>
    <pre>{{ user }}</pre>
  </div>
</template>
