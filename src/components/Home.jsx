import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Home.css';
import Tagline from "./images/tagline.jpeg";
import smtspkr from "./images/smtspkr.jpeg";
import smt32 from "./images/smt32.jpeg"
import ChatBot from "./ChatBot";
// import front from "./images/frontspeaker.jpeg"
import Category from "./Category";
import today from "./images/ordertoday.jpeg"
import Best from "./Best"
function Home() {
    return (

        <div className="App">

            <header className="App-header">
                {/* home page code */}

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
                {/* counter  */}
                <Best/>

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