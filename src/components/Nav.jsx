// src/components/Nav.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "./images/redwolflogo.png";
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist context
import { useCart } from "./CartContext"; // ✅ Cart context

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();
  const { wishlist } = useWishlist(); // ✅ Wishlist context
  const { cart } = useCart(); // ✅ Cart context

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setErrorMsg("");
    setSearchValue("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchValue.toLowerCase();

    if (query === "led") {
      navigate("/led");
      toggleSearch();
    } else if (query === "speaker") {
      navigate("/speaker");
      toggleSearch();
    } else {
      setErrorMsg("I don’t understand this kind of thing 😅");
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <>
      <header className="nav-header">
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo-link">
            <img src={logo} alt="Logo" className="nav-logo" />
          </Link>

          <nav className="nav-menu">
            <ul className="nav-items">
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
              <li className="nav-item"><Link to="/blog">Blog</Link></li>
              <li className="nav-item"><Link to="/television">LED</Link></li>
              <li className="nav-item"><Link to="/speaker">SPEAKER</Link></li>
              {/* <li className="nav-item"><Link to="/product">Product</Link></li> */}
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="nav-icons">
            {/* <FaSearch className="icon" onClick={toggleSearch} /> */}
            {/* <FaUser className="icon" /> */}

            {/* ✅ Wishlist icon with count */}
            <div className="wishlist-icon" onClick={() => navigate("/wishlist")}>
              <FaHeart className="icon" />
              <span className="wishlist-count">{wishlist.length}</span>
            </div>

            {/* ✅ Cart icon with dynamic count */}
            <div className="cart-wrapper" onClick={() => navigate("/cart")}>
              <FaShoppingBag className="icon" />
              <span className="cart-count">{cart.length}</span>
            </div>

            <button className="dark-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/product" onClick={toggleMenu}>Product</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}

      {isSearchOpen && (
        <div className="search-overlay">
          <button className="search-close" onClick={toggleSearch}>×</button>
          <form onSubmit={handleSearch} className="search-box">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>
          {errorMsg && <p className="search-error">{errorMsg}</p>}
        </div>
      )}
    </>
  );
}

export default Nav;
