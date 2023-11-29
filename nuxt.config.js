// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: true,
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
    '@formkit/nuxt',
  ],
  runtimeConfig: {
    public: {
      directusUrl: process.env.NUXT_DIRECTUS_URL,
    },
  },
  devServer: {
    // port: 3001,
  },
  directus: {
    url: process.env.NUXT_DIRECTUS_URL,
    devtools: true,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
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
  formkit: {
    configFile: './formkit.config.js',
  },
});
