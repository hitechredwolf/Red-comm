// src/components/SpeakerDetails.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { speakers } from "./data"; // Import your speaker products
import "./SpeakerDetails.css";

function SpeakerDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the product by id
    const product = speakers.find((p) => p.id === parseInt(id));

    // Hooks must be called unconditionally
    const [selectedImage, setSelectedImage] = useState(
        product ? product.image : null
    );
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
        <div className="detail-page">
            <button onClick={() => navigate(-1)} className="back-btn">
                ⬅ Back
            </button>

            <div className="detail-layout">
                {/* Images Section */}
                <div className="detail-images">
                    {/* Thumbnails */}
                    <div className="thumbnail-list">
                        {productImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="main-image">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="zoomable"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setZoomVisible(true)}
                            onMouseLeave={() => setZoomVisible(false)}
                            onClick={() => setIsZoomed(true)}
                        />
                        <span className="zoom-icon" onClick={() => setIsZoomed(true)}>
                            🔍
                        </span>
                    </div>

                    {/* Zoom Preview */}
                    {zoomVisible && (
                        <div
                            className="zoom-preview"
                            style={{
                                backgroundImage: `url(${selectedImage})`,
                                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            }}
                        ></div>
                    )}
                </div>

                {/* Product Info Section */}
                <div className="detail-info">
                    <h1>{product.name}</h1>
                    <div className="rating">⭐⭐⭐⭐☆ <span>(120 reviews)</span></div>
                    <p className="price">Price: <span>${product.price}</span></p>
                    <p className="category">Category: {product.category}</p>

                    <ul className="highlights">
                        <li>✅ {product.specifications.type}</li>
                        <li>✅ Output Sound: {product.specifications.outputSound}</li>
                        <li>✅ Speaker Size: {product.specifications.speakerSize}</li>
                        <li>✅ Battery: {product.specifications.battery}</li>
                        <li>✅ Supports: {product.specifications.support.join(", ")}</li>
                        <li>✅ Product Height: {product.specifications.productHeight}</li>
                        <li>✅ Backup: {product.specifications.backup}</li>
                    </ul>

                    <div className="actions">
                        <button className="btn add-cart">🛒 Add to Cart</button>
                        <button className="btn buy-now">⚡ Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isZoomed && (
                <div className="lightbox" onClick={() => setIsZoomed(false)}>
                    <img src={selectedImage} alt="Zoomed view" />
                </div>
            )}
        </div>
    );
}

export default SpeakerDetails;
