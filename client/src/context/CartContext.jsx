/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, size) {
    setCart(prev => [
      ...prev,
      { ...product, size, quantity: 1 },
    ]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
