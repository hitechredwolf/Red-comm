// src/components/SpeakerDetails.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { speakers } from "./data";
import "./SpeakerDetails.css";

// ✅ Import Cart & Wishlist contexts
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

// ✅ Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SpeakerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = speakers.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(
    product ? product.image : null
  );
  const [quantity, setQuantity] = useState(1);

  // ✅ Cart & Wishlist context hooks
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist } = useWishlist();

  if (!product) return <h2>Product not found!</h2>;

  const productImages = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
  ];

  // ✅ Calculate original price & discount %
  const originalPrice = Math.round(product.price * 1.2); // 20% higher than selling
  const discountPercent = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  // ✅ Add to Wishlist Handler
  const handleAddToWishlist = () => {
    const exists = wishlist.find(
      (item) => item.id === product.id && item.type === "speaker"
    );
    if (exists) {
      toast.info(`${product.name} is already in your wishlist ⚠️`, {
        position: "top-right",
      });
    } else {
      addToWishlist({ ...product, type: "speaker" });
      toast.success(`${product.name} added to wishlist ❤️`, {
        position: "top-right",
      });
    }
  };

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    const exists = cart.find(
      (item) => item.id === product.id && item.type === "speaker"
    );
    if (exists) {
      addToCart({ ...product, type: "speaker", quantity: parseInt(quantity) });
      toast.info(`${product.name} quantity increased 🛒`, {
        position: "bottom-right",
      });
    } else {
      addToCart({
        ...product,
        type: "speaker",
        newPrice: product.price,
        quantity: parseInt(quantity),
      });
      toast.success(`${product.name} added to cart 🛒`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="speaker-details-page">
      {/* ✅ Toast container */}
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />

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

          {/* About This Product */}
          <div className="speaker-about-product">
            <h3>About This Product</h3>
            <p>
              Our speakers are crafted to provide high-quality sound, ensuring
              every note is clear and immersive. Designed for durability and
              style, they fit seamlessly into any space. Ideal for music lovers
              and everyday use, these speakers deliver reliable performance and
              exceptional audio experience.
            </p>
          </div>

          {/* ✅ Price Section */}
          <div className="speaker-price-section">
            <p className="speaker-price">
              <span className="speaker-old-price">₹{originalPrice}</span>{" "}
              <span className="speaker-new-price">₹{product.price}</span>
            </p>
            <p className="speaker-discount">🎉 {discountPercent}% Off</p>
            <p className="speaker-emi">
              EMI starts at ₹2,500/month. No Cost EMI available
            </p>
          </div>

          {/* Specifications */}
          <div className="speaker-about-item">
            <h4>Key Features</h4>
            <ul>
              {Object.entries(product.specifications).map(([key, value]) => {
                if (Array.isArray(value)) value = value.join(", ");
                const formattedKey = key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase());
                return (
                  <li key={key}>
                    ✅ <b>{formattedKey}:</b> {value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN (Buy Box) */}
        <div className="speaker-right-box">
          <p>
            <b>Without Exchange:</b> ₹{product.price}
          </p>
          <p>
            <b>With Exchange:</b> Save up to ₹5,000
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
            <p>✅ 1 year extended warranty – ₹4,999</p>
            <p>✅ 2 years extended warranty – ₹7,999</p>
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
            <button className="speaker-cart-btn" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
            <button className="speaker-buy-btn">⚡ Buy Now</button>
          </div>

          <button className="speaker-wishlist-btn" onClick={handleAddToWishlist}>
            ❤️ Add to Wish List
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeakerDetails;



















// // src/components/SpeakerDetails.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { speakers } from "./data";
// import "./SpeakerDetails.css";

// // ✅ Import Cart & Wishlist contexts
// import { useCart } from "./CartContext";
// import { useWishlist } from "./WishlistContext";

// // ✅ Toastify
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function SpeakerDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const product = speakers.find((p) => p.id === parseInt(id));
//   const [selectedImage, setSelectedImage] = useState(
//     product ? product.image : null
//   );
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Zoom state
//   const [zoomVisible, setZoomVisible] = useState(false);
//   const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
//   const [backgroundPos, setBackgroundPos] = useState({ x: 0, y: 0 });

//   // ✅ Cart & Wishlist context hooks
//   const { cart, addToCart } = useCart();
//   const { wishlist, addToWishlist } = useWishlist();

//   if (!product) return <h2>Product not found!</h2>;

//   const productImages = [
//     product.image,
//     product.image1,
//     product.image2,
//     product.image3,
//   ];

//   // ✅ Calculate original price & discount %
//   const originalPrice = Math.round(product.price * 1.2); // 20% higher than selling
//   const discountPercent = Math.round(
//     ((originalPrice - product.price) / originalPrice) * 100
//   );

//   // ✅ Add to Wishlist Handler
//   const handleAddToWishlist = () => {
//     const exists = wishlist.find(
//       (item) => item.id === product.id && item.type === "speaker"
//     );
//     if (exists) {
//       toast.info(`${product.name} is already in your wishlist ⚠️`, {
//         position: "top-right",
//       });
//     } else {
//       addToWishlist({ ...product, type: "speaker" });
//       toast.success(`${product.name} added to wishlist ❤️`, {
//         position: "top-right",
//       });
//     }
//   };

//   // ✅ Add to Cart Handler
//   const handleAddToCart = () => {
//     const exists = cart.find(
//       (item) => item.id === product.id && item.type === "speaker"
//     );
//     if (exists) {
//       addToCart({ ...product, type: "speaker", quantity: parseInt(quantity) });
//       toast.info(`${product.name} quantity increased 🛒`, {
//         position: "bottom-right",
//       });
//     } else {
//       addToCart({
//         ...product,
//         type: "speaker",
//         newPrice: product.price,
//         quantity: parseInt(quantity),
//       });
//       toast.success(`${product.name} added to cart 🛒`, {
//         position: "bottom-right",
//       });
//     }
//   };

//   // ✅ Handle mouse movement for zoom
//   const handleMouseMove = (e) => {
//     const container = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - container.left;
//     const y = e.clientY - container.top;

//     const lensSize = 100; // square lens
//     let lensX = x - lensSize / 2;
//     let lensY = y - lensSize / 2;

//     if (lensX < 0) lensX = 0;
//     if (lensY < 0) lensY = 0;
//     if (lensX > container.width - lensSize)
//       lensX = container.width - lensSize;
//     if (lensY > container.height - lensSize)
//       lensY = container.height - lensSize;

//     setLensPosition({ x: lensX, y: lensY });
//     setBackgroundPos({
//       x: (lensX / container.width) * 400,
//       y: (lensY / container.height) * 400,
//     });
//     setZoomVisible(true);
//   };

//   return (
//     <div className="speaker-details-page">
//       {/* ✅ Toast container */}
//       <ToastContainer
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnHover
//       />

//       {/* Back Button */}
//       <div className="speaker-back-btn-wrapper">
//         <button onClick={() => navigate(-1)} className="speaker-back-btn">
//           ⬅ Back
//         </button>
//       </div>

//       <div className="speaker-details-grid">
//         {/* LEFT COLUMN (Thumbnails) */}
//         <div className="speaker-left-thumbnails">
//           {productImages.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index + 1}`}
//               className={
//                 selectedImage === img ? "speaker-thumb active" : "speaker-thumb"
//               }
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>

//         {/* CENTER COLUMN (Main Image + Info) */}
//         <div className="speaker-center-info">
//           <div className="speaker-main-image">
//             {/* Image container with zoom lens */}
//             <div
//               className="speaker-image-container"
//               onMouseMove={(e) => handleMouseMove(e)}
//               onMouseLeave={() => setZoomVisible(false)}
//             >
//               <img src={selectedImage} alt={product.name} className="speaker-image" />
//               {zoomVisible && (
//                 <div
//                   className="speaker-zoom-lens"
//                   style={{ top: lensPosition.y, left: lensPosition.x }}
//                 />
//               )}
//             </div>

//             {/* Zoom Result Box */}
//             {zoomVisible && (
//               <div className="speaker-zoom-result">
//                 <img
//                   src={selectedImage}
//                   alt="Zoomed"
//                   style={{
//                     transform: `translate(-${backgroundPos.x}px, -${backgroundPos.y}px) scale(2)`,
//                   }}
//                 />
//               </div>
//             )}
//           </div>

//           <h2 className="speaker-product-title">{product.name}</h2>
//           <p className="speaker-rating">⭐⭐⭐⭐☆ (120 reviews)</p>

//           {/* About This Product */}
//           <div className="speaker-about-product">
//             <h3>About This Product</h3>
//             <p>
//               Our speakers are crafted to provide high-quality sound, ensuring
//               every note is clear and immersive. Designed for durability and
//               style, they fit seamlessly into any space. Ideal for music lovers
//               and everyday use, these speakers deliver reliable performance and
//               exceptional audio experience.
//             </p>
//           </div>

//           {/* ✅ Price Section */}
//           <div className="speaker-price-section">
//             <p className="speaker-price">
//               <span className="speaker-old-price">₹{originalPrice}</span>{" "}
//               <span className="speaker-new-price">₹{product.price}</span>
//             </p>
//             <p className="speaker-discount">🎉 {discountPercent}% Off</p>
//             <p className="speaker-emi">
//               EMI starts at ₹2,500/month. No Cost EMI available
//             </p>
//           </div>

//           {/* Specifications */}
//           <div className="speaker-about-item">
//             <h4>Key Features</h4>
//             <ul>
//               {Object.entries(product.specifications).map(([key, value]) => {
//                 if (Array.isArray(value)) value = value.join(", ");
//                 const formattedKey = key
//                   .replace(/([A-Z])/g, " $1")
//                   .replace(/^./, (str) => str.toUpperCase());
//                 return (
//                   <li key={key}>
//                     ✅ <b>{formattedKey}:</b> {value}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>

//         {/* RIGHT COLUMN (Buy Box) */}
//         <div className="speaker-right-box">
//           <p>
//             <b>Without Exchange:</b> ₹{product.price}
//           </p>
//           <p>
//             <b>With Exchange:</b> Save up to ₹5,000
//           </p>

//           {/* Delivery */}
//           <div className="speaker-delivery">
//             <p>
//               <b>FREE delivery:</b> Wed, 2 Oct
//             </p>
//             <p>
//               <b>Location:</b> New York, USA
//             </p>
//             <p>
//               Sold by: <b>{product.seller || "Audio Pvt Ltd"}</b>
//             </p>
//           </div>

//           {/* Warranty */}
//           <div className="speaker-warranty">
//             <h4>Add Protection Plan</h4>
//             <p>✅ 1 year extended warranty – ₹4,999</p>
//             <p>✅ 2 years extended warranty – ₹7,999</p>
//           </div>

//           {/* Quantity */}
//           <label>Quantity: </label>
//           <select
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="speaker-quantity"
//           >
//             {[1, 2, 3, 4, 5].map((q) => (
//               <option key={q} value={q}>
//                 {q}
//               </option>
//             ))}
//           </select>

//           {/* Buttons */}
//           <div className="speaker-buttons">
//             <button className="speaker-cart-btn" onClick={handleAddToCart}>
//               🛒 Add to Cart
//             </button>
//             <button className="speaker-buy-btn">⚡ Buy Now</button>
//           </div>

//           <button className="speaker-wishlist-btn" onClick={handleAddToWishlist}>
//             ❤️ Add to Wish List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SpeakerDetails;