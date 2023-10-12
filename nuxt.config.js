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
  imports: {
    // not working for some reason
    // dirs: ['./stores'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
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
