export const useProductStore = defineStore('productStore', () => {
  const { getItems } = useDirectusItems();

  // state = data
  const products = ref([]);

  // actions = functions
  async function fetchProducts() {
    products.value = await getItems({
      collection: 'termekek',
      fields: ['*.*'],
    });
  }

  // getters = computed

  return {
    products,
    fetchProducts,
  };
});
