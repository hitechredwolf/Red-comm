// src/components/Speaker.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Speaker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners, speakers } from "./data";

// ✅ Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

function Speaker() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterType, setFilterType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  // ✅ Cart & Wishlist context hooks
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist } = useWishlist();

  const clearFilters = () => {
    setSearch("");
    setSort("");
    setFilterCategory("");
    setFilterType("");
  };

  const handleAddToWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item.id === product.id && item.type === "speaker"
    );
    if (exists) {
      toast.info(`${product.name} is already in your wishlist ⚠️`, { position: "top-right" });
    } else {
      addToWishlist({ ...product, type: "speaker" });
      toast.success(`${product.name} added to wishlist ❤️`, { position: "top-right" });
    }
  };

  const handleAddToCart = (product) => {
    const exists = cart.find(
      (item) => item.id === product.id && item.type === "speaker"
    );
    if (exists) {
      addToCart({ ...product, type: "speaker" }); // increase quantity
      toast.info(`${product.name} quantity increased 🛒`, { position: "bottom-right" });
    } else {
      addToCart({ ...product, type: "speaker", newPrice: product.price }); // first add
      toast.success(`${product.name} added to cart 🛒`, { position: "bottom-right" });
    }
  };

  const filteredProducts = speakers
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (filterCategory === "" ? true : p.category === filterCategory))
    .filter((p) => (filterType === "" ? true : p.specifications.type === filterType))
    .sort((a, b) => {
      if (sort === "price-low-high") return a.price - b.price;
      if (sort === "price-high-low") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="speaker-page">
      {/* ✅ Toast container */}
      <ToastContainer autoClose={2000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnHover />

      {/* ✅ Banner slider */}
      <div className="banner-slider">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Back & Filters */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <button className="show-filters-btn" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="layout">
        {/* ✅ Sidebar Filters */}
        <div className={`sidebar ${showFilters ? "visible" : ""}`}>
          <h3 className="sidebar-title">Filters</h3>

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />

          <label className="filter-label">Sort By</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="dropdown">
            <option value="">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name">Name</option>
          </select>

          <label className="filter-label">Category</label>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="dropdown">
            <option value="">All Categories</option>
            {["Portable", "Home", "Car"].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <label className="filter-label">Type</label>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="dropdown">
            <option value="">All Types</option>
            {["Portable Rechargeable Trolley Sound System"].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <button className="btn details-btn" onClick={clearFilters}>
            Clear All Filters
          </button>
        </div>

        {/* ✅ Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const originalPrice = Math.round(product.price * 1.2); // 20% higher
            const discount = "20% off";

            return (
              <div key={product.id} className="product-card">
                <div className="card-inner">
                  {/* Card Front */}
                  <div
                    className="card-front"
                    onClick={() => navigate(`/speaker/${product.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <h2 className="hed">{product.name}</h2>
                    <div className="rating">⭐⭐⭐⭐☆ (120)</div>
                    <p className="price">
                      <span className="original-price">₹{originalPrice}</span>{" "}
                      <span className="selling-price">₹{product.price}</span>
                    </p>
                    <p className="off-price">{discount}</p>
                  </div>

                  {/* Card Back */}
                  <div className="card-back">
                    <button
                      className="heart-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToWishlist(product);
                      }}
                    >
                      ❤️
                    </button>
                    <p>
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p>High-quality sound with bass boost.</p>
                    <div className="card-buttons">
                      <button
                        className="btn add-cart"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        🛒 Add to Cart
                      </button>
                      <button
                        className="btn details-btn"
                        onClick={() => navigate(`/speaker/${product.id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && <p>No speakers found.</p>}
        </div>
      </div>
    </div>
  );
}

export default Speaker;