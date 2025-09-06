import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
// import Tcops from "./components/Tcops";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
// Product Pages
import Television from "./components/Television";
import ProductDetail from "./components/ProductDetail";
import Speaker from "./components/Speaker";
import SpeakertDetails from "./components/SpeakerDetails";
import AirConditioner from "./components/AirConditioner";
import WashingMachines from "./components/WashingMachines";

// import Speaker from "./components/Speaker";
// import Led from "./components/Led";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
// import More from "./components/More";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/television" element={<Television />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/product/:id" element={<SpeakertDetails />} />
        <Route path="/washing-machines" element={<WashingMachines />} />
        <Route path="/air-conditioner" element={<AirConditioner />} />
        {/* <Route path="/Tcops" element={<Tcops />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/speaker" element={<Speaker />} /> */}
        {/* <Route path="/Led" element={<Led />} /> */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        {/* <Route path="/More" element={<More />} /> */}

      </Routes>
      <Footer />
    </>

  );
}

export default App;
