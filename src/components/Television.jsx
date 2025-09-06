import React, { useState } from "react";
import "./Television.css";

const televisions = [
  {
    id: 1,
    name: "Cellecor Smart TV E-32X (32 Inch)",
    oldPrice: 15999,
    newPrice: 10140,
    discount: "22%",
    size: "32 Inch",
    img: "https://cellecor.com/cdn/shop/files/E32N_01copy.png?v=1686556768",
    soldOut: true,
    resolution: "HD Ready",
    description:
      "A 32-inch HD Ready Smart TV with vibrant picture quality, HDMI support, and smart apps.",
  },
  {
    id: 2,
    name: "Cellecor Smart TV E-40V (40 Inch)",
    oldPrice: 25999,
    newPrice: 11700,
    discount: "31%",
    size: "40 Inch",
    img: "https://cellecor.com/cdn/shop/files/E32N_01copy.png?v=1686556768",
    soldOut: false,
    resolution: "1080p Full HD",
    description:
      "40-inch Full HD Smart TV with Netflix, YouTube, Prime Video, and Hotstar built-in.",
  },
  {
    id: 3,
    name: "Cellecor Smart TV E-32X (32 Inch)",
    oldPrice: 15999,
    newPrice: 12140,
    discount: "22%",
    size: "32 Inch",
    img: "https://cellecor.com/cdn/shop/files/E32N_01copy.png?v=1686556768",
    soldOut: true,
    resolution: "HD Ready",
    description:
      "A 32-inch HD Ready Smart TV with vibrant picture quality, HDMI support, and smart apps.",
  },
  {
    id: 4,
    name: "Cellecor Smart TV E-40V (40 Inch)",
    oldPrice: 25999,
    newPrice: 15700,
    discount: "31%",
    size: "40 Inch",
    img: "https://cellecor.com/cdn/shop/files/E32N_01copy.png?v=1686556768",
    soldOut: false,
    resolution: "1080p Full HD",
    description:
      "40-inch Full HD Smart TV with Netflix, YouTube, Prime Video, and Hotstar built-in.",
  },
  {
    id: 5,
    name: "Cellecor Smart TV E-40V (40 Inch)",
    oldPrice: 25999,
    newPrice: 16700,
    discount: "31%",
    size: "40 Inch",
    img: "https://cellecor.com/cdn/shop/files/E32N_01copy.png?v=1686556768",
    soldOut: false,
    resolution: "1080p Full HD",
    description:
      "40-inch Full HD Smart TV with Netflix, YouTube, Prime Video, and Hotstar built-in.",
  },
  // ... baaki TVs same as tumhare code me hai
];

