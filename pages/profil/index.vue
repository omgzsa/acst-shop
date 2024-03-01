<script setup>
definePageMeta({
  // middleware: ['to-profile-info'],
  layout: 'user',
});
const user = useDirectusUser();

const activeTab = ref('login');

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
      <!-- 
        greetings if logged in
       -->
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

      <!-- 
        Mobile view with tab-switching 
      -->
      <div v-if="!user">
        <div class="block lg:hidden">
          <div class="flex justify-evenly">
            <button
              :class="{
                'underline underline-offset-8 font-bold': activeTab === 'login',
              }"
              @click="activeTab = 'login'"
              class="px-4 py-2 text-xl cursor-pointer"
            >
              Bejelentkezés
            </button>
            <button
              :class="{
                'underline underline-offset-8 font-bold':
                  activeTab === 'register',
              }"
              @click="activeTab = 'register'"
              class="px-4 py-2 text-xl cursor-pointer"
            >
              Regisztráció
            </button>
          </div>
          <div>
            <Transition name="fade">
              <div v-if="activeTab === 'login'">
                <!-- Content for login -->
                <ProfileLogin />
              </div>
              <div v-else>
                <!-- Content for register -->
                <ProfileRegister />
              </div>
            </Transition>
          </div>
        </div>

        <!-- Desktop view -->
        <div class="hidden lg:block">
          <h1 class="pt-4">Üdvözlünk az oldalon!</h1>
          <div class="flex justify-between gap-10">
            <ProfileLogin />
            <ProfileRegister />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-active {
  position: absolute;
  z-index: -10;
}
</style>
