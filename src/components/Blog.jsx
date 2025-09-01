import React, { useState } from "react";
import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import blog3 from "./images/vlog.jpg";
import blog4 from "./images/yashled1.jpeg";
import "./blog.css";

const Blog = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // Blogs Array (Unique IDs)
    const blogs = [
        {
            id: 1,
            title: "Why T-COPS EMI Finance Locker?",
            desc: "In today’s fast-paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses. Delays, defaults, and lack of secure tracking often lead to stress and losses. That’s where Red Wolf Info Tech Pvt. Ltd. steps in with its breakthrough solution — T-COPS EMI Finance Locker.",
            img: blog1,
            full: "Revolutionizing EMI Collections with T-COPS EMI Finance Locker In today’s fast- paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses.Delays, defaults, and lack of secure tracking often lead to stress and losses.That’s where Red Wolf Info Tech Pvt.Ltd.steps in with its breakthrough solution — T - COPS EMI Finance Locker. Why T - COPS EMI Finance Locker ? At Red Wolf Info Tech, we believe in empowering businesses with smart technology that makes operations seamless.Our EMI Finance Locker is designed to not only simplify collections but also give lenders complete control and security over financed devices. With T - COPS EMI Locker, lenders can: ✅ Track device location in real time. ✅ Lock or unlock financed devices online. ✅ Secure the device with camera lock and phone lock. ✅ Reboot devices remotely in case of default. ✅ Manage EMI recovery without stress or manual intervention. This isn’t just software — it’s a digital shield for your business. How It Works When a customer purchases a device on EMI, the T - COPS Finance Locker is integrated into it.If payments are delayed or missed, lenders have the power to: Restrict device functionality. Send reminders and warnings directly on the phone.  Lock access until dues are cleared. This ensures on - time EMI collections while reducing risks of fraud and defaults. Benefits for Businesses 📈 Faster EMI Recovery – Improve cash flow and reduce losses. 🔒 Unmatched Security – Ensure financed devices are always under control. ⚡ Smart Automation – No more chasing defaulters manually.  🌐 Scalable & Reliable – Works across locations and for businesses of all sizes. Why Choose Red Wolf Info Tech ?  With years of expertise in technology - driven business solutions, Red Wolf Info Tech has built trust with partners across industries.Our mission is to makefinancesecure, simple, and scalable. The T - COPS EMI Finance Locker is not just a product; it’s a commitment to helping businesses thrive with peace of mind. Conclusion If EMI collections have ever been a roadblock for your business, it’s time to switch to a smarter way.With T - COPS EMI Finance Locker by Red Wolf Info Tech, you get technology that puts you back in control — ensuring security, efficiency, and growth. 📞 Contact Us: 9988401333 🌐 Website: www.redwolfinfotech.com"
        },
        {
            id: 3,
            title: "Why Redwolf LED TVs?",
            desc: "At Red Wolf Info Tech, we don’t just create products — we create experiences. With our Redwolf LED TV range, entertainment steps beyond the ordinary, bringing breathtaking visuals, lifelike sound, and cutting-edge technology right into your living room.",
            img: blog3,
            full: "Redwolf LED TVs: Where Every Pixel Comes Alive At Red Wolf Info Tech, we don’t just create products — we create experiences. With our Redwolf LED TV range, entertainment steps beyond the ordinary, bringing breathtaking visuals, lifelike sound, and cutting-edge technology right into your living room.Imagine dinosaurs roaring to life, galaxies unfolding in infinite detail, and every movie scene making you feel like you’re part of the story. That’s the Redwolf promise — “Where Dreams Come Alive.” Why Redwolf LED TVs? 📺 Ultra HD & HDR Brilliance Whether it’s 4K UHD or HDR10, every frame is packed with detail and clarity, ensuring that what you see is true-to-life and vibrant. 🎥 Cinematic Dolby Audio Sound isn’t just heard — it’s experienced. Dolby-powered audio fills your room, making action scenes thunderous and dialogues crisp. ⚡ Smart TV Powered by Android Seamless access to apps, streaming platforms, and smart features means your entertainment is always at your fingertips. 🎮 Lag-Free Gaming Mode With HDMI and enhanced refresh rates, gaming becomes smoother, sharper, and more immersive. 🌍 Wide Range of Sizes From compact 24-inch screens for bedrooms to stunning 98-inch displays for larger-than-life experiences — Redwolf LED TVs fit every space and lifestyle. Built for Today, Ready for Tomorrow Entertainment is evolving — and so are we. With Redwolf LED TVs, you don’t just get a television; you get a complete entertainment hub. Every product is designed with advanced technology, premium build quality, and a focus on giving you more than just viewing — we give you experiences that stay with you. Join the Redwolf Experience As part of the Red Wolf Info Tech family, our mission is to blend technology with lifestyle. From T-COPS EMI Locker to Speakers, EVs, and LED TVs, we’re building an ecosystem that makes life smarter, simpler, and more entertaining. 👉 Step into the future of entertainment with Redwolf LED TVs — where every pixel bites back, and every moment feels alive. 📞 Contact us today: 9717660554 | 9988401333🌐 www.redwolfinfotech.com"
        },
        {
            id: 1,
            title: "Why T-COPS EMI Finance Locker?",
            desc: "In today’s fast-paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses. Delays, defaults, and lack of secure tracking often lead to stress and losses. That’s where Red Wolf Info Tech Pvt. Ltd. steps in with its breakthrough solution — T-COPS EMI Finance Locker.",
            img: blog1,
            full: "Revolutionizing EMI Collections with T-COPS EMI Finance Locker In today’s fast- paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses.Delays, defaults, and lack of secure tracking often lead to stress and losses.That’s where Red Wolf Info Tech Pvt.Ltd.steps in with its breakthrough solution — T - COPS EMI Finance Locker. Why T - COPS EMI Finance Locker ? At Red Wolf Info Tech, we believe in empowering businesses with smart technology that makes operations seamless.Our EMI Finance Locker is designed to not only simplify collections but also give lenders complete control and security over financed devices. With T - COPS EMI Locker, lenders can: ✅ Track device location in real time. ✅ Lock or unlock financed devices online. ✅ Secure the device with camera lock and phone lock. ✅ Reboot devices remotely in case of default. ✅ Manage EMI recovery without stress or manual intervention. This isn’t just software — it’s a digital shield for your business. How It Works When a customer purchases a device on EMI, the T - COPS Finance Locker is integrated into it.If payments are delayed or missed, lenders have the power to: Restrict device functionality. Send reminders and warnings directly on the phone.  Lock access until dues are cleared. This ensures on - time EMI collections while reducing risks of fraud and defaults. Benefits for Businesses 📈 Faster EMI Recovery – Improve cash flow and reduce losses. 🔒 Unmatched Security – Ensure financed devices are always under control. ⚡ Smart Automation – No more chasing defaulters manually.  🌐 Scalable & Reliable – Works across locations and for businesses of all sizes. Why Choose Red Wolf Info Tech ?  With years of expertise in technology - driven business solutions, Red Wolf Info Tech has built trust with partners across industries.Our mission is to makefinancesecure, simple, and scalable. The T - COPS EMI Finance Locker is not just a product; it’s a commitment to helping businesses thrive with peace of mind. Conclusion If EMI collections have ever been a roadblock for your business, it’s time to switch to a smarter way.With T - COPS EMI Finance Locker by Red Wolf Info Tech, you get technology that puts you back in control — ensuring security, efficiency, and growth. 📞 Contact Us: 9988401333 🌐 Website: www.redwolfinfotech.com"
        },
        {
            id: 2,
            title: "Why Choose Red Wolf Speakers?",
            desc: "At Red Wolf Info Tech, we believe sound isn’t just heard — it’s felt. That’s why our Redwolf Speaker Rock & Roll Series is designed to transform every space into a party zone, every beat into an experience, and every moment into a memory. 🎶✨",
            img: blog2,
            full: "Turn Up the Volume: Redwolf Speakers Rock & Roll Series At Red Wolf Info Tech, we believe sound isn’t just heard — it’s felt. That’s why our Redwolf Speaker Rock & Roll Series is designed to transform every space into a party zone, every beat into an experience, and every moment into a memory. 🎶✨ Why Choose Redwolf Speakers? 🔊 Powerful Sound, Crystal Clarity From thumping bass to sharp trebles, our speakers deliver immersive audio that brings music alive, whether indoors or outdoors. 🌈 RGB Party Lights More than just sound — it’s a show. Built-in RGB lights sync with your beats, setting the vibe for any party, get-together, or celebration. 🎤 Karaoke-Ready With support for karaoke, our speakers don’t just play music — they make you the star of the evening. Perfect for family nights, office parties, and friendly jam sessions. 🔋 All-Day Battery Power Engineered for performance, Redwolf speakers are built to last, keeping the music rolling from dusk till dawn. 📱 Seamless Connectivity Bluetooth-enabled with multiple input options (AUX, USB, and more), staying connected has never been easier. Where Style Meets Performance The Rock & Roll Series isn’t just about sound — it’s about making a statement. With sleek designs, dynamic lighting, and superior build quality, our speakers stand tall as the centerpiece of your celebrations. Whether it’s a house party, a rooftop evening, or a spontaneous road trip, Redwolf Speakers ensure you never miss a beat. 🎧🚀 Join the Redwolf Revolution At Red Wolf Info Tech, innovation meets lifestyle. With our LED TVs, EMI Locker, EV solutions, and Speakers, we’re shaping a smarter, connected, and more entertaining tomorrow. 👉 Experience the Redwolf Rock & Roll Speakers — where sound becomes an emotion and parties never stop. 📞 Contact us today: 9717660554 | 9988401333 🌐 www.redwolfinfotech.com"
        },
        {
            id: 6,
            title: "Why Choose Red Wolf LED TV?",
            desc: "Our latest range of Red Wolf LED TVs delivers stunning picture quality, powered by advanced display technology and immersive sound. From the green of the stadium to the tiniest details of the ball in motion, every frame is sharper, brighter, and more lifelike than ever before.",
            img: blog4,
            full: "Experience the Thrill of the Stadium at Home with Red Wolf LED TVs There’s nothing like the adrenaline rush of watching your favorite match live in a stadium — the roaring crowd, dazzling lights, and every breathtaking moment. But what if you could bring that same energy, clarity, and excitement straight into your living room? With Red Wolf LED TVs, sports fans no longer just watch the game — they live it. Bigger. Better. Bolder.  Our latest range of Red Wolf LED TVs delivers stunning picture quality, powered by advanced display technology and immersive sound. From the green of the stadium to the tiniest details of the ball in motion, every frame is sharper, brighter, and more lifelike than ever before. Perfect for Every Match Whether it’s cricket, football, or any live event, Red Wolf LED TVs ensure you never miss a moment. With Dolby Audio, HDR10, HDMI connectivity, and smart features, your viewing experience transforms into a personal stadium — right from the comfort of your couch. Why Choose Red Wolf LED TV? Cinematic Experience: Stadium-like visuals with vibrant colors. Immersive Sound: Dolby-powered audio makes you feel the roar of the crowd. Smart Connectivity: Access to apps, streaming, and more with ease. Every Occasion, Perfected: Movies, matches, or family nights — enjoy it all. The Game is On — Are You Ready? Grab your popcorn, settle in, and let Red Wolf LED TVs transport you into the heart of the action. Because with us, every game is more than entertainment — it’s an experience. 📞 Call us today: 9717660554 | 9988401333🌐 Visit us: www.redwolfinfotech.com"
        }
    ];

    // Reverse for latest first
    const sortedBlogs = [...blogs].reverse();

    // Pagination Logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

    return (
        <div className="blog-container">
            <h1 className="blog-header">Red Wolf Blog</h1>

            {/* Blog Grid */}
            <div className={`blog-grid ${activeCard ? "blur-bg" : ""}`}>
                {currentBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="blog-card"
                        onClick={() => setActiveCard(blog)}
                    >
                        <img src={blog.img} alt={blog.title} />
                        <h2>{blog.title}</h2>
                        <p>{blog.desc}</p>
                    </div>
                ))}
            </div>

            {/* Pagination Numbers */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* Fullscreen Blog View */}
            {activeCard && (
                <div className="fullscreen-card" onClick={() => setActiveCard(null)}>
                    <div
                        className="fullscreen-bg"
                        style={{ backgroundImage: `url(${activeCard.img})` }}
                    ></div>
                    <div className="fullscreen-overlay"></div>

                    <div
                        className="fullscreen-content-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={() => setActiveCard(null)}>
                            &larr; Back
                        </button>
                        <h2>{activeCard.title}</h2>
                        <p>{activeCard.full}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
