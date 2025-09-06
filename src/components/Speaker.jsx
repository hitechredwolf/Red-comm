import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Speaker.css";

// Import product images
import m1 from "../components/images/m1.jpeg";
import m2 from "../components/images/m2.jpeg";
import m3 from "../components/images/m3.jpeg";
import m4 from "../components/images/m4.jpeg";
import m5 from "../components/images/m5.jpeg";
import m6 from "../components/images/m6.jpeg";
import m7 from "../components/images/m7.jpeg";
import m8 from "../components/images/m8.jpeg";
import m9 from "../components/images/m9.jpeg";
import m10 from "../components/images/m10.jpeg";
import m11 from "../components/images/m11.jpeg";
import m12 from "../components/images/m12.jpeg";

// Dummy product data
export const dummyProducts = [
  { id: 1, name: "Speaker Alpha", price: 120, category: "Portable", image: m1, image1: m2, image2: m3, image3: m4 },
  { id: 2, name: "Speaker Beta", price: 150, category: "Portable", image: m2, image1: m2, image2: m3, image3: m4 },
  { id: 3, name: "Speaker Gamma", price: 200, category: "Home", image: m3, image1: m2, image2: m3, image3: m4 },
  { id: 4, name: "Speaker Delta", price: 90, category: "Portable", image: m4, image1: m2, image2: m3, image3: m4 },
  { id: 5, name: "Speaker Epsilon", price: 300, category: "Home", image: m5, image1: m2, image2: m3, image3: m4 },
  { id: 6, name: "Speaker Zeta", price: 250, category: "Car", image: m6, image1: m2, image2: m3, image3: m4 },
  { id: 7, name: "Speaker Eta", price: 180, category: "Home", image: m7, image1: m2, image2: m3, image3: m4 },
  { id: 8, name: "Speaker Theta", price: 220, category: "Car", image: m8, image1: m2, image2: m3, image3: m4 },
  { id: 9, name: "Speaker Iota", price: 130, category: "Portable", image: m9, image1: m2, image2: m3, image3: m4 },
  { id: 10, name: "Speaker Kappa", price: 400, category: "Home", image: m10, image1: m2, image2: m3, image3: m4 },
  { id: 11, name: "Speaker Lambda", price: 350, category: "Car", image: m11, image1: m2, image2: m3, image3: m4 },
  { id: 12, name: "Speaker Mu", price: 275, category: "Home", image: m12, image1: m2, image2: m3, image3: m4 },
];

function Speaker() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  // Apply search, filter, and sorting
  const filteredProducts = dummyProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (filter === "All" ? true : p.category === filter))
    .sort((a, b) => {
      if (sort === "price-low-high") return a.price - b.price;
      if (sort === "price-high-low") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="speaker-page">
      <div className="layout">
        {/* Sidebar Filters */}
        <div className="sidebar">
          <h3 className="sidebar-title">Filters</h3>

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />

          <label className="filter-label">Sort By</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="dropdown"
          >
            <option value="">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name">Name</option>
          </select>

          <label className="filter-label">Category</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="dropdown"
          >
            <option value="All">All</option>
            <option value="Portable">Portable</option>
            <option value="Home">Home</option>
            <option value="Car">Car</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Discount or Badge */}
              {product.price > 300 ? (
                <span className="badge hot">🔥 Best Seller</span>
              ) : (
                <span className="badge new">✨ New</span>
              )}

              {/* Wishlist Button */}
              <button className="wishlist-btn">♡</button>

              {/* Flip Card */}
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h2>{product.name}</h2>
                  <div className="rating">⭐⭐⭐⭐☆ (120)</div>
                  <p className="price">${product.price}</p>
                </div>

                {/* Back Side */}
                <div className="card-back">
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>High-quality sound with bass boost.</p>
                  <button
                    className="btn add-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`${product.name} added to cart`);
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                  <button
                    className="btn details-btn"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speaker;
