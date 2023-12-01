import { markRaw } from 'vue';
import { createPinia } from 'pinia';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();

  pinia.use(({ store }) => {
    store.router = markRaw(router);
  });
});
