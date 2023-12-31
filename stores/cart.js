export const useCartStore = defineStore('cartStore', () => {
  // State
  const items = ref([]);
  // const GLS = 1800;
  // const MPL = 2500;

  // Actions
  // push item to array, or increase quantity.value if already exists
  function addItems(item) {
    const index = items.value.findIndex((i) => i.id === item.id);
    if (index === -1) {
      items.value.push({ ...item, quantity: 1 });
    } else {
      items.value[index].quantity++;
    }
  }

  function clearItem(itemName) {
    // if quantity > 1, decrease quantity by 1, else remove item from array
    const index = items.value.findIndex((i) => i.name === itemName);
    if (index === -1) return;
    if (items.value[index].quantity > 1) {
      items.value[index].quantity--;
    } else {
      items.value.splice(index, 1);
    }
  }

  function $reset() {
    items.value = [];
  }

  // Getters
  const itemCount = computed(() => items.value.length);
  const isEmpty = computed(() => itemCount.value === 0);
  const cartTotal = computed(() =>
    items.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  return {
    items,
    itemCount,
    isEmpty,
    cartTotal,
    clearItem,
    $reset,
    addItems,
  };
});
