import React, { useState } from "react";
import "./FilterPanel.scss";
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
  "Spindle",
  "KZ Magula",
  "Bujally",
  "Orland",
  "KARENA",
  "KONGLZ",
];
const products = [
  { name: "Telna Convallis", price: "$1,200.00" },
  { name: "Hendra Quisque", price: "$800.00" },
  { name: "Dokura Magna", price: "$1,000.00" },
  { name: "Felix Vehicula", price: "$740.00" },
  { name: "Commodo Armacper", price: "$1,250.00" },
];

const FilterPanel = () => {
  const [minVal, setMinVal] = useState(100);
  const [maxVal, setMaxVal] = useState(900);
  const min = 0;
  const max = 1300;
  return (
    <div className=" filter-panel  w-full md:w-80 p-4 bg-white shadow-md rounded-lg space-y-6">
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
      <div className="catagoriaContainerr">
        <h2 className="font-semibold mb-2">Filter by category</h2>
        {categories.map((cat) => (
          <div className="catagoriaContainer">
            <div className="catagoria">
              <label key={cat} className="block text-sm">
                {cat}
              </label>
              <input type="checkbox" className="mr-2" />
            </div>
              <h2>7</h2>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="color-container">
        <h2 className="font-semibold mb-2">Filter by color</h2>
        <div className=" color-grid grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">{color}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h2 className="font-semibold mb-2">Filter by material</h2>
        {materials.map((mat) => (
          <label key={mat} className="block text-sm">
            <input type="checkbox" className="mr-2" />
            {mat}
          </label>
        ))}
      </div>

      {/* Brand Filter */}
      <div>
        <h2 className="font-semibold mb-2">Filter by brand</h2>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <button
              key={brand}
              className="bg-gray-100 px-2 py-1 rounded text-sm hover:bg-gray-200"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Best Selling Products */}
      <div>
        <h2 className="font-semibold mb-2">Best selling products</h2>
        <ul className="space-y-2">
          {products.map((prod) => (
            <li key={prod.name} className="flex justify-between text-sm">
              <span>{prod.name}</span>
              <span>{prod.price}</span>
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default FilterPanel;
