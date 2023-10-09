<script setup>
const { defaultTransition } = useTailwindConfig();

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 w-full bg-white shadow-md text-dark-100"
  >
    <nav class="site-padding h-14">
      <div class="flex items-center justify-between h-full font-semibold">
        <!-- LOGO -->
        <TheLogo />

        <!-- NAVIGATION TOGGLE -->
        <div
          class="relative z-30 w-5 h-5 p-3 hover:scale-110"
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

      <!-- NAVIGATION MENU -->
      <div
        class="bg-accent-100 absolute left-0 top-14 w-full h-[calc(100vh-3.5rem)] overflow-auto transition-all duration-300 opacity-0 pointer-events-none"
        :class="{ 'opacity-95 pointer-events-auto': showMenu }"
      >
        <ul class="nav__list">
          <li>
            <NuxtLink class="nav__link" to="/">HOME</NuxtLink>
          </li>

          <!-- DROPDOWN ITEM -->
          <li class="dropdown__item">
            <div class="cursor-pointer nav__link dropdown__button">
              TETŐBOXOK ÉS CSOMAGTARTÓK
              <Icon name="mdi:chevron-down" class="text-2xl dropdown__arrow" />
            </div>
            <!-- DROPDOWN CONTAINER -->
            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <span class="underline dropdown__title"
                    ><NuxtLink to="/kerekpartartok"
                      >Összes kerékpártartók</NuxtLink
                    ></span
                  >

                  <ul class="dropdown__list">
                    <li>
                      <NuxtLink
                        to="/kerekpartartok/vonohorogra-szerelheto-kerekpartartok"
                      >
                        Vonóhorogra szerelhető kerékpártartók
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        to="/kerekpartartok/tetore-szerelheto-kerekpartartok"
                      >
                        Tetőre szerelhető kerékpártartók
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        to="/kerekpartartok/csomagtartora-szerelheto-kerekpartartok"
                      >
                        Csomagtartóra szerelhető kerékpártartók
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/kerekpartartok/kerekpartarto-kiegeszitok">
                        Kerékpártartó kiegészítők
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
.nav__link {
  @apply text-dark-100 font-semibold px-4 py-2 flex items-center justify-between transition-colors duration-300;
}
</style>
