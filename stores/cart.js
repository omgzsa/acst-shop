export const useCartStore = defineStore('cartStore', () => {
  // State
  const items = ref([]);
  const deliveryMethod = ref(''); // Initially unset
  const GLS = ref(3500);
  const MPL = ref(8000);

  // Actions
  function addItems(item) {
    const index = items.value.findIndex((i) => i.id === item.id);
    if (index === -1) {
      items.value.push({ ...item, quantity: 1 });
    } else {
      items.value[index].quantity++;
    }
  }

  function clearItem(itemName) {
    const index = items.value.findIndex((i) => i.name === itemName);
    if (index === -1) return;
    if (items.value[index].quantity > 1) {
      items.value[index].quantity--;
    } else {
      items.value.splice(index, 1);
    }
  }

  function cartReset() {
    items.value = [];
    deliveryMethod.value = ''; // Reset delivery method as well
  }

  function setDeliveryMode(mode) {
    deliveryMethod.value = mode;

    // Implement any additional logic needed when updating delivery mode
    // (e.g., recalculate cart total, update UI, etc.)
  }

  // Getters
  const itemCount = computed(() => items.value.length);
  const isEmpty = computed(() => itemCount.value === 0);

  // Calculate delivery cost based on selected method
  const deliveryCost = computed(() => {
    switch (deliveryMethod.value) {
      case 'personal':
        return 0; // free delivery
      case 'POSTA':
        // Implement calculated MPL cost here (consider postal code, etc.)
        return MPL.value;
      case 'GLS':
        return GLS.value;
      default:
        return 0; // no delivery cost if none selected
    }
  });

  // Calculate total cost as the sum of cart items and delivery
  const cartTotal = computed(() => {
    return (
      items.value.reduce((acc, item) => acc + item.price * item.quantity, 0) +
      deliveryCost.value
    );
  });

  return {
    items,
    itemCount,
    isEmpty,
    cartTotal,
    clearItem,
    cartReset,
    addItems,
    deliveryMethod,
    deliveryCost,
    setDeliveryMode,
  };
});
