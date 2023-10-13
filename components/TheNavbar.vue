<script setup>
import nav from '@/assets/nav.json';

const route = useRoute();
const { defaultTransition } = useTailwindConfig();

// toggles mobile menu
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// watch for route changes and close menu
watch(
  () => route.path,
  () => {
    showMenu.value = false;
  }
);
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 w-full bg-white shadow-md text-dark-100"
  >
    <nav class="site-padding h-14">
      <div class="flex items-center justify-between h-full space-x-6">
        <!-- LOGO -->
        <TheLogo />

        <!-- DESKTOP NAVIGATION -->
        <NavbarDesktop :nav-items="nav" />

        <!-- CART & USER-->
        <div class="hidden space-x-4 lg:flex">
          <AppCartButton />

          <AppUserButton />
        </div>

        <!-- NAVIGATION TOGGLE -->
        <div
          class="relative z-30 w-5 h-5 p-3 hover:scale-110 lg:hidden"
          @click="toggleMenu"
        >
          <Icon
            name="mdi:menu"
            class="absolute inset-0 z-20 grid text-xl cursor-pointer text-dark-100 place-items-center"
            v-if="!showMenu"
            :class="defaultTransition"
          />
          <Icon
            name="mdi:close"
            class="absolute inset-0 z-20 grid text-xl cursor-pointer text-dark-100 place-items-center"
            v-if="showMenu"
            :class="defaultTransition"
          />
        </div>
      </div>

      <!-- MOBILE NAVIGATION MENU -->
      <div
        class="absolute left-0 w-full h-[calc(100vh-3.5rem)] lg:hidden overflow-auto transition-all duration-300 opacity-0 pointer-events-none bg-white top-14"
        :class="{ 'opacity-100 pointer-events-auto': showMenu }"
      >
        <div class="grid pt-10 gap-y-4 site-padding">
          <NuxtLink
            class="w-full text-2xl font-semibold transition-colors duration-300 text-dark-100 hover:text-dark-300"
            to="/"
            >Kezdőlap</NuxtLink
          >

          <NavbarMobile :nav-items="nav" />
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>
