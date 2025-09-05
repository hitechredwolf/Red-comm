import React from "react";
import "./Best.css";

const products = [
    {
        id: 1,
        name: "Apple iPhone 16 (128GB Storage, Teal)",
        price: "₹71,900",
        mrp: "₹79,900",
        discount: "10% off",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1716498841031",
    },
    {
        id: 2,
        name: "Apple iPhone 16e (512GB Storage, Black)",
        price: "₹70,550",
        mrp: "₹89,900",
        discount: "22% off",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16-black-select?wid=940&hei=1112&fmt=png-alpha&.v=1716498841031",
    },
    {
        id: 3,
        name: "Apple AirPods Pro (2nd Gen)",
        price: "₹16,900",
        mrp: "₹19,900",
        discount: "15% off",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=940&hei=1112&fmt=png-alpha&.v=1676586054480",
    },
    {
        id: 4,
        name: "Apple Watch Series 9 (GPS, 41mm, Midnight)",
        price: "₹38,900",
        mrp: "₹41,900",
        discount: "7% off",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQKX3ref_VW_34FR+watch-case-41-midnight-nc-s9_VW_34FR+watch-face-41-starlight-s9_VW_34FR_GEO_IN?wid=940&hei=1112&fmt=png-alpha&.v=1693846213344",
    },
];

function Best() {
    return (
        <div className="apple-section">
            <div className="apple-header">
                <h2 className="best">Best of Red Wolf</h2>
                <p>
                    Save up to ₹5,000 instantly on eligible products using ICICI & SBI Card
                    Credit Cards | Exchange bonus upto ₹6,000 on iPhone
                </p>
                <button className="view-all">View All</button>
            </div>

            {/* Cards wrapper */}
            <div className="apple-cards">
                {products.map((item) => (
                    <div className="apple-card" key={item.id}>
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
