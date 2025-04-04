import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import {
  FaChair,
  FaCouch,
  FaBed,
  FaTable,
  FaWarehouse,
  FaDharmachakra,
  FaLocationArrow,
  FaPhone,
  FaRegUserCircle,
  FaRegHeart,
  FaShoppingBag,
  FaSearch,
} from "react-icons/fa";
import { MdOutlineLocalFlorist } from "react-icons/md";
import "../components/Header.scss";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" >
      <div  className={`header__sticky ${isSticky ? "sticky" : ""}`}>
        <div className="header__top">
          <div className="header__logo">
            <FaWarehouse /> Furniture
            <div className="searchh">
              <input
                type="text"
                placeholder="Search"
                className="header__search"
              />
              <FaSearch />
            </div>
          </div>
          <nav className="header__menu">
            <Link to="/">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/About">About Us</Link>
            <Link to="/News">News</Link>
            <Link to="/Contact">Contact Us</Link>
          </nav>
          <div className="header__icons">
            <div className="header__icon">
              <FaRegUserCircle />
            </div>
            <div className="header__icon">
              <FaRegHeart />
            </div>
            <div className="header__icon">
              <FontAwesomeIcon icon={faShuffle} />
            </div>
            <div className="header__icon">
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <div className={`header__categories ${isSticky ? "hidden" : ""}`}>
        <div className="header__items">
          <div className="header__item">
            <FaChair /> Chairs
          </div>
          <div className="header__item">
            <FaWarehouse /> Storage
          </div>
          <div className="header__item">
            <FaDharmachakra /> Armchairs
          </div>
          <div className="header__item">
            <FaCouch /> Sofas
          </div>
          <div className="header__item">
            <FaBed /> Beds
          </div>
          <div className="header__item">
            <FaTable /> Tables
          </div>
          <div className="header__item">
            <MdOutlineLocalFlorist /> Decor
          </div>
        </div>

        {/* Adres Bilgileri */}
        <div className="header_adress">
          <div className="adress">
            <FaLocationArrow />
            <div>
              <h2>Address:</h2>
              <p>Street Name, NY 38954</p>
            </div>
          </div>
          <div className="adress">
            <FaPhone />
            <div>
              <h2>Phone:</h2>
              <p>+578-393-4937</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
