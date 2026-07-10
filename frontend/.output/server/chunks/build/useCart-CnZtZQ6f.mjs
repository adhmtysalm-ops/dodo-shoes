import { ref } from 'vue';

const cart = ref([]);
const initialized = ref(false);
const useCart = () => {
  if (!initialized.value && false) ;
  const addToCart = (product) => {
    const item = cart.value.find((i) => i.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
  };
  const removeFromCart = (id) => {
    cart.value = cart.value.filter((i) => i.id !== id);
  };
  const updateQuantity = (id, quantity) => {
    const item = cart.value.find((i) => i.id === id);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else if (quantity === 0) {
      removeFromCart(id);
    }
  };
  const clearCart = () => {
    cart.value = [];
  };
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
};

export { useCart as u };
//# sourceMappingURL=useCart-CnZtZQ6f.mjs.map
