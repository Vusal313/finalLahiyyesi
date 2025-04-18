import React from "react";
import { Heart, Eye, Shuffle } from "lucide-react";
import "./Productfurniture.scss";
const Productfurniture = ({ product }) => {

  return (
    <div className="modernCard">
      <div className="imageBox">
        <img src={product.image} alt={product.name} />
        <div className="iconGroup">
          <button>
            <Heart size={16} />
          </button>
          <button>
            <Shuffle size={16} />
          </button>
          <button>
            <Eye size={16} />
          </button>
        </div>
      </div>

      <div className="content">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <div className="bottom">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="addBtn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Productfurniture;
