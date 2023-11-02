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

  function $reset() {
    items.value = [];
  }

  // Getters
  const itemCount = computed(() => items.value.length);
  const isEmpty = computed(() => itemCount.value === 0);
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
    // grouped,
    // groupCount,
    $reset,
    addItems,
  };
});
