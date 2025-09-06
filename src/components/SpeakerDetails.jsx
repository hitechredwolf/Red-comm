import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyProducts } from "./Speaker";
import "./SpeakerDetails.css"

function SpeakerDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = dummyProducts.find((p) => p.id === parseInt(id));

    // Prepare thumbnails
    const productImages = product
        ? [product.image, product.image1, product.image2, product.image3]
        : [];

    const [selectedImage, setSelectedImage] = useState(productImages[0] || null);
    const [isZoomed, setIsZoomed] = useState(false);

    if (!product) return <h2>Product not found!</h2>;

    return (
        <div className="detail-page">
            <button onClick={() => navigate(-1)} className="back-btn">
                ⬅ Back
            </button>

            <div className="detail-layout">
                {/* Images Section */}
                <div className="detail-images">
                    {/* Thumbnail list */}
                    <div className="thumbnail-list">
                        {productImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`thumb-${index}`}
                                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>

                    {/* Main Image with Zoom */}
                    <div className="main-image">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            onClick={() => setIsZoomed(true)}
                            className="zoomable"
                        />
                        <span className="zoom-icon" onClick={() => setIsZoomed(true)}>
                            🔍
                        </span>
                    </div>
                </div>

                {/* Info Section */}
                <div className="detail-info">
                    <h1>{product.name}</h1>

                    {/* Ratings */}
                    <div className="rating">
                        ⭐⭐⭐⭐☆ <span>(120 reviews)</span>
                    </div>

                    <p className="price">
                        Price: <span>${product.price}</span>
                    </p>
                    <p className="category">Category: {product.category}</p>

                    {/* Highlights */}
                    <ul className="highlights">
                        <li>✅ Premium sound quality</li>
                        <li>✅ Long-lasting battery life</li>
                        <li>✅ Wireless Bluetooth connectivity</li>
                        <li>✅ Compact & portable design</li>
                    </ul>

                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a
                        sample description for <b>{product.name}</b>. Perfect for music
                        lovers who want deep bass and clear treble.
                    </p>

                    {/* Action Buttons */}
                    <div className="actions">
                        <button className="btn add-cart">🛒 Add to Cart</button>
                        <button className="btn buy-now">⚡ Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Lightbox for zoomed image */}
            {isZoomed && (
                <div className="lightbox" onClick={() => setIsZoomed(false)}>
                    <img src={selectedImage} alt="zoomed" />
                </div>
            )}
        </div>
    );
}

export default SpeakerDetails;
