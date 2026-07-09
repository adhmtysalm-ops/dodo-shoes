import { useEffect, useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("dodo-cart");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      }
      catch (e) {
        console.error(e);
      }
    }
  }, []);

  const addToCart = (product: any) => {
    const existing = cartItems.find(i => i.id === product.id);
    let updated;
    if (existing) {
      updated = cartItems.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
    }
    else {
      updated = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updated);
    localStorage.setItem("dodo-cart", JSON.stringify(updated));
    alert("Added to bag!");
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("dodo-cart");
  };

  return { cartItems, addToCart, clearCart };
}
