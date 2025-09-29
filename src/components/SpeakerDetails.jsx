import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { speakers } from "./data";
import "./SpeakerDetails.css";

function SpeakerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = speakers.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(
    product ? product.image : null
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found!</h2>;

  const productImages = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
  ];

  return (
    <div className="speaker-details-page">
      {/* Back Button */}
      <div className="speaker-back-btn-wrapper">
        <button onClick={() => navigate(-1)} className="speaker-back-btn">
          ⬅ Back
        </button>
      </div>

      <div className="speaker-details-grid">
        {/* LEFT COLUMN (Thumbnails) */}
        <div className="speaker-left-thumbnails">
          {productImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={
                selectedImage === img ? "speaker-thumb active" : "speaker-thumb"
              }
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* CENTER COLUMN (Main Image + Info) */}
        <div className="speaker-center-info">
          <div className="speaker-main-image">
            <img src={selectedImage} alt={product.name} />
          </div>

          <h2 className="speaker-product-title">{product.name}</h2>
          <p className="speaker-rating">⭐⭐⭐⭐☆ (120 reviews)</p>

          {/* Price Section */}
          <p className="speaker-price">
            <span className="speaker-old-price">${product.oldPrice}</span>{" "}
            <span className="speaker-new-price">${product.price}</span>
          </p>
          <p className="speaker-discount">Special Deal Available</p>
          <p className="speaker-emi">
            EMI starts at $25/month. No Cost EMI available
          </p>

          {/* Specifications */}
          <div className="speaker-about-item">
            <h4>Key Features</h4>
            <ul>
              {Object.entries(product.specifications).map(([key, value]) => {
                if (Array.isArray(value)) value = value.join(", ");
                return (
                  <li key={key}>
                    ✅ {key.replace(/([A-Z])/g, " $1")}: {value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN (Buy Box) */}
        <div className="speaker-right-box">
          <p>
            <b>Without Exchange:</b> ${product.price}
          </p>
          <p>
            <b>With Exchange:</b> Save up to $50
          </p>

          {/* Delivery */}
          <div className="speaker-delivery">
            <p>
              <b>FREE delivery:</b> Wed, 2 Oct
            </p>
            <p>
              <b>Location:</b> New York, USA
            </p>
            <p>
              Sold by: <b>{product.seller || "Audio Pvt Ltd"}</b>
            </p>
          </div>

          {/* Warranty */}
          <div className="speaker-warranty">
            <h4>Add Protection Plan</h4>
            <p>✅ 1 year extended warranty – $49</p>
            <p>✅ 2 years extended warranty – $79</p>
          </div>

          {/* Quantity */}
          <label>Quantity: </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="speaker-quantity"
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          {/* Buttons */}
          <div className="speaker-buttons">
            <button className="speaker-cart-btn">🛒 Add to Cart</button>
            <button className="speaker-buy-btn">⚡ Buy Now</button>
          </div>

          <button className="speaker-wishlist-btn">
            ❤️ Add to Wish List
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeakerDetails;
