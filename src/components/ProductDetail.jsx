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
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    if (!product) return <h2>Product not found!</h2>;

    return (
        <div className="details-page">
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
                    <p className="emi">
                        EMI starts at ₹1,309. No Cost EMI available
                    </p>

                    {/* ✅ Benefits Section */}
                    <div className="benefits">
                        <div className="benefit">
                            <img src="/icons/delivery.png" alt="Free Delivery" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="benefit">
                            <img src="/icons/replace.png" alt="10 days Replacement" />
                            <p>
                                10 days<br />Replacement
                            </p>
                        </div>
                        <div className="benefit">
                            <img src="/icons/warranty.png" alt="Warranty" />
                            <p>1 Year Warranty</p>
                        </div>
                        <div className="benefit">
                            <img src="/icons/topbrand.png" alt="Top Brand" />
                            <p>Top Brand</p>
                        </div>
                        <div className="benefit">
                            <img src="/icons/install.png" alt="Installation" />
                            <p>Installation</p>
                        </div>
                        <div className="benefit">
                            <img src="/icons/amazon.png" alt="Amazon Delivered" />
                            <p>Amazon Delivered</p>
                        </div>
                        <div className="benefit">
                            <img src="/icons/secure.png" alt="Secure" />
                            <p>Secure transaction</p>
                        </div>
                    </div>

                    {/* About Item */}
                    <div className="about-item">
                        <h4>About this item</h4>
                        <ul>
                            <li>
                                HD Ready Display – Sharp and vibrant visuals for an
                                enhanced viewing experience.
                            </li>
                            <li>
                                Smart Entertainment Hub – Access your favorite apps,
                                movies, and music with built-in smart features.
                            </li>
                            <li>
                                Slim & Stylish Design – A sleek bezel-less look that
                                complements any décor.
                            </li>
                            <li>
                                Powerful Audio – Clear and immersive sound for movies,
                                sports, and gaming.
                            </li>
                            <li>
                                Multiple Connectivity Options – HDMI, USB, Wi-Fi, and
                                Bluetooth for easy device pairing.
                            </li>
                            <li>
                                Energy Efficient – Advanced LED technology ensures lower
                                power consumption.
                            </li>
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
                        <button className="cart-btn">🛒 Add to Cart</button>
                        <button className="buy-btn">⚡ Buy Now</button>
                    </div>

                    <button className="wishlist-btn">❤️ Add to Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
