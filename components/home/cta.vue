<script setup>
const { defaultTransition } = useTailwindConfig();

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="space-y-10">
    <NuxtImg
      src="thule-bg.webp"
      class="object-cover object-left sm:object-right h-72 lg:h-full"
    />
    <div class="site-padding">
      <div class="max-w-3xl mx-auto space-y-6 text-center">
        <h2>
          {{ title }}
        </h2>
        <p>
          Tetősátraink otthonná varázsolják autódat. Bármilyen évszakban és
          időjárásban használhatod, úgy készültek, hogy könnyen felszerelhetők
          legyenek és megbízható és kényelmes szállást biztosítsanak bárhol.
        </p>
        <button
          class="px-4 py-2 font-semibold border shadow-md hover:shadow-lg duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white border-accent-100"
          :class="defaultTransition"
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
