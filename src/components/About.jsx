// src/components/About.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

// Banner
import bannerImage from "./images/About baner.jpg";

// Categories images
import tvImg from "./images/smartledlogo.jpg";
import soundbarImg from "./images/speaker-logo.avif";
import acImg from "./images/conditionerlogo.jpg";
import washingImg from "./images/machinlogo.jpg";

// Attributes
import vibrant from "./images/vibrant-0513-3.webp";
import Innovative from "./images/innovative-0513-3.webp";
import Fashionablee from "./images/fashionable-0513-3.webp";
import Premium from "./images/premium-0513-3.webp";

// Events images
import imgA1 from "./images/AGM1.jpg";
import imgA2 from "./images/AGM10.jpeg";
import imgA3 from "./images/AGM11.jpeg";
import imgA4 from "./images/AGM9.jpg";
import imgA5 from "./images/AGM8.jpeg";
import imgA6 from "./images/AGM2.jpg";
import imgA7 from "./images/AGM3.jpg";
import imgA8 from "./images/AGM18.jpg";

import imgB1 from "./images/EV1.jpg";
import imgB2 from "./images/EV4.jpg";
import imgB3 from "./images/EV17.jpg";
import imgB4 from "./images/EV2.jpg";
import imgB5 from "./images/EV3.jpg";
import imgB6 from "./images/EV6.jpg";
import imgB7 from "./images/EV5.jpg";
import imgB8 from "./images/EV7.jpg";

import imgC1 from "./images/AGM252.jpg";
import imgC2 from "./images/AGM254.jpg";
import imgC3 from "./images/AGM257.jpg";
import imgC4 from "./images/AGM258.jpg";
import imgC5 from "./images/AGM2510.jpg";
import imgC6 from "./images/AGM2517.jpg";
import imgC7 from "./images/AGM2511.jpg";
import imgC8 from "./images/AGM2520.jpg";

import imgD1 from "./images/RR1.jpg";
import imgD2 from "./images/RR10.jpg";
import imgD3 from "./images/RR11.jpg";
import imgD4 from "./images/RR12.jpg";
import imgD5 from "./images/RR13.jpg";
import imgD6 from "./images/RR14.jpg";
import imgD7 from "./images/RR15.jpg";
import imgD8 from "./images/RR16.jpg";

const eventsData = [
    {
        id: 1,
        title: "Annual General Meeting (2023–2024)",
        cover: imgA6,
        images: [imgA1, imgA2, imgA3, imgA4, imgA5, imgA6, imgA7, imgA8],
    },
    {
        id: 2,
        title: "Redwolf EV Launching",
        cover: imgB5,
        images: [imgB1, imgB2, imgB3, imgB4, imgB5, imgB6, imgB7, imgB8],
    },
    {
        id: 3,
        title: "Annual General Meeting (2024–2025)",
        cover: imgC3,
        images: [imgC1, imgC2, imgC3, imgC4, imgC5, imgC6, imgC7, imgC8],
    },
    {
        id: 4,
        title: "R&R",
        cover: imgD8,
        images: [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6, imgD7, imgD8],
    },
];

const brandData = [
    {
        title: "Vibrant",
        img: vibrant,
        heading: "VIBRANT",
        desc: "To spark curiosity, lead with energy, and bring boldness to every innovation we create.",
    },
    {
        title: "Innovative",
        img: Innovative,
        heading: "INNOVATIVE",
        desc: "To challenge convention and craft intelligent, future-ready solutions that redefine everyday experiences.",
    },
    {
        title: "Fashionable",
        img: Fashionablee,
        heading: "FASHIONABLE",
        desc: "To fuse modern design with smart tech — delivering style, sophistication, and performance in every product.",
    },
    {
        title: "Premium",
        img: Premium,
        heading: "PREMIUM",
        desc: "To uphold superior quality, thoughtful design, and a seamless experience across everything we build.",
    },
];

