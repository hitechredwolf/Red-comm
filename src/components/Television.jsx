import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Television.css";
import Slider from "react-slick"; // ✅ Slider import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { televisions, banner } from "../components/data";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false, // mobile/tablet pe arrows hide
        dots: true,
      },
    },
  ],
};

const Television = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Default");
  const [category, setCategory] = useState("All");

  const navigate = useNavigate();

  const handleCardClick = (tv, event) => {
    if (window.innerWidth <= 768) {
      navigate(`/television/${tv.id}`);
    }
  };

  const filteredTelevisions = televisions
    .filter(tv =>
      tv.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(tv =>
      category === "All" ? true : tv.size === category
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") {
        return a.newPrice - b.newPrice;
      } else if (sortBy === "Price: High to Low") {
        return b.newPrice - a.newPrice;
      } else if (sortBy === "Newest") {
        return b.id - a.id;
      } else {
        return 0;
      }
    });

  return (
    <div className="television-page">
      <div className="back-btn-wrapper">
        <Link to="/" className="back-btn">⬅ Back</Link>
      </div>

      <button
        className="filter-toggle-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* banner  */}
      <div className="banner-slider">
        <Slider {...settings}>
          {banner.map((banner, index) => (
            <div key={index}>
              <img src={banner} alt={`banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <aside className={`filters ${showFilters ? "open" : ""}`}>
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-group">
          <label>Sort By</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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
            <option>24 Inch</option>
            <option>32 Inch</option>
            <option>43 Inch</option>
            <option>55 Inch</option>
            <option>65 Inch</option>
            <option>75 Inch</option>
            <option>85 Inch</option>
            <option>98 Inch</option>
          </select>
        </div>
      </aside>

      <div className="television-container">
        <h2 className="television-title">Latest LED Televisions</h2>
        <div className="television-grid">
          {filteredTelevisions.map((tv) => (
            <div key={tv.id} className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  onClick={(e) => handleCardClick(tv, e)}
                >
                  {tv.badge && <span className={`badge ${tv.badgeType}`}>{tv.badge}</span>}
                  <img src={tv.img} alt={tv.name} className="television-image" />
                  <h3>{tv.name}</h3>
                  <p className="rating">⭐ {tv.rating ? tv.rating : "4.5"}</p>
                  <p className="television-price">
                    <span className="old-price">₹{tv.oldPrice}</span>{" "}
                    <span className="new-price">₹{tv.newPrice}</span>
                  </p>
                  <p className="television-discount">Save {tv.discount}</p>
                </div>

                <div className="flip-card-back">
                  <p className="category-label">{tv.category}</p>
                  <p className="display-label">{tv.display}</p>
                  <div className="card-buttons">
                    <button className="btn add-cart">🛒 Add to Cart</button>
                    <Link to={`/television/${tv.id}`} className="btn details-btn">
                      View Details
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Television;
