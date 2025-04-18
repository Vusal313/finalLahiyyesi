import React from "react";
import "./Shop.scss";
import FilterPanel from "./products/FilterPanel";
import armchairs from "../assets/tables-category-hero-image.webp";
import chairs from "../assets/tables-category-hero-image.webp";
import storage from "../assets/decor-category-hero-image.webp";
import sofas from "../assets/storage-category-hero-image.webp";
import decor from "../assets/chairs-category-hero-image.webp";
import tables from "../assets/armchairs-category-hero-image.webp";
import banner from "../assets/shop-hero-image.webp";
import ProductList from "../ProductList.jsx";
import { FaAddressBook, FaGift, FaRedRiver, FaWallet } from "react-icons/fa";
const categories = [
  { image: armchairs, title: "Armchairs", count: 5 },
  { image: chairs, title: "Chairs", count: 6 },
  { image: storage, title: "Storage", count: 6 },
  { image: sofas, title: "Sofas", count: 6 },
  { image: decor, title: "Decor", count: 8 },
  { image: tables, title: "Tables", count: 5 },
];

const Shop = () => {
  return (
    <div className="shop">
      <div
        className="shop__banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="shop__overlay">
          <h1>Shop</h1>
          <p>HOME {">"} SHOP</p>
        </div>
      </div>

      <div className="shop__categories">
        {categories.map((cat, idx) => (
          <div className="shop__card" key={idx}>
            <img src={cat.image} alt={cat.title} />
            <div>
              <h3>{cat.title}</h3>
              <p>{cat.count} products</p>
            </div>
          </div>
        ))}
      </div>

      <div className="catagoryContainer">
        <div className="catagoryContaine">
          <FilterPanel />
        </div>

        <div className="catagoryContainerr">
          <div className="catagoriHeader">
            <p>Showing 1–12 of 45 results</p>
            <select onChange={(e) => console.log(e.target.value)}>
              <option value="all">Default Sorting</option>
              <option value="electronics"> Sort by popularity</option>
              <option value="fashion">Sort by average rating</option>
              <option value="accessories">Sort by latest</option>
              <option value="books">Sort by low to hig</option>
              <option value="home"> Sort by hig to low</option>
            </select>
          </div>
          <ProductList />

          <div className="nextBtn">
            <div className="left">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
            <div className="right">
              <button>Next {">"}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pulvinar">
        <div>
          <FaWallet size={40} style={{ color: "#333", margin: "10px" }} />
          <h2>Secure Payments</h2>
          <p>Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.</p>
        </div>
        <div>
          <FaRedRiver size={40} style={{ color: "#333", margin: "10px" }} />
          <h2>Free Shipping</h2>
          <p>
            Non pulvinar aenean ultrices lectus vitae imperdiet vulputate a eu.
          </p>
        </div>
        <div>
          <FaGift size={40} style={{ color: "#333", margin: "10px" }} />
          <h2>SGifts & Sales</h2>
          <p>Aliquet ullamcorper leo mi vel sit pretium euismod eget libero.</p>
        </div>
        <div>
          <FaAddressBook size={40} style={{ color: "#333", margin: "10px" }} />
          <h2>24/7 Support</h2>
          <p>
            Nullam iaculis vestibulum arcu id urnain pellentesque volutpat quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
