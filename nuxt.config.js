// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },
  ssr: true,
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
    'nuxt-lodash',
    '@vee-validate/nuxt',
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
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    // componentNames: {
    //   Form: 'VeeForm',
    //   Field: 'VeeField',
    //   FieldArray: 'VeeFieldArray',
    //   ErrorMessage: 'VeeErrorMessage',
    // },
  },
});
