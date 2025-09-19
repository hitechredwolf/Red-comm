// src/components/WishlistContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const WishlistContext = createContext();

// Provider component
export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add an item to wishlist
  const addToWishlist = (item) => {
    const exists = wishlist.find(
      (w) => w.id === item.id && w.type === item.type
    );
    if (!exists) {
      setWishlist([...wishlist, item]);
    }
  };

  // Remove an item from wishlist
  const removeFromWishlist = (id, type) => {
    setWishlist(wishlist.filter((item) => !(item.id === id && item.type === type)));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to use the wishlist
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
