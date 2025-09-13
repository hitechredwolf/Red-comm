import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { televisions } from "./data";
import "./ProductDetails.css";

const ProductDetail = () => {
    const { id } = useParams();
    const product = televisions.find((tv) => tv.id === parseInt(id));

    const [selectedImage, setSelectedImage] = useState(
        product?.images ? product.images[0] : product?.img
    );

    const navigate = useNavigate(); // ✅ Back button ke liye

    if (!product) return <h2>Product not found!</h2>;

    const handleAddToCart = () => {
        const btn = document.querySelector(".cart-btn");
        btn.classList.add("pulse");
        setTimeout(() => btn.classList.remove("pulse"), 300);
        alert("Product added to cart!"); // optional
    };

    return (
        <div className="details-page">
            {/* ✅ Back Button */}
            <div className="back-btn-wrapper">
                <button onClick={() => navigate(-1)} className="back-btn">
                    ⬅ Back
                </button>
            </div>

            <div className="details-container">
                {/* ✅ Left Thumbnails */}
                <div className="thumbnails">
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

                {/* ✅ Main Image */}
                <div className="main-image">
                    <img src={selectedImage} alt={product.name} />
                </div>

                {/* ✅ Right Info Section */}
                <div className="info-section">
                    <h2>{product.name}</h2>
                    <p className="rating">⭐⭐⭐⭐☆ (120 reviews)</p>
                    <p className="price">
                        <span className="old-price">₹{product.oldPrice}</span>{" "}
                        <span className="new-price">₹{product.newPrice}</span>
                    </p>
                    <p className="discount">Save {product.discount}</p>

                    <ul className="features">
                        {Object.entries(product).map(([key, value]) => {
                            if (
                                ["id", "name", "images", "oldPrice", "newPrice", "discount"].includes(key)
                            ) return null;
                            return <li key={key}>✅ {key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li>;
                        })}
                    </ul>

                    <div className="buttons">
                        <button className="cart-btn" onClick={handleAddToCart}>🛒 ADD TO CART</button>
                        <button className="buy-btn">⚡ BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
