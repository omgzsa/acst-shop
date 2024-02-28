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
  <div class="py-10 text-white bg-black">
    <div class="site-padding">
      <div class="flex flex-col items-center space-y-8">
        <!-- THULE LOGO -->
        <FooterLogo />

        <!-- CONTACTS -->
        <FooterContact
          :address="address"
          :phone="phone"
          :email="email"
          :opening-hours="openingHours"
        />

        <!-- barion -->
        <TheBarionStrip width="300" height="28" />

        <div class="pt-8 border-t border-dark-300">
          Copyright 2023 - Minden jog fenntartva
        </div>
      </div>
    </div>
  </div>
</template>
