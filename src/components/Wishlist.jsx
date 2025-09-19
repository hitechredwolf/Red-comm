// src/components/Wishlist.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrashAlt } from "react-icons/fa"; // ✅ Icons
import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  // ✅ Load wishlist items from localStorage
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // ✅ Remove from wishlist
  const removeFromWishlist = (id, type) => {
    const updatedWishlist = wishlist.filter(
      (item) => !(item.id === id && item.type === type)
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.location.reload(); // Refresh page to update UI
  };

  return (
    <div className="wishlist-container">
      {/* Back Button */}
      <button className="wishlist-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Title */}
      <h2 className="wishlist-title">My Wishlist</h2>

      {/* Empty Wishlist */}
      {wishlist.length === 0 ? (
        <p className="wishlist-empty-text">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((item) => (
            <div key={item.id + item.type} className="wishlist-item">
              {/* Product Image */}
              <div className="wishlist-image-section">
                <img
                  src={item.image || item.img}
                  alt={item.name}
                  onClick={() => navigate(`/${item.type}/${item.id}`)}
                  style={{ cursor: "pointer" }}
                />
              </div>

              {/* Product Details */}
              <div className="wishlist-details-section">
                <h3 className="wishlist-product-name">{item.name}</h3>
                <div className="wishlist-rating">⭐⭐⭐⭐☆ (120)</div>
                <p className="wishlist-price">₹{item.price || item.newPrice}</p>
                {item.oldPrice && (
                  <p className="wishlist-old-price">Old Price: ₹{item.oldPrice}</p>
                )}
                {item.discount && (
                  <p className="wishlist-discount">Save {item.discount}</p>
                )}
                <p>
                  <strong>Category:</strong> {item.category}
                </p>
                <p>
                  <strong>Type:</strong> {item.type}
                </p>
              </div>

              {/* Action Icons */}
              <div className="wishlist-actions">
                <FaEye
                  className="wishlist-icon view-icon"
                  title="View Details"
                  onClick={() => navigate(`/${item.type}/${item.id}`)}
                />
                <FaTrashAlt
                  className="wishlist-icon remove-icon"
                  title="Remove from Wishlist"
                  onClick={() => removeFromWishlist(item.id, item.type)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
