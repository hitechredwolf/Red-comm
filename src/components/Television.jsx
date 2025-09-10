import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Television.css";
import { televisions } from "../components/data";

const Television = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Default");
  const [category, setCategory] = useState("All");

  // ✅ Filtering Logic
  const filteredTVs = televisions
    .filter((tv) =>
      tv.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((tv) =>
      category === "All" ? true : tv.size === category
    )
    .sort((a, b) => {
      if (sort === "Price: Low to High") return a.newPrice - b.newPrice;
      if (sort === "Price: High to Low") return b.newPrice - a.newPrice;
      if (sort === "Newest") return b.id - a.id; // assuming id represents newest
      return 0; // Default
    });

  return (
    <div className="television-page">
      {/* Back Button */}
      <div className="back-btn-wrapper">
        <Link to="/" className="back-btn">⬅ Back</Link>
      </div>

      {/* ✅ Filter Toggle Button (Mobile) */}
      <button
        className="filter-toggle-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Left Filters Section */}
      <aside className={`filters ${showFilters ? "open" : ""}`}>
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-group">
          <label>Sort By</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>32 Inch</option>
            <option>43 Inch</option>
            <option>55 Inch</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <div className="television-container">
        <h2 className="television-title">Latest LED Televisions</h2>
        <div className="television-grid">
          {filteredTVs.length > 0 ? (
            filteredTVs.map((tv) => (
              <div key={tv.id} className="television-card">
                {/* Badge */}
                {tv.badge && (
                  <span className={`badge ${tv.badgeType}`}>{tv.badge}</span>
                )}

                {/* Product Image */}
                <Link to={`/television/${tv.id}`}>
                  <img src={tv.img} alt={tv.name} className="television-image" />
                </Link>

                {/* Product Info */}
                <h3>{tv.name}</h3>
                <p className="television-price">
                  <span className="old-price">₹{tv.oldPrice}</span>{" "}
                  <span className="new-price">₹{tv.newPrice}</span>
                </p>
                <p className="television-discount">Save {tv.discount}</p>

                {/* Buttons */}
                <button className="cart-btn">🛒 Add to Cart</button>
                <Link to={`/television/${tv.id}`} className="details-btn">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No products found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Television;
