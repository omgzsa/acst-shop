// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },
  // devtools: true,
  head: {
    title: 'Autocsomagtarto | THULE retailer',
    htmlAttrs: {
      lang: 'hu',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-directus',
  ],
  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL,
    },
  },
  directus: {
    url: process.env.DIRECTUS_URL,
    devtools: true,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  imports: {
    dirs: ['./stores'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600],
    },
  },
  swiper: {
    modules: ['pagination'],
  },
});
