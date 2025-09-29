import React from "react";
import { useNavigate } from "react-router-dom";
import "./Best.css";
import inch32 from "../components/images/55.jpg";
import inch33 from "../components/images/32.jpg";
import inch34 from "../components/images/Rock & Roll (1).jpg";
import inch35 from "../components/images/Funk.jpg";

const products = [
    {
        id: 1,
        name: `55-Inch Frameless Full Ultra HD Display`,
        price: "65,000",
        mrp: "₹71,500",
        discount: "10% off",
        img: inch32,
    },
    {
        id: 2,
        name: "32-Inch HD Display Frameless Smart LED TV",
        price: "₹17,680",
        mrp: "₹21,000",
        discount: "22% off",
        img: inch33,
    },
    {
        id: 3,
        name: "Rock & Roll Class D Amplifier",
        price: "₹15,222",
        mrp: "₹19,900",
        discount: "15% off",
        img: inch34,
    },
    {
        id: 4,
        name: "Funk Class AB Amplifier",
        price: "₹5,487",
        mrp: "₹9,000",
        discount: "7% off",
        img: inch35,
    },
];

function Best() {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        if (product.id === 1 || product.id === 2) {
            navigate("/television");
        } else {
            navigate("/speaker");
        }
    };

    const handleViewAll = () => {
        navigate("/television");
    };

    return (
        <div className="apple-section">
            <div className="apple-header">
                <h2 className="best">Best of Red Wolf</h2>
                <p>
                    Save up to ₹5,000 instantly on eligible products using ICICI & SBI Card
                    Credit Cards | Exchange bonus upto ₹6,000 on iPhone
                </p>
                <button className="view-all" onClick={handleViewAll}>View All</button>
            </div>

            <div className="apple-cards">
                {products.map((item) => (
                    <div className="apple-card" key={item.id} onClick={() => handleProductClick(item)}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <div className="price-row">
                            <span className="price">{item.price}</span>
                            <span className="mrp">{item.mrp}</span>
                            <span className="discount">{item.discount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Best;