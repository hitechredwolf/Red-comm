import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Speaker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import data from data.js
import { banners, speakers } from "./data";

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

  const clearFilters = () => {
    setSearch("");
    setSort("");
    setFilterCategory("");
    setFilterType("");
  };

  const filteredProducts = speakers
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      filterCategory === "" ? true : p.category === filterCategory
    )
    .filter((p) =>
      filterType === "" ? true : p.specifications.type === filterType
    )
    .sort((a, b) => {
      if (sort === "price-low-high") return a.price - b.price;
      if (sort === "price-high-low") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="speaker-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="banner-slider">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <button
        className="show-filters-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="layout">
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
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="dropdown"
          >
            <option value="">All Categories</option>
            {["Portable", "Home", "Car"].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label className="filter-label">Type</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="dropdown"
          >
            <option value="">All Types</option>
            {[
              "Portable Rechargeable Trolley Sound System",
              // Add more types here if needed
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button className="btn details-btn" onClick={clearFilters}>
            Clear All Filters
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-inner">
                <div className="card-front">
                  <div
                    className="product-image"
                    onClick={() => navigate(`/speaker/${product.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h2 className="hed">{product.name}</h2>
                  <div className="rating">⭐⭐⭐⭐☆ (120)</div>
                  <p className="price">${product.price}</p>
                  <p className="off">${product.off}</p>
                </div>

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
                    onClick={() => navigate(`/speaker/${product.id}`)}
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
