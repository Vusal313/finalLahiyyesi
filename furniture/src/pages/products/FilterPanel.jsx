import React, { useState } from "react";
import "./FilterPanel.scss";
import goldline from "../../assets/brand-goldline.svg";
import maganolli from "../../assets/brand-magnolia.svg";
import contrast from "../../assets/brand-contrast.svg";
import boltshift from "../../assets/brand-boltshift.svg";
import asgardia from "../../assets/brand-asgardia.svg";
import komplex from "../../assets/brand-komplex.svg";
import product45 from "../../assets/product-45.webp";
import product44 from "../../assets/product-44.webp";
import product43 from "../../assets/product-43.webp";
import product42 from "../../assets/product-42.webp";
import product41 from "../../assets/product-41.webp";
const categories = [
  "Armchairs",
  "Chairs",
  "Storage",
  "Sofas",
  "Decor",
  "Tables",
  "Beds",
];

const colors = [
  "Beige",
  "Black",
  "Blue",
  "Brown",
  "Grey",
  "Green",
  "Orange",
  "White",
  "Yellow",
];

const materials = [
  "Aluminium",
  "Fabric",
  "Glass",
  "Leather",
  "Marble",
  "Metal",
  "Plastic",
  "Wood",
];

const brands = [
  { img: goldline },
  { img: maganolli },
  { img: contrast },
  { img: boltshift },
  { img: asgardia },
  { img: komplex },
];

const products = [
  {
    name: "Tellus Convallis",
    price: 1200,
    oldPrice: 1350,
    img: product45,
  },
  {
    name: "Hendre Quisque",
    price: 800,
    oldPrice: 950,
    img: product44,
  },
  {
    name: "Dolore Magna",
    price: 1000,
    img: product43,
  },
  {
    name: "Felis Vehicula",
    price: 740,
    img: product42,
  },
  {
    name: "Commodo Amcorper",
    price: 1250,
    img: product41,
  },
];



const FilterPanel = () => {
  const [minVal, setMinVal] = useState(100);
  const [maxVal, setMaxVal] = useState(900);
  const min = 0;
  const max = 1300;

  return (
    <div className="filter-panel w-full md:w-80 p-4 bg-white shadow-md rounded-lg space-y-6">
      {/* Price Filter */}
      <div className="range-container">
        <h2 className="font-semibold mb-2">Filter by price</h2>
        <div className="slider">
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), maxVal - 1);
              setMinVal(value);
            }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), minVal + 1);
              setMaxVal(value);
            }}
          />
          <div className="slider-track" />
          <div
            className="slider-range"
            style={{
              left: `${(minVal / max) * 100}%`,
              right: `${100 - (maxVal / max) * 100}%`,
            }}
          />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Price: ${minVal} - ${maxVal}
        </div>
      </div>

      {/* Category Filter */}
      <FilterGroup
        title="Filter by category"
        items={categories}
        type="checkbox"
      />

      {/* Color Filter */}
      <div className="color-container">
        <h2 className="font-semibold mb-2">Filter by color</h2>
        <div className="color-grid">
          {colors.map((color, index) => (
            <div key={color} className="color-row">
              <div className="left-side">
                <input
                  type="radio"
                  name="color"
                  id={`color-${index}`}
                  className="color-radio"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
                <label htmlFor={`color-${index}`} className="color-name">
                  {color}
                </label>
              </div>
              <div className="color-count">
                {Math.floor(Math.random() * 10)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <FilterGroup
        title="Filter by material"
        items={materials}
        type="checkbox"
      />

      {/* Brand Filter */}
      <div className="filter-panell brand-filterr w-full md:w-80 p-4 bg-white shadow-md rounded-lg space-y-6">
        {/* Brand Filter */}
        <div className="brand-filter">
          <h2>Filter by brand</h2>
          <div className="brand-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-container">
                <img
                  src={brand.img}
                  alt={`Brand ${index + 1}`}
                  className="brand-img"
                />
                <div className="brand-name">Brand {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="best-selling">
        <h2>Best selling products</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.name} className="product-item">
              <img src={product.img} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="prices">
                  <span className="price">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="old-price">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ✅ Reusable filter group component
const FilterGroup = ({ title, items, type }) => (
  <div className="color-container">
    <h2 className="font-semibold mb-2">{title}</h2>
    <div className="color-grid">
      {items.map((item) => (
        <div key={item} className="color-row">
          <div className="left-side">
            <input type={type} />
            <span className="color-name">{item}</span>
          </div>
          <div className="color-count">{Math.floor(Math.random() * 10)}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FilterPanel;
