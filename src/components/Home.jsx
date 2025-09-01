import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Home.css';
import bannerAi from "./images/Banner 1.jpg";
import webbanner from "./images/Iphone Final Banner.jpg";
import inch from "./images/98inch.jpeg"
import ChatBot from "./ChatBot";
import front from "./images/frontspeaker.jpeg"

function Home() {
    return (

        <div className="App">

            <header className="App-header">



                {/* home page code */}

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerAi} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={inch} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={webbanner} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={front} className="d-block w-100" alt="..." />
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

                {/* counter  */}

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