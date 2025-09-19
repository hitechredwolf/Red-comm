import React from "react";
import { Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./components/WishlistContext";  // ✅ Wishlist Context
import { CartProvider } from "./components/CartContext";          // ✅ Cart Context

import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

// Product Pages
import Television from "./components/Television";
import ProductDetail from "./components/ProductDetail";
import Speaker from "./components/Speaker";
import SpeakerDetails from "./components/SpeakerDetails";
import AirConditioner from "./components/AirConditioner";
import WashingMachines from "./components/WashingMachines";

import Wishlist from "./components/Wishlist";   // ✅ Wishlist Page
import Cart from "./components/Cart";           // ✅ Cart Page

import Home from "./components/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>   {/* ✅ Wrap everything with CartProvider */}
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

          {/* ✅ Wishlist & Cart Routes */}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Footer />
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