const About = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const navigate = useNavigate();

    // Category data
    const categories = [
        { title: "Television", img: tvImg, route: "/television" },
        { title: "Soundbar", img: soundbarImg, route: "/speaker" },
        { title: "Air Conditioner", img: acImg, route: "/air-conditioner" },
        { title: "Washing Machine", img: washingImg, route: "/washing-machines" },
    ];

    return (
        <div className="about-container">
            {/* Banner */}
            <div className="banner-image">
                <img src={bannerImage} alt="About Banner" className="banner-img" />
            </div>

            {/* Journey Section */}
            <section className="section">
                <h2 className="section-title">Our Journey of Innovation</h2>
                <div className="card-grid">
                    <div className="card animate-fade-in">
                        <h3>Early Innovation</h3>
                        <p>
                            From innovative EMI solutions with T-COPS Finance Locker to cutting-edge Redwolf LED TVs and powerful Redwolf Speakers, we’re redefining technology for modern living.
                            Our journey is driven by innovation, quality, and a commitment to elevate everyday experiences.
                        </p>
                    </div>
                    <div className="card animate-fade-in">
                        <h3>Expansion into Smart Entertainment</h3>
                        <p>
                            We diversified into Redwolf LED TVs and Redwolf Speakers, bringing
                            premium technology to Indian homes at competitive value.
                        </p>
                    </div>
                    <div className="card animate-fade-in">
                        <h3>Trust Across Verticals</h3>
                        <p>
                            With over 500,000+ users, Redwolf Info Tech has earned a
                            reputation for excellence in security, visual innovation, and
                            sound performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="rw-mission-vision">
                <div className="rw-split-container">
                    <div className="rw-box rw-vision">
                        <h2 className="rw-heading">🌟 Vision Statement</h2>
                        <p>
                            To be India’s most trusted innovation-driven brand, delivering
                            smart lifestyle solutions that seamlessly blend technology,
                            sustainability, and everyday convenience.
                        </p>
                        <ul>
                            <li>🚗 Sustainable Mobility through smart, future-ready EVs</li>
                            <li>📺 Connected Living with immersive LED TVs & Speakers</li>
                            <li>📱 Digital Empowerment via finance tools like EMI Locker</li>
                            <li>🏠 Smart Home Expansion with intuitive appliances</li>
                            <li>🇮🇳 Making Innovation Accessible for every Indian household</li>
                        </ul>
                    </div>

                    <div className="rw-box rw-mission">
                        <h2 className="rw-heading">🚀 Mission Statement</h2>
                        <p>
                            At Red Wolf Info Tech, our mission is to reimagine the way India
                            moves, connects, and manages daily life through purposeful
                            innovation.
                        </p>
                        <ul>
                            <li>⚡ Build eco-friendly electric vehicles</li>
                            <li>🔊 Deliver high-quality audio-visual products</li>
                            <li>📊 Create intuitive finance management tools</li>
                            <li>🧠 Launch future-ready smart appliances</li>
                            <li>🛠️ Lead with trust, technology, and customer-first thinking</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section">
                <h2 className="section-title">Our Product Categories</h2>
                <div className="card-grid">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="brand-card categories-img"
                            onClick={() => navigate(cat.route)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={cat.img} alt={cat.title} />
                            <div className="overlay-text">{cat.title}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Redwolf */}
            <section className="section why-redwolf">
                <h2 className="section-title animate-fade-in">Why Choose Red Wolf Info Tech?</h2>

                <p className="intro-text animate-slide-up">
                    At <strong>Red Wolf Info Tech</strong>, innovation meets reliability. We’re more than
                    just a technology brand — we’re a forward-thinking company building solutions that
                    simplify lives, empower businesses, and shape a smarter future.
                </p>

                <h3 className="trust-title animate-fade-in">Here’s why thousands trust Red Wolf Info Tech:</h3>

                <div className="benefits-grid">
                    <div className="benefit-card animate-zoom">
                        <span className="icon">🚀</span>
                        <h4>Innovation at Core</h4>
                        <p>
                            From EMI management through <strong>T-COPS Finance Locker</strong> to next-gen LED TVs,
                            Speakers, and Electric Vehicles — we design products that redefine performance and
                            convenience.
                        </p>
                    </div>

                    <div className="benefit-card animate-zoom">
                        <span className="icon">🔒</span>
                        <h4>Quality You Can Trust</h4>
                        <p>
                            Every product we deliver undergoes rigorous testing and meets the highest standards of
                            safety, durability, and efficiency.
                        </p>
                    </div>

                    <div className="benefit-card animate-zoom">
                        <span className="icon">⚡</span>
                        <h4>Customer-Centric Approach</h4>
                        <p>
                            Our customers are at the heart of everything we do — from product design to after-sales
                            support, your satisfaction drives our growth.
                        </p>
                    </div>

                    <div className="benefit-card animate-zoom">
                        <span className="icon">🌱</span>
                        <h4>Sustainability Focused</h4>
                        <p>
                            We believe in technology that powers progress without harming the planet. Our
                            <strong> Red Wolf EV </strong> line stands as proof of that commitment.
                        </p>
                    </div>

                    <div className="benefit-card animate-zoom">
                        <span className="icon">💡</span>
                        <h4>All-in-One Tech Ecosystem</h4>
                        <p>
                            Whether it’s smart electronics, mobility, or financial innovation — Red Wolf Info Tech
                            connects them all under one powerful brand.
                        </p>
                    </div>
                </div>

                <p className="closing-text animate-slide-up">
                    At <strong>Red Wolf Info Tech</strong>, we build trust, technology, and tomorrow. From
                    mobile finance to smart entertainment, we redefine what it means to be connected.
                    Let’s transform life, together.
                </p>
            </section>


            {/* Attributes */}
            <div className="brand-attributes-container">
                <h2 className="brand-title">Red Wolf Attributes</h2>
                <div className="brand-cards">
                    {brandData.map((item, index) => (
                        <div className="brand-card" key={index}>
                            <div className="image-container">
                                <img src={item.img} alt={item.title} />
                                <div className="overlay-text">{item.heading}</div>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Events */}
            <div className="event-section">
                <h2 className="section-title">Our Events</h2>
                <div className="card-container">
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            className="event-card"
                            onClick={() => setSelectedEvent(event)}
                        >
                            <img
                                src={event.cover}
                                alt="event-thumbnail"
                                className="card-img"
                            />
                            <h3>{event.title}</h3>
                        </div>
                    ))}
                </div>

                {selectedEvent && (
                    <div
                        className="modal-overlay"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-btn"
                                onClick={() => setSelectedEvent(null)}
                            >
                                &times;
                            </button>
                            <h3>{selectedEvent.title} Gallery</h3>
                            <div className="image-grid">
                                {selectedEvent.images.map((img, idx) => (
                                    <img key={idx} src={img} alt={`event-img-${idx}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
