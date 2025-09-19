import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { speakers } from "./data";
import "./SpeakerDetails.css";

function SpeakerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = speakers.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product ? product.image : null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  if (!product) return <h2>Product not found!</h2>;

  const productImages = [product.image, product.image1, product.image2, product.image3];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPosition({ x, y });
    setZoomVisible(true);
  };

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>

      <div className="product-detail-layout">
        {/* Images Section */}
        <div className="images-section">
          <div className="thumbnails-container">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail-item ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="main-image-container">
            <img
              src={selectedImage}
              alt={product.name}
              className="main-image-item"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setZoomVisible(true)}
              onMouseLeave={() => setZoomVisible(false)}
              onClick={() => setIsZoomed(true)}
            />
            {zoomVisible && (
              <div
                className="zoom-preview-container"
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              ></div>
            )}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="info-section">
          <h1>{product.name}</h1>
          <div className="rating-stars">⭐⭐⭐⭐☆ <span>(120 reviews)</span></div>
          <p className="price-text">Price: <span>${product.price}</span></p>
          <p className="category-text">Category: {product.category}</p>

          <ul className="spec-list">
            {Object.entries(product.specifications).map(([key, value]) => {
              if (Array.isArray(value)) value = value.join(", ");
              return (
                <li key={key}>✅ {key.replace(/([A-Z])/g, ' $1')}: {value}</li>
              );
            })}
          </ul>

          <div className="action-buttons">
            <button className="btn add-to-cart">🛒 Add to Cart</button>
            <button className="btn buy-now-btn">⚡ Buy Now</button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isZoomed && (
        <div className="lightbox-container" onClick={() => setIsZoomed(false)}>
          <img src={selectedImage} alt="Zoomed view" />
        </div>
      )}
    </div>
  );
}

export default SpeakerDetails;
