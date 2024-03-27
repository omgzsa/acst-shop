<script setup>
const address = '9028 Győr, Szent Imre út 144.';
const phone = '+36 (96) 428 007';
const email = 'autocsomagtarto@gmail.com';
const openingHours = {
  weekdays: 'Hétfő - Péntek: 8:30 - 16:00',
  saturday: 'Szombat: 9:00 - 12:00',
  sunday: 'Vasárnap: ZÁRVA',
};
/**
 * footer spacing issues
 * needs more data (aszf, adatvédelem, stb)
 * needs more styling
 */
</script>
<template>
  <!-- <div class="pt-10 text-white bg-black">
    <div class="site-padding">
      <div class="grid gap-4 sm:grid-cols-2">
        
        <FooterLogo />

        
        <FooterContact
          :address="address"
          :phone="phone"
          :email="email"
          :opening-hours="openingHours"
        />

        
        <TheBarionStrip width="300" height="28" />

        <div class="border-t border-dark-300 col-span-full" />

        <div class="col-span-full">Copyright 2023 - Minden jog fenntartva</div>
      </div>
    </div>
  </div> -->
  <footer class="bg-black">
    <!-- <div class="relative block h-32 lg:col-span-2 lg:h-full"> -->
    <!-- <img
        src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        class="absolute inset-0 object-cover w-full h-full"
      /> -->
    <div class="lg:grid lg:grid-cols-5 site-padding">
      <FooterLogo />
      <TheBarionStrip width="300" height="28" />
      <!-- </div> -->

      <div class="px-4 pb-4 pt-14 sm:px-6 lg:col-span-full lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <FooterContact
            :address="address"
            :phone="phone"
            :email="email"
            :opening-hours="openingHours"
          />

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p class="font-medium text-zinc-500">Services</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    Company Review
                  </a>
                </li>

                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-zinc-500">Company</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a href="#" class="transition text-zinc-200 hover:opacity-75">
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pt-4 mt-10 border-t border-gray-100">
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap gap-4">
              <li>
                <a
                  href="#"
                  class="text-xs text-white transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-xs text-white transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-xs text-white transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>

            <p class="mt-8 text-xs text-white sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
