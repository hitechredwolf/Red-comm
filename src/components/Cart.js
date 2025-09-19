// src/components/Cart.js
import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  // ✅ Calculate total dynamically
  const total = cart.reduce(
    (sum, item) => sum + (item.newPrice || item.price) * item.quantity,
    0
  );

  // ✅ Handle clicking on product image
  const handleImageClick = (item) => {
    if (item.type === "speaker") {
      navigate(`/speaker/${item.id}`);
    } else if (item.type === "television") {
      navigate(`/television/${item.id}`);
    }
  };

  return (
    <div className="cart-page">
      {/* ✅ Back button same style as wishlist */}
      <button className="cart-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="cart-title">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id + item.type} className="cart-item">
              {/* ✅ Product Image (clickable) */}
              <img
                src={item.img || item.image}
                alt={item.name}
                className="cart-img"
                onClick={() => handleImageClick(item)}
              />

              {/* ✅ Product Details */}
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="cart-price">₹{item.newPrice || item.price}</p>

                {/* ✅ Quantity Controls */}
                <div className="cart-controls">
                  <button
                    onClick={() => decreaseQuantity(item.id, item.type)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id, item.type)}>
                    +
                  </button>
                </div>

                {/* ✅ Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.type)}
                >
                  ❌ Remove
                </button>
              </div>

              {/* ✅ Item Total */}
              <div className="item-total">
                ₹{(item.newPrice || item.price) * item.quantity}
              </div>
            </div>
          ))}

          {/* ✅ Grand Total */}
          <div className="cart-footer">
            <h3 className="cart-total">Grand Total: ₹{total.toLocaleString()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
