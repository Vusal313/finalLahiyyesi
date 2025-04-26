import React from "react";
import { Heart, Eye, Shuffle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (product.id === 1) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className="modernCard" onClick={handleClick} style={{ cursor: product.id === 1 ? "pointer" : "default" }}>
      <div className="imageBox">
        <img src={product.image} alt={product.name} />
        <div className="iconGroup">
          <button><Heart size={16} /></button>
          <button><Shuffle size={16} /></button>
          <button><Eye size={16} /></button>
        </div>
      </div>

      <div className="content">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <div className="bottom">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="addBtn">Ado cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
