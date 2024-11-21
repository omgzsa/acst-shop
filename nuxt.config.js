// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        // Injecting your script
        {
          innerHTML: `
            // Create BP element on the window
            window["bp"] = window["bp"] || function () {
                (window["bp"].q = window["bp"].q || []).push(arguments);
            };
            window["bp"].l = 1 * new Date();

            // Insert a script tag on the top of the head to load bp.js
            var scriptElement = document.createElement("script");
            var firstScript = document.getElementsByTagName("script")[0];
            scriptElement.async = true;
            scriptElement.src = 'https://pixel.barion.com/bp.js';
            firstScript.parentNode.insertBefore(scriptElement, firstScript);
            window['barion_pixel_id'] = 'BPT-5f4ezRYJJ5-22';            

            // Send init event
            bp('init', 'addBarionPixelId', window['barion_pixel_id']);
          `,
        },
      ],
      noscript: [
        {
          tagName: 'img',
          attrs: {
            height: '1',
            width: '1',
            style: 'display:none',
            alt: 'Barion Pixel',
            src: "https://pixel.barion.com/a.gif?ba_pixel_id='BPT-5f4ezRYJJ5-22'&ev=contentView&noscript=1",
          },
        },
      ],
    },
  },

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
    title: 'Autócsomagtartó | Hivatalos THULE kiskereskedés',
    htmlAttrs: {
      lang: 'hu',
    },
  },

  css: ['vue-final-modal/style.css'],

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
    '@vee-validate/nuxt',
  ],

  runtimeConfig: {
    barion: {
      posKey: '',
      testUrl: '',
    },
  },

  devServer: {
    port: 8080,
  },

  directus: {
    url: process.env.NUXT_DIRECTUS_URL,
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
    autoImports: true,
  },

  compatibilityDate: '2024-11-21',
});