export const useProductStore = defineStore('product', () => {
  const { getItemById } = useDirectusItems();
  
  const loading = ref(false)
  const product = ref();

  const fetchProductById = async (id) => {
    loading.value = true;
    try {
      const res = await getItemById({
        collection: "termekek",
        id: `${id}`,
      });
      product.value = res;
    } catch (e) {
      console.log(e);
    }
    loading.value = false;
  };

  function logProduct() {
    console.log(product.value)
  }

  return { product, loading, logProduct, fetchProductById }
})