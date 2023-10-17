<script setup>
const { width, height } = useWindowSize();

const { defaultTransition } = useTailwindConfig();

defineProps({
  title: String,
  required: true,
});

// a function that watches the window size and renders the appropriate image

const bgImage = computed(() => {
  if (width.value > 1137) {
    return 'hero-bg.webp';
  } else if (width.value > 750) {
    return 'hero-bg-hd-1137x630.webp';
  } else if (width.value > 393) {
    return 'hero-bg-tablet-750x630.webp';
  } else {
    return 'hero-bg-mobile-2-393x630.webp';
  }
});
</script>

<template>
  <section
    class="relative z-10 min-h-[630px] bg-center bg-no-repeat bg-cover hero"
  >
    <div class="absolute min-h-[630px] inset-0 z-0 bg-gray-900 bg-opacity-50">
      <img
        class="object-cover w-full h-full"
        :src="useAsset(`images/homepage/${bgImage}`)"
        alt="hero-bg"
      />
      <!-- <NuxtImg
        class="object-cover w-full h-full"
        src="hero-bg.webp"
        alt="hero-bg"
      /> -->
    </div>
    <div
      class="relative z-20 flex items-center min-h-full px-4 mx-auto max-w-screen-2xl sm:px-6 md:px-8 xl:px-12"
    >
      <div
        class="max-w-xs ml-auto mr-auto space-y-20 text-center text-white sm:ml-0 sm:space-y-6 sm:text-left sm:max-w-lg xl:max-w-3xl"
      >
        <h1>
          {{ title }}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vitae sollicitudin nascetur
          quis aenean enim arcu sagittis pellentesque. Eget rhoncus morbi vitae
          tellus id ac leo velit arcu.
        </p>
        <button
          class="px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md border-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
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
  </section>
</template>

<style>
/* .hero {
  background-image: url('/assets/images/homepage/hero-bg.webp');
  width: 100%;
  height: 630px;
}

@media screen and (max-width: 1137px) {
  .hero {
    background-image: url('/assets/images/homepage/hero-bg-hd-1137x630.webp');
  }
}

@media screen and (max-width: 750px) {
  .hero {
    background-image: url('/assets/images/homepage/hero-bg-tablet-750x630.webp');
  }
}

@media screen and (max-width: 393px) {
  .hero {
    background-image: url('/assets/images/homepage/hero-bg-mobile-2-393x630.webp');
    height: 783px;
  }
} */
</style>
