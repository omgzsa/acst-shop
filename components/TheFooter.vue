<script setup>
const address = '9028 Győr, Szent Imre út 144.';
const phone = '+36 (96) 428 007';
const email = 'autocsomagtarto@gmail.com';
const openingHours = {
  weekdays: 'Hétfő - Péntek: 8:30 - 16:00',
  saturday: 'Szombat: 9:00 - 12:00',
  sunday: 'Vasárnap: ZÁRVA',
};
</script>

<template>
  <footer class="bg-black">
    <div class="items-center sm:grid sm:grid-cols-6 site-padding">
      <div class="flex flex-col items-center pb-8 lg:pb-10 sm:col-span-3">
        <FooterLogo class="items-center" />
        <TheBarionStrip class="items-center" width="280" height="25" />
      </div>

      <div class="grid grid-cols-1 py-6 sm:place-items-center sm:col-span-3">
        <FooterContact
          :address="address"
          :phone="phone"
          :email="email"
          :opening-hours="openingHours"
        />
      </div>

      <!-- 
        footer docs
       -->
      <div class="py-4 border-t border-gray-500 col-span-full">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul class="gap-4 sm:flex sm:flex-wrap">
            <li>
              <NuxtLink
                to="/dokumentumok/aszf"
                class="text-xs transition-colors text-neutral-200 hover:underline underline-offset-2 hover:text-white"
              >
                Általános szerződési feltételek
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/dokumentumok/gdpr"
                class="text-xs transition-colors text-neutral-200 hover:underline underline-offset-2 hover:text-white"
              >
                Adatvédelmi tájékoztató
              </NuxtLink>
            </li>
          </ul>

          <p class="mt-8 text-xs text-white sm:mt-0">
            &copy; {{ new Date().getFullYear() }} UTAZZ VELÜNK AUTÓ Kft. Minden
            jog fenntartva.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
