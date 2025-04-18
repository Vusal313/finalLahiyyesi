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

import Productfurniture from "./products/Productfurniture";

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

      <div  className="catagoryContainer">
        <div className="">
          <FilterPanel />
        </div>

        <div>
          <Productfurniture/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
