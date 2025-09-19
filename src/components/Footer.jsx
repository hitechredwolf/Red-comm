    import React, { useState } from 'react';
    import './Footer.css';
    import { Link } from "react-router-dom";
    import logo from "./images/redwolflogo.png";
    import swal from 'sweetalert'; // Import SweetAlert

    const Footer = () => {
        const [email, setEmail] = useState("");

        const handleSubscribe = () => {
            if (email.trim() === "") {
                swal("Oops!", "Please enter a valid email address.", "warning");
                return;
            }

            // You can add API call here to actually subscribe the email

            swal("Thank you!", "Thanks for subscribing!", "success");
            setEmail(""); // Clear the input after subscribing
        };

        return (
            <footer>
                <div className="content">
                    <div className="top">
                        <img src={logo} alt="Device Secure Logo" className="footer logo" />

                        <div className="media-icons">
                            <a href="https://www.facebook.com/RedWolfInfoTech"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/redwolfinfotech/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/redwolfhitech1/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://youtube.com/@redwolfhitech"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Address</li>
                            <li className="address">
                                Red Wolf Info Tech Pvt Ltd. <br />
                                Assotech Business Cresterra, <br />
                                Unit-214, Tower-4 <br />
                                Sector 135, Noida-201305.
                            </li>
                        </ul>

                        <ul className="box">
                            <li className="link_name">Email us</li>
                            <li><a href="mailto:info@redwolfhitech.com">info@redwolfinfotech.com</a></li>
                        </ul>

                        <ul className="box">
                            <li className="link_name">Contact us</li>
                            <li><a href="tel:+919214309236">+91 9214309236</a></li>
                            <li><a href="tel:+919717679640">+91 9717679640</a></li>
                            <li><a href="tel:+919717660554">+91 9717660554</a></li>
                        </ul>

                        <ul className="box">
                            <li><Link to="/Terms">Term & Condition</Link></li>
                            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                        </ul>

                        <ul className="box input-box">
                            <li className="link_name">Subscribe</li>
                            <li>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </li>
                            <li>
                                <input
                                    type="button"
                                    value="Subscribe"
                                    onClick={handleSubscribe}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">
                            Copyright © 2025 <a href="#">Red Wolf Info Tech Pvt Ltd.</a><b> All Rights Reserved</b>
                        </span>
                    </div>
                </div>
            </footer>
        );
    };

    export default Footer;
