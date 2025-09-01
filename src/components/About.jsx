import React, { useState } from 'react';
import "./About.css";
// import { FaLock, FaTv, FaVolumeUp } from "react-icons/fa";
import bannerImage from "./images/About baner.jpg"; // Adjust path based on your structure

import Catagories from "./images/productcat.png"
import vibrant from "./images/vibrant-0513-3.webp"
import Innovative from "./images/innovative-0513-3.webp"
import Fashionablee from "./images/fashionable-0513-3.webp"
import Premium from "./images/premium-0513-3.webp"

// import EventSection from "../components/";


// Image imports (adjust paths as per your structure)
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
        cover: imgA1,
        images: [imgA1, imgA2, imgA3, imgA4, imgA5, imgA6, imgA7, imgA8],
    },
    {
        id: 2,
        title: "Redwolf EV Launching",
        cover: imgB1,
        images: [imgB1, imgB2, imgB3, imgB4, imgB5, imgB6, imgB7, imgB8],
    },
    {
        id: 3,
        title: "Annual General Meeting (2024–2025)",
        cover: imgC1,
        images: [imgC1, imgC2, imgC3, imgC4, imgC5, imgC6, imgC7, imgC8],
    },
    {
        id: 4,
        title: "R&R",
        cover: imgD1,
        images: [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6, imgD7, imgD8],
    },
];

const About = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
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



    return (
        <div className="about-container">
            <div className="banner-image">
                <img src={bannerImage} alt="About Banner" className="banner-img" />

            </div>


            <section className="section">
                <h2 className="section-title">Our Journey of Innovation</h2>
                <div className="card-grid">
                    <div className="card animate-fade-in">
                        <h3>Early Innovation</h3>
                        <p>
                            We began by addressing a critical gap in mobile EMI management with
                            the launch of TCOPS Finance Locker, a powerful platform designed to
                            protect financial assets through secure, scalable mobile control
                            solutions.
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
                            With over 500,000+ users, Redwolf Info Tech has earned a reputation
                            for excellence in security, visual innovation, and sound performance.
                        </p>
                    </div>
                </div>
            </section>
            <section className="rw-mission-vision">
                <div className="rw-split-container">
                    {/* Vision Section */}
                    <div className="rw-box rw-vision">
                        <h2 className="rw-heading">🌟 Vision Statement</h2>
                        <p>
                            To be India’s most trusted innovation-driven brand, delivering smart lifestyle solutions that seamlessly blend
                            technology, sustainability, and everyday convenience.
                        </p>
                        <p>
                            We envision a future where every Indian home and journey is empowered by intelligent Red Wolf products —
                            designed to simplify life, amplify experiences, and shape a smarter tomorrow.
                        </p>
                        <h4 className="rw-subheading">Our Vision Focuses On:</h4>
                        <ul>
                            <li>🚗 Sustainable Mobility through smart, future-ready EVs</li>
                            <li>📺 Connected Living with immersive LED TVs & Speakers</li>
                            <li>📱 Digital Empowerment via powerful finance tools like EMI Locker</li>
                            <li>🏠 Smart Home Expansion with intuitive appliances (coming soon)</li>
                            <li>🇮🇳 Making Innovation Accessible for every Indian household</li>
                        </ul>
                    </div>

                    {/* Mission Section */}
                    <div className="rw-box rw-mission">
                        <h2 className="rw-heading">🚀 Mission Statement</h2>
                        <p>
                            At Red Wolf Info Tech, our mission is to reimagine the way India moves, connects, and manages daily life through
                            purposeful innovation.
                        </p>
                        <p>
                            We deliver solutions that blend design, performance, and reliability across mobility, entertainment, and finance
                            — built to serve real needs in real time.
                        </p>
                        <h4 className="rw-subheading">Our Mission Drives Us To:</h4>
                        <ul>
                            <li>⚡ Build eco-friendly electric vehicles for tomorrow’s roads</li>
                            <li>🔊 Deliver high-quality audio-visual products for modern entertainment</li>
                            <li>📊 Create intuitive finance management tools for digital-savvy users</li>
                            <li>🧠 Launch future-ready smart appliances for everyday comfort</li>
                            <li>🛠️ Lead with trust, technology, and customer-first thinking</li>
                        </ul>
                    </div>
                </div>
            </section>








            <section>
                <img src={Catagories} alt="catagories" style={{ width: '100%' }} />
            </section>
            <section className="section white-bg">
                <h2 className="section-title">Why Redwolf?</h2>
                <ul className="benefits-list">
                    <li>Boosted EMI recovery for financial partners</li>
                    <li>Smart, stylish features for home users</li>
                    <li>Reliable service, innovative engineering</li>
                </ul>
                <p className="closing-text animate-slide-up">
                    At Redwolf Info Tech, we build trust, technology, and tomorrow. From
                    mobile finance to smart entertainment, we redefine what it means to be
                    connected. Let’s transform life, together.
                </p>
            </section>

            {/* ATTRIBUTES */}

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


            <div className="event-section">
                <h2 className="section-title">Our Events</h2>

                <div className="card-container">
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            className="event-card"
                            onClick={() => setSelectedEvent(event)}
                        >
                            <img src={event.cover} alt="event-thumbnail" className="card-img" />
                            <h3>{event.title}</h3>
                        </div>
                    ))}
                </div>

                {selectedEvent && (
                    <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
                        >
                            <button className="close-btn" onClick={() => setSelectedEvent(null)}>
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
