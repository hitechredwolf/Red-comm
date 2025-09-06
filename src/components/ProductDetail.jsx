import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Television.css";

const ProductDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [selectedImg, setSelectedImg] = useState(state?.img);
    const [activeTab, setActiveTab] = useState("description");

    // zoom state
    const [zoomVisible, setZoomVisible] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    if (!state) {
        return (
            <div className="product-detail">
                <h2>No product selected</h2>
                <button onClick={() => navigate("/")}>Go Back</button>
            </div>
        );
    }

    const {
        name,
        img,
        newPrice,
        oldPrice,
        resolution,
        description,
        discount,
    } = state;

    const images = [
        img,
        "https://images.samsung.com/is/image/samsung/p6pim/in/ua43f5550fuxxl/gallery/in-fhd-f5500-548422-ua43f5550fuxxl-546515618?$684_547_PNG$",
        "https://cellecor.com/cdn/shop/files/E40V_02.png?v=1686919758",
        "https://cellecor.com/cdn/shop/files/E40V_05.png?v=1686919758",
        "https://cellecor.com/cdn/shop/files/E40V_06-1.png?v=1686919758",
    ];

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

    return (
        <div className="product-detail-page">
            <button className="back-btn" onClick={() => navigate("/")}>
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
                            <img src={selectedImg} alt={name} />
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

            {/* External Zoom Preview */}
            {zoomVisible && (
                <div
                    className="zoom-preview"
                    style={{
                        backgroundImage: `url(${selectedImg})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                ></div>
            )}

            {/* Tabs */}
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

            {/* Reviews */}
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
};

export default ProductDetail;
