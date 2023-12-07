<script setup>
definePageMeta({
  middleware: ['to-profile-info'],
  layout: 'user',
});
const user = useDirectusUser();

const email = ref('');
const password = ref('');
const first_name = ref('');
const last_name = ref('');

provide('email', email);
provide('password', password);
provide('first_name', first_name);
provide('last_name', last_name);
/*
TODOS:

- Middleware routing still needs polishing
*/
</script>

<template>
  <div class="bg-white">
    <div class="py-8 site-padding">
      <div
        v-if="user"
        class="flex flex-col items-center justify-center w-full h-96"
      >
        <h1 class="mb-8">Üdvözlünk, {{ user?.first_name }}!</h1>
        <p class="pb-2">Korábban már bejelentkeztél.</p>
        <NuxtLink to="/profil/info">
          <Icon name="mdi:chevron-double-right" size="20" class="mr-2" />

          <span
            class="tracking-wide underline underline-offset-2 hover:font-bold"
            >Tovább a profilodra</span
          ><Icon name="mdi:chevron-double-left" size="20" class="ml-2"
        /></NuxtLink>
      </div>
      <div v-if="!user">
        <!-- <div></div> -->
        <div>
          <h1 class="pt-4">Üdvözlünk az oldalon!</h1>
        </div>
        <div class="flex justify-between gap-16">
          <ProfileLogin />
          <ProfileRegister />
        </div>
      </div>
    </div>
  </div>
</template>
