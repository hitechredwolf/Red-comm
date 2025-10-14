import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./components/WishlistContext";
import { CartProvider } from "./components/CartContext";

import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

import Loading from "./components/Loading";
import CookieConsent from "./components/CookieConsent";  // ✅ NEW

// Product Pages
import Television from "./components/Television";
import ProductDetail from "./components/ProductDetail";
import Speaker from "./components/Speaker";
import SpeakerDetails from "./components/SpeakerDetails";
import AirConditioner from "./components/AirConditioner";
import WashingMachines from "./components/WashingMachines";

import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";

import Home from "./components/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(null);

  useEffect(() => {
    // Loading for 5 sec
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Check if cookies already accepted/rejected
    const savedConsent = localStorage.getItem("cookiesAccepted");
    if (savedConsent) {
      setCookiesAccepted(savedConsent === "true");
    }

    return () => clearTimeout(timer);
  }, []);

  const handleCookieChoice = (choice) => {
    setCookiesAccepted(choice);
    localStorage.setItem("cookiesAccepted", choice);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <WishlistProvider>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/television" element={<Television />} />
          <Route path="/television/:id" element={<ProductDetail />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/speaker/:id" element={<SpeakerDetails />} />
          <Route path="/washing-machines" element={<WashingMachines />} />
          <Route path="/air-conditioner" element={<AirConditioner />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Footer />

        {/* ✅ Show Cookie Popup only if no choice yet */}
        {cookiesAccepted === null && (
          <CookieConsent onChoice={handleCookieChoice} />
        )}
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
