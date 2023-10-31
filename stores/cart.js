export const useCartStore = defineStore('cartStore', () => {
  // state = data
  const items = ref([]);

  // actions = functions
  function addItems(item) {
    items.value.push({ ...item });
  }

  // getters = computed
  const itemCount = computed(() => items.value.length);
  const isEmpty = computed(() => itemCount.value === 0);
  const grouped = computed(() => {
    //
  });

  return {
    items,
    itemCount,
    isEmpty,
    addItems,
  };
});
