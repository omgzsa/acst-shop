<script setup>
const user = useDirectusUser();

const email = ref('');
const password = ref('');
const first_name = ref('');
const last_name = ref('');

provide('email', email);
provide('password', password);
provide('first_name', first_name);
provide('last_name', last_name);
</script>

<template>
  <div class="bg-white">
    <div class="py-8 site-padding">
      <div v-if="!user" class="flex justify-between gap-16">
        <ProfileLogin />
        <ProfileRegister />
      </div>

      <div v-if="user">
        <h1>Felhasználói fiók</h1>
        <ProfileNav />
      </div>
    </div>
  </div>
</template>