const Television = () => {
  const [price, setPrice] = useState(100000);
  const [availability, setAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  // ✅ CLEAR ALL button ka function
  const clearAllFilters = () => {
    setPrice(100000);
    setAvailability("all");
    setSortBy("featured");
  };

  // filter logic
  let filteredTVs = televisions.filter((tv) => {
    const withinPrice = tv.newPrice <= price;
    const availabilityMatch =
      availability === "all"
        ? true
        : availability === "inStock"
          ? !tv.soldOut
          : tv.soldOut;
    return withinPrice && availabilityMatch && !tv.soldOut; // ✅ sirf in-stock dikhao
  });

  // sorting logic
  if (sortBy === "priceLowHigh") {
    filteredTVs = filteredTVs.sort((a, b) => a.newPrice - b.newPrice);
  } else if (sortBy === "priceHighLow") {
    filteredTVs = filteredTVs.sort((a, b) => b.newPrice - a.newPrice);
  } else if (sortBy === "nameAZ") {
    filteredTVs = filteredTVs.sort((a, b) => a.name.localeCompare(b.name));
  }

  // zoom handlers
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPosition({ x, y });
    setZoomVisible(true);
  };

  const handleMouseLeave = () => {
    setZoomVisible(false);
  };

  if (selectedProduct) {
    const { name, img, newPrice, oldPrice, resolution, description, discount } =
      selectedProduct;

    const images = [
      img,
      "https://images.samsung.com/is/image/samsung/p6pim/in/ua43f5550fuxxl/gallery/in-fhd-f5500-548422-ua43f5550fuxxl-546515618?$684_547_PNG$",
      "https://cellecor.com/cdn/shop/files/E40V_02.png?v=1686919758",
      "https://cellecor.com/cdn/shop/files/E40V_05.png?v=1686919758",
      "https://cellecor.com/cdn/shop/files/E40V_06-1.png?v=1686919758",
    ];

    return (
      <div className="product-detail-page">
        <button
          className="back-btn"
          onClick={() => {
            setSelectedProduct(null);
            setSelectedImg(null);
            setActiveTab("description");
          }}
        >
          ← Back
        </button>

        <div className="detail-container">
          {/* Left: Image Gallery */}
          <div className="detail-img">
            <div className="gallery">
              <div className="thumbnail-list">
                {images.map((i, index) => (
                  <img
                    key={index}
                    src={i}
                    alt="thumb"
                    className={`thumbnail ${selectedImg === i ? "active" : ""}`}
                    onClick={() => setSelectedImg(i)}
                  />
                ))}
              </div>
              <div
                className="main-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src={selectedImg || img} alt={name} />
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="detail-info">
            <h2>{name}</h2>
            <div className="rating">⭐⭐⭐⭐⭐ (2 Reviews)</div>
            <p className="stock">✔ In stock and ready to ship</p>

            <div className="price-box">
              <p className="old-price">Rs. {oldPrice}</p>
              <p className="new-price">Rs. {newPrice}</p>
              <span className="discount">Save {discount}</span>
            </div>

            <p className="resolution">{resolution}</p>

            <div className="detail-buttons">
              <input type="number" min="1" defaultValue="1" className="qty" />
              <button className="cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy Now</button>
            </div>

            <div className="extra-info">
              <p>🚚 Free Shipping</p>
              <p>🔒 Secure Payment</p>
              <p>7 Days Replacement</p>
            </div>

            <div className="shipping-box">
              <input type="text" placeholder="Enter your pincode" />
              <button>Check</button>
            </div>
          </div>
        </div>

        {zoomVisible && (
          <div
            className="zoom-preview"
            style={{
              backgroundImage: `url(${selectedImg || img})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          ></div>
        )}

        <div className="tabs">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "specs" ? "active" : ""}
            onClick={() => setActiveTab("specs")}
          >
            Product Specification
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" ? (
            <p>{description}</p>
          ) : (
            <ul>
              <li>Resolution: {resolution}</li>
              <li>Screen Size: 40 Inch</li>
              <li>Smart TV: Yes</li>
              <li>HDMI Ports: 2</li>
              <li>USB Ports: 2</li>
              <li>Warranty: 2 Years</li>
            </ul>
          )}
        </div>

        <div className="reviews-section">
          <h3>Customer Reviews</h3>
          <p>⭐ 5.0/5 (Based on 2 reviews)</p>
          <div className="review">
            <strong>Anonymous</strong>
            <p>Best TV</p>
          </div>
          <div className="review">
            <strong>Saikiran Paladugula</strong>
            <p>I am very happy with the buy :)</p>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Main Product List
  return (
    <div className="television-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Price</h2>
        <div className="price-filter">
          <input
            type="range"
            min="10000"
            max="100000"
            step="1000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <div className="price-range">₹10000 - ₹{price}</div>
        </div>

        <h2>Availability</h2>
        <div className="availability">
          <label>
            <input
              type="radio"
              name="availability"
              checked={availability === "all"}
              onChange={() => setAvailability("all")}
            />{" "}
            All
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              checked={availability === "inStock"}
              onChange={() => setAvailability("inStock")}
            />{" "}
            In Stock
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              checked={availability === "outOfStock"}
              onChange={() => setAvailability("outOfStock")}
            />{" "}
            Out of Stock
          </label>
        </div>

        {/* ✅ Clear All button */}
        <button className="clear-btn" onClick={clearAllFilters}>
          Clear All
        </button>
      </aside>

      {/* Product Grid */}
      <main className="product-section">
        <div className="product-header">
          <h1>Smart TV</h1>
          <div className="filters">
            <select>
              <option>20 items per page</option>
              <option>40 items per page</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Sort by Featured</option>
              <option value="priceLowHigh">Sort by Price: Low to High</option>
              <option value="priceHighLow">Sort by Price: High to Low</option>
              <option value="nameAZ">Sort by Name (A–Z)</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {filteredTVs.length > 0 ? (
            filteredTVs.map((tv) => (
              <div
                key={tv.id}
                className="product-card"
                onClick={() => {
                  setSelectedProduct(tv);
                  setSelectedImg(tv.img);
                }}
              >
                <span className="discount">Save {tv.discount}</span>
                <img src={tv.img} alt={tv.name} />
                <h3>{tv.name}</h3>
                <p className="old-price">Rs. {tv.oldPrice}</p>
                <p className="new-price">Rs. {tv.newPrice}</p>
                <p className="resolution">{tv.resolution}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No products found</p>
          )}
        </div>

        {/* ✅ Out of Stock Section */}
        <h2>Out of Stock</h2>
        <div className="product-grid out-stock">
          {televisions
            .filter((tv) => tv.soldOut)
            .map((tv) => (
              <div key={tv.id} className="product-card sold">
                <span className="sold-out">Sold Out</span>
                <img src={tv.img} alt={tv.name} />
                <h3>{tv.name}</h3>
                <p className="old-price">Rs. {tv.oldPrice}</p>
                <p className="new-price">Rs. {tv.newPrice}</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Television;
