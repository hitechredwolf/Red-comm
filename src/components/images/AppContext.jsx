// src/components/AppContext.jsx
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    // ✅ Add to Cart
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    // ✅ Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <AppContext.Provider value={{ cart, addToCart, darkMode, toggleDarkMode }}>
            <div className={darkMode ? "dark-mode" : ""}>{children}</div>
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
