// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // devtools: true,
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
  },
  head: {
    title: 'Autocsomagtarto | THULE retailer',
    htmlAttrs: {
      lang: 'hu',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@tailwindcss/forms',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-directus',
  ],
  runtimeConfig: {
    public: {
      directusUrl: process.env.NUXT_DIRECTUS_URL,
    },
  },
  directus: {
    url: process.env.NUXT_DIRECTUS_URL,
    devtools: true,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  // public: {
  //   motion: {
  //     directives: {
  //       'pop-bottom': {
  //         initial: {
  //           scale: 0,
  //           opacity: 0,
  //           y: 100,
  //         },
  //         visible: {
  //           scale: 1,
  //           opacity: 1,
  //           y: 0,
  //         },
  //       },
  //     },
  //   },
  // },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    plugins: ['@tailwindcss/forms'],
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600],
    },
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
  },
  swiper: {
    modules: ['pagination'],
  },
});
