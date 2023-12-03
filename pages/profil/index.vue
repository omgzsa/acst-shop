<script setup>
const email = ref('');
const password = ref('');

provide('email', email);
provide('password', password);
</script>

<template>
  <div class="bg-white">
    <div class="flex justify-between gap-8 site-padding">
      <ProfileLogin />
      <ProfileRegister />
    </div>
  </div>
</template>
