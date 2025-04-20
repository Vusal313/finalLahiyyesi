import React, { useState } from "react";
import "./ProductDetail.scss";
import { ReactComponent as BrandGoldline } from "./assets/brand-goldline.svg";
import product from "./pages/js/product.js";
import Productfurniture from "./pages/products/Productfurniture";

import {
  FaArrowRight,
  FaFacebook,
  FaHeart,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaAddressBook,
  FaGift,
  FaRedRiver,
  FaWallet,
} from "react-icons/fa";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.target;
    const x = (e.clientX / offsetWidth) * 100;
    const y = (e.clientY / offsetHeight) * 100;
    setPosition({ x, y });
    setScale(1.3);
  };

  const handleMouseLeave = () => {
    setScale(1);
  };

  return (
    <div className="cardInfoContainer">
      <div className="cardInfo">
        <div className="cardInfoimg">
          <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease",
              transformOrigin: `${position.x}% ${position.y}%`,
            }}
          >
            <img src={require("./assets/product-35.webp")} alt="Product" />
          </div>
        </div>

        <div className="cardInfotxt">
          <div className="blandit">
            <h2>Aliquam Blandit</h2>
            <h4 className="product-price">$320.00</h4>

            <p>
              Porttitor lacus luctus accumsan tortor posuere ac ut. Amet nisl
              suscipit adipiscing commodo elit at imperdiet dui.
            </p>
            <p>
              Quis varius quam quisque id. Facilisis gravida neque convallis a
              cras semper auctor neque vitae. Proin sagittis nisl rhoncus mattis
              rhoncus urna neque viverra. Dolor magna eget est lorem ipsum.
              Integer quis auctor elit sed vulputate mi sit amet mauris. Egestas
              egestas fringilla phasellus faucibus scelerisque eleifend donec
              pretium. Duis ut diam quam nulla. Aliquet lectus proin nibh nisl
              condimentum id venenatis. Mauris nunc congue nisi vitae suscipit.
            </p>
          </div>

          <div className="quantity-btn">
            <div className="quantity-controls">
              <button className="qty-btn" onClick={decreaseQty}>
                -
              </button>
              <span>{quantity}</span>
              <button className="qty-btn" onClick={increaseQty}>
                +
              </button>
            </div>
            <button className="buttonBtn">Add to Cart</button>
          </div>

          <div className="product-actions">
            <span>
              <FaHeart /> Wishlist
            </span>
            <span>
              <FaArrowRight /> Compare
            </span>
            <span>
              <FaHome /> Size Guide
            </span>
          </div>

          <div className="goldlineimg">
            <BrandGoldline />
          </div>
          <div className="social-icon">
            <p>CATEGORY: TABLES</p>
            <div className="social-icons">
              <FaFacebook className="icone" aria-label="Facebook" />
              <FaInstagram className="icone" aria-label="Instagram" />
              <FaLinkedin className="icone" aria-label="LinkedIn" />
              <FaPinterest className="icone" aria-label="Pinterest" />
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <p className="descriptionP">Description</p>
        <p>Additional information</p>
        <p>Reviews (0)</p>
      </div>

      <div className="porttitor">
        <p>
          Sit amet nulla facilisi morbi tempus iaculis. Phasellus vestibulum
          lorem sed risus ultricies tristique. Urna neque viverra justo nec
          ultrices dui sapien eget mi. Dignissim sodales ut eu sem integer vitae
          justo.
        </p>
        <p>
          Porttitor lacus luctus accumsan tortor posuere ac ut. Amet luctus
          venenatis lectus magna fringilla urna. At erat pellentesque adipiscing
          commodo elit at imperdiet dui.
        </p>
        <p>
          Quis varius quam quisque id. Facilisis gravida neque convallis a cras
          semper auctor neque vitae. Proin sagittis nisl rhoncus mattis rhoncus
          urna neque viverra. Dolor magna eget est lorem ipsum. Integer quis
          auctor elit sed vulputate mi sit amet mauris. Egestas egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium. Duis
          ut diam quam nulla. Aliquet lectus proin nibh nisl condimentum id
          venenatis. Mauris nunc congue nisi vitae suscipit.
        </p>
        <p>
          Augue interdum velit euismod in pellentesque massa placerat duis.
          Porttitor massa id neque aliquam vestibulum morbi blandit cursus
          risus.
        </p>
      </div>

      <div className="product-grid">
        {product.map((product) => (
          <Productfurniture key={product.id} product={product} />
        ))}
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

export default ProductDetail;
