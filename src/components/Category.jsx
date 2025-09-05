import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import tv from "./images/television-logo.png"
import speaker from "./images/speaker-logo.avif"
import machines from "./images/washingmachinelogo.png"
import ac from "./images/ac.png"
const categories = [
    {
        name: "Television",
        image: tv,
        path: "/television",
    },
    {
        name: "Speaker",
        image: speaker,
        path: "/speaker",
    },
    {
        name: "Washing Machines",
        image: machines,
        path: "/washing-machines",

    },

    {
        name: "Air Conditioner",
        image: ac,
        path: "/air-conditioner",
    },
];

function Category() {
    return (
        <div className="category-container">
            {categories.map((cat, index) => (
                <Link to={cat.path} key={index} className="category-card">
                    <img src={cat.image} alt={cat.name} />
                    <p>{cat.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default Category;
