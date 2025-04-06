import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaWarehouse,
  FaRegUserCircle,
  FaRegHeart,
  FaSearch,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartDrawer from "../components/ShoppingCartDrawer"; 
import "../components/Header.scss";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        searchBoxRef.current.classList.remove("active");
      }
    };

    const handleClickInside = () => {
      if (searchBoxRef.current) {
        searchBoxRef.current.classList.add("active");
      }
    };

    const box = searchBoxRef.current;
    if (box) {
      box.addEventListener("click", handleClickInside);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (box) {
        box.removeEventListener("click", handleClickInside);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className={`header__sticky ${isSticky ? "sticky" : ""}`}>
        <div className="header__container">
          <div className="header__logo">
            <FaWarehouse />
            Furniture
          </div>

          <div className="search-box" ref={searchBoxRef}>
            <input type="text" placeholder="Search" />
            <FaSearch />
          </div>

          <div className="header__menu">
            <Link to="/">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/About">About Us</Link>
            <Link to="/News">News</Link>
            <Link to="/Contact">Contact Us</Link>
          </div>

          <div className="header__right">
            <div className="header__icons">
              <div className="icon hide-mobile">
                <FaRegUserCircle />
              </div>
              <div className="icon ">
                <FaRegHeart />
              </div>
              <div className="icon hide-mobile  ">
                <FontAwesomeIcon icon={faShuffle} />
              </div>
              <div className="icon">
                <ShoppingCartDrawer /> 
              </div>
            </div>

            <div className="mobile-toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-nav-panel ${mobileMenuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/Shop" onClick={toggleMenu}>
          Shop
        </Link>
        <Link to="/About" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/News" onClick={toggleMenu}>
          News
        </Link>
        <Link to="/Contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}
