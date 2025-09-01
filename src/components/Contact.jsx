import React, { useEffect, useState } from "react";
import AOS from "aos";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./Contact.css";
// import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_syaylf5";
    const templateID = "template_5sytsak";
    const publicKey = "tVVpjOgRLVbUyu5w3";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us. We’ll get back to you shortly.",
          confirmButtonColor: "#e74c3c",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Email error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#e74c3c",
        });
      });
  };

  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          We'd love to hear from you. Fill out the form below and our team will get in touch.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            data-aos="fade-right"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            data-aos="fade-left"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            data-aos="fade-right"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            data-aos="fade-left"
          ></textarea>
          <button type="submit" data-aos="zoom-in">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Redwolf Location"
          src="https://maps.google.com/maps?q=Redwolf%20Infotech&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;










// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// // import "aos/dist/aos.css";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for contacting us!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <div className="contact-wrapper" id="contact">
//       <div className="contact-container" data-aos="fade-up">
//         <h2 className="contact-title">Contact Us</h2>
//         <p className="contact-subtitle">
//           We'd love to hear from you. Fill out the form below and our team will get in touch.
//         </p>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             data-aos="fade-right"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             data-aos="fade-left"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             data-aos="fade-right"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             data-aos="fade-left"
//           ></textarea>
//           <button type="submit" data-aos="zoom-in">
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Google Map */}
//       <div className="map-container" data-aos="fade-up">
//         <iframe
//           title="Redwolf Location"
//           src="https://maps.google.com/maps?q=Redwolf%20Infotech&t=&z=13&ie=UTF8&iwloc=&output=embed"
//           width="100%"
//           height="350"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Contact;






















// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Make sure this is uncommented
// import "./Contact.css";
// import "aos/dist/aos.css";
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for contacting us!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex">
//           <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact-Us</h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               {/* Post-ironic portland shabby chic echo park, banjo fashion axe */}
//             </p>
//             <form onSubmit={handleSubmit}>
//               <div className="relative mb-4">
//                 <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <div className="relative mb-4">
//                 <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <div className="relative mb-4">
//                 <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
//                   Phone
//                 </label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <div className="relative mb-4">
//                 <label htmlFor="message" className="leading-7 text-sm text-gray-600">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 id="submit">
//                 Submit
//               </button>
//             </form>
//             <p className="text-xs text-gray-500 mt-3">
//               {/* Chicharrones blog helvetica normcore iceland tousled brook viral artisan. */}
//             </p>
//           </div>
//         </div>

//         <div className="absolute inset-0 bg-gray-300" id="map">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4537664536783!2d77.4019121761894!3d28.495992475739648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce85dbf2fffff%3A0x1f70e96c5228abe8!2sRed%20Wolf%20Hi-Tech%20(Adeeva%20Technologies)!5e0!3m2!1sen!2sin!4v1750144441033!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="location-map"
//           ></iframe>
//         </div>
//       </section>
      
//     </div>
//   );
// }

// export default Contact;



