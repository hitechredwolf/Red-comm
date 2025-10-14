import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Home.css';
import Tagline from "./images/tagline.jpg";
import smtspkr from "./images/smtspkr.jpg";
import smt32 from "./images/smt32.jpg";
import ChatBot from "./ChatBot";
import Category from "./Category";
import today from "./images/ordertoday.jpg";
import diwali from "../components/images/Diwali banner.jpg";
import made from "../components/images/Made.jpg";
import Best from "./Best";

function Home() {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = imgRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollPercent = 1 - rect.top / windowHeight;
            const scale = 1 + scrollPercent * 0.05; // minor zoom
            imgRef.current.style.transform = `scale(${Math.min(Math.max(scale, 1), 1.05)})`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="App">
            <header className="App-header">

                {/* Carousel */}
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Tagline} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={smt32} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={smtspkr} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <Category />

                <div>
                    <img src={diwali} className="d-block w-100" alt="..." />
                </div>

                <Best />

                {/* === MADE IN INDIA SECTION === */}
                <div className="makeinindia">
                    <div className="makeinindia-left">
                        <img ref={imgRef} src={made} alt="Made in India Watch" className="scroll-zoom" />
                    </div>

                    <div className="makeinindia-right">
                        <h2 className='india'>Made In India! Specially Crafted For You!</h2>
                        <p>
                            We take great pride in our association with the 'Make in India' campaign, a transformative
                            initiative for India. Our company produces state-of-the-art electronic devices that meet
                            the discerning aesthetic needs of our valued customers, all proudly manufactured within
                            India. Let us unite and contribute to the empowerment of India collectively!
                        </p>
                    </div>
                </div>
                {/* === END MADE IN INDIA === */}

                <div>
                    <img src={today} className="d-block w-100" alt="..." />
                </div>

                <ChatBot />

                <a
                    href="https://wa.me/9214309236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-icon"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </header>
        </div>
    );
}

export default Home;
