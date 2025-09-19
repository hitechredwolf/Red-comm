// src/components/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// ✅ Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  // ✅ Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add product
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find(
        (item) => item.id === product.id && item.type === product.type
      );
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id && item.type === product.type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove product
  const removeFromCart = (id, type) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.type === type))
    );
  };

  // ✅ Increase quantity
  const increaseQuantity = (id, type) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.type === type
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQuantity = (id, type) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.type === type && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
