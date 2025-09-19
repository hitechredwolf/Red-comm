import React, { useContext } from "react";
import { CartContext } from "./AppContext";
import "./Cart.css";

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);

    return (
        <div className="unique-cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="unique-cart-empty">Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="unique-cart-item">
                            <img src={item.img} alt={item.name} className="unique-cart-item-img" />

                            <div className="unique-cart-item-details">
                                <h3>{item.name}</h3>
                                <p>₹{item.newPrice}</p>

                                <div className="unique-cart-quantity-controls">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>

                                <button className="unique-cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="unique-cart-summary">
                        <h3>Total: ₹{totalPrice}</h3>
                        <button className="unique-cart-checkout-btn">Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
