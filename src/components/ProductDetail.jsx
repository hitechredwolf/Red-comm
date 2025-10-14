// src/components/ProductDetail.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { televisions } from "./data";
import "./ProductDetails.css";

// ✅ Cart & Wishlist
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

// ✅ Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
    const { id } = useParams();
    const product = televisions.find((tv) => tv.id === parseInt(id));

    const [selectedImage, setSelectedImage] = useState(
        product?.images ? product.images[0] : product?.img
    );
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const { cart, addToCart } = useCart();
    const { wishlist, addToWishlist } = useWishlist();

    if (!product) return <h2>Product not found!</h2>;

    // ✅ Add to Wishlist
    const handleAddToWishlist = () => {
        const exists = wishlist.find(
            (item) => item.id === product.id && item.type === "television"
        );
        if (exists) {
            toast.info(`${product.name} is already in your wishlist ⚠️`);
        } else {
            addToWishlist({ ...product, type: "television" });
            toast.success(`${product.name} added to wishlist ❤️`);
        }
    };

    // ✅ Add to Cart
    const handleAddToCart = () => {
        const exists = cart.find(
            (item) => item.id === product.id && item.type === "television"
        );
        if (exists) {
            addToCart({ ...product, type: "television", quantity: Number(quantity) });
            toast.info(`${product.name} quantity updated 🛒`);
        } else {
            addToCart({
                ...product,
                type: "television",
                newPrice: product.newPrice,
                quantity: Number(quantity),
            });
            toast.success(`${product.name} added to cart 🛒`);
        }
    };

    return (
        <div className="details-page">
            {/* ✅ Toast Container */}
            <ToastContainer autoClose={2000} hideProgressBar />

            {/* Back Button */}
            <div className="back-btn-wrapper">
                <button onClick={() => navigate(-1)} className="back-btn">
                    ⬅ Back
                </button>
            </div>

            <div className="details-grid">
                {/* LEFT COLUMN (Thumbnails) */}
                <div className="left-thumbnails">
                    {product.images?.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={product.name}
                            className={selectedImage === img ? "active" : ""}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                {/* CENTER COLUMN (Main Image + Info) */}
                <div className="center-info">
                    <div className="main-image">
                        <img src={selectedImage} alt={product.name} />
                    </div>

                    <h2 className="product-title">{product.name}</h2>
                    <p className="rating">⭐ 4.1 | 341 ratings</p>

                    {/* Price Section */}
                    <p className="price">
                        <span className="old-price">₹{product.oldPrice}</span>{" "}
                        <span className="new-price">₹{product.newPrice}</span>
                    </p>
                    <p className="discount">Save {product.discount}</p>
                    <p className="emi">EMI starts at ₹1,309. No Cost EMI available</p>

                    {/* About Item */}
                    <div className="about-item">
                        <h4>About this item</h4>
                        {/* ✅ Common paragraph for all LED TVs */}
                        <p>
                            Red Wolf LED TV offers an exceptional viewing experience with crisp visuals, vibrant colors, and immersive sound. Designed with a sleek and modern frame, it seamlessly blends with any living space. Equipped with multiple connectivity options and energy-efficient LED technology, it is perfect for watching movies, gaming, and streaming your favorite content. Enjoy reliable performance and smart features for a complete home entertainment solution.
                        </p>

                        {/* Dynamic Specifications */}
                        <ul>
                            {product.specifications &&
                                Object.entries(product.specifications).map(([key, value]) => (
                                    <li key={key}>
                                        <b>{key.replace(/([A-Z])/g, " $1")}:</b> {value}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN (Buy Box) */}
                <div className="right-box">
                    <p>
                        <b>Without Exchange:</b> ₹{product.newPrice}
                    </p>
                    <p>
                        <b>With Exchange:</b> Save up to ₹3,000
                    </p>

                    {/* Delivery */}
                    <div className="delivery">
                        <p>
                            <b>FREE delivery:</b> Wed, 2 Oct
                        </p>
                        <p>
                            <b>Location:</b> Delhi 110001
                        </p>
                        <p>
                            Sold by: <b>{product.seller || "Electronics Pvt Ltd"}</b>
                        </p>
                    </div>

                    {/* Protection Plan */}
                    <div className="warranty">
                        <h4>Add Protection Plan</h4>
                        <p>✅ 1 year extended warranty – ₹2,549</p>
                        <p>✅ 2 years extended warranty – ₹1,749</p>
                        <p>✅ 3 years protection plan – ₹2,199</p>
                    </div>

                    {/* Quantity */}
                    <label>Quantity: </label>
                    <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="quantity"
                    >
                        {[1, 2, 3, 4, 5].map((q) => (
                            <option key={q} value={q}>
                                {q}
                            </option>
                        ))}
                    </select>

                    {/* Buttons */}
                    <div className="buttons">
                        <button className="speaker-cart-btn" onClick={handleAddToCart}>
                            🛒 Add to Cart
                        </button>
                        <button className="buy-btn">⚡ Buy Now</button>
                    </div>

                    <button className="wishlist-btn" onClick={handleAddToWishlist}>
                        ❤️ Add to Wish List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;