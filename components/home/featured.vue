<script setup>
//
</script>

<template>
  <div class="relative z-10 px-1 pb-16 space-y-16">
    <!-- THULE garancia -->
    <div class="z-0 grid items-center gap-6 site-padding sm:grid-cols-2">
      <div class="relative img-container-first sm:order-2">
        <NuxtImg
          src="/thule-garancia-img.webp"
          class="object-cover object-left w-full h-full"
        />
      </div>
      <div class="p-1.5 max-w-lg mx-auto space-y-6">
        <Icon
          name="mdi:shield-check-outline"
          class="p-1.5 rounded-full w-10 h-10 bg-accent-100"
        />
        <h3>Eredeti THULE garancia minden termékre</h3>
        <p>
          Kiemelt THULE Partnerként minden termékünk az eredetivel megegyező
          garancia idővel rendelkezik. Így biztosítjuk számodra a termékek
          megbízhatóságát és hosszantartósságát.
        </p>
      </div>
    </div>

    <!-- THULE kiemelt kategoria CTA -->
    <div class="grid items-center gap-6 site-padding sm:grid-cols-2">
      <div class="relative img-container-second">
        <NuxtImg
          src="/thule-featured-img.webp"
          class="object-cover object-left w-full h-full"
        />
      </div>

      <div class="p-1.5 max-w-lg mx-auto space-y-6">
        <h3>Könnyen felszerelhető tetőcsomagtartók és boxok</h3>
        <p>
          Férj el kényelmesen télen is autódban. A pakolás a téli kirándulásra
          sosem volt még ilyen egyszerű mint a THULE csomagtartóival.
        </p>
        <button
          class="px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md border-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
        >
          <NuxtLink to="/">
            <span class="text-base leading-snug tracking-wide xl:text-lg">
              Nézd meg termékeink!
            </span></NuxtLink
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.img-container-first::after {
  content: '';
  position: absolute;
  inset: -20px -20px -20px auto;
  width: 80%;
  height: 40%;
  background-color: #d2ff52;
  z-index: -1;
}

.img-container-second::after {
  content: '';
  position: absolute;
  inset: -20px auto auto -20px;
  width: 80%;
  height: 40%;
  background-color: #d2ff52;
  z-index: -1;
}
</style>
