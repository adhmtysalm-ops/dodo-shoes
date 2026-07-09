import { ref, watch } from 'vue'

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const cart = ref<CartItem[]>([])
const initialized = ref(false)

export const useCart = () => {
  if (!initialized.value && import.meta.client) {
    const saved = localStorage.getItem('dodo-shoes-cart')
    if (saved) {
      try {
        cart.value = JSON.parse(saved)
      } catch (e) {
        cart.value = []
      }
    }
    initialized.value = true

    watch(cart, (newVal) => {
      localStorage.setItem('dodo-shoes-cart', JSON.stringify(newVal))
    }, { deep: true })
  }

  const addToCart = (product: any) => {
    const item = cart.value.find(i => i.id === product.id)
    if (item) {
      item.quantity += 1
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }
  }

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter(i => i.id !== id)
  }

  const updateQuantity = (id: number, quantity: number) => {
    const item = cart.value.find(i => i.id === id)
    if (item && quantity > 0) {
      item.quantity = quantity
    } else if (quantity === 0) {
      removeFromCart(id)
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}
