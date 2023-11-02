import { defineStore } from 'pinia';
// import { groupBy } from 'lodash-es';

// State
export const useCartStore = defineStore('cartStore', () => {
  const items = ref([]);
  // const AFA = 1.27;

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
  const itemQuantity = computed((name) => {
    const index = items.value.findIndex((i) => i.name === name);
    return index === -1 ? 0 : items.value[index].quantity;
  });
  // const grouped = computed(() => groupBy(items.value, (item) => item.name));
  // const groupCount = computed((name) => items.value[name].length);
  const cartTotal = computed(() =>
    items.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  return {
    items,
    itemCount,
    isEmpty,
    cartTotal,
    itemQuantity,
    clearItem,
    $reset,
    addItems,
  };
});
