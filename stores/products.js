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
  const productIdOne = computed(() => {
    return products.value.filter((product) => product.id === 1);
  });

  return {
    products,
    productIdOne,
    fetchProducts,
  };
});
