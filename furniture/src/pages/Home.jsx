import React from "react";
import "./Home.scss";
import ProductCard from "../pages/products/ProductCard";
import products from "../pages/js/products.js";
import product from "../pages/js/product.js";
import Productfurniture from "../pages/products/Productfurniture.jsx";
import CardList from "../pages/products/CardList.jsx";
export default function Home() {
  return (
    <div className="container-home">
      <div className="home">
        <div className="home__left">
          <h1>
            Exquisite design <br /> combined with <br /> functionalities
          </h1>
          <p>
            Pellentesque ullamcorper dignissim condimentum <br />
            volutpat consequat mauris nunc lacinia quis.
          </p>

          <div className="home__contact">
            <div className="avatars">
              <img src={require("../assets/home-avatar-1.webp")} alt="#" />
              <img src={require("../assets/home-avatar-2.webp")} alt="#" />
              <img src={require("../assets/home-avatar-3.webp")} alt="#" />
            </div>
            <span>Contact with our expert</span>
          </div>

          <button className="home__shop">Shop Now</button>
        </div>

        <div className="home__right">
          <div className="product-card main">
            <div className="label">
              <h4>Wooden Chair</h4>
              <p>$199</p>
            </div>
            <button className="arrow">→</button>
          </div>

          <div className="side-cards">
            <div className="product-card">
              <div className="label">
                <h4>Pretium Elite</h4>
                <p>$130</p>
              </div>
              <button className="arrow">→</button>
            </div>

            <div className="discount-card">
              <h3>25% OFF</h3>
              <p>Donec ac odio tempor dapibus.</p>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="home__bestsellers">
        <h2>Bestsellers of the week</h2>
        <p>
          Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget
          nullam non nisi elementum sagittis.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="rooms_container">
        <div className="room_left">
          <h1>Browse by rooms</h1>
          <p>
            Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae
            imperdiet <br /> vulputate a eu. Aliquet ullamcorper leo mi vel sit
            pretium euismod eget.
          </p>

          <div className="room_image">
            <img
              src={require("../assets/browse-by-rooms-image-1-1.webp")}
              alt="#"
            />
            <div className="living">
              <h4>Living Room</h4>
              <p>15 products</p>
            </div>
          </div>
        </div>

        <div className="room_right">
          <div className="top_img">
            <img
              src={require("../assets/browse-by-rooms-image-2-1.webp")}
              alt="#"
            />
            <div className="living">
              <h4>Living Room</h4>
              <p>15 products</p>
            </div>
          </div>
          <div className="botoom_img">
            <div className="images">
              <img
                src={require("../assets/browse-by-rooms-image-3.webp")}
                alt="#"
              />
              <div className="living">
                <h4>Living Room</h4>
                <p>15 products</p>
              </div>
            </div>
            <div className="images">
              <img
                src={require("../assets/browse-by-rooms-image-4-1.webp")}
                alt="#"
              />
              <div className="living">
                <h4>Living Room</h4>
                <p>15 products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__bestsellers">
        <h2>Top selling furniture</h2>
        <p>
          Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget
          nullam non nisi elementum sagittis vitae et leo duis ut diam quam.
        </p>
        <div className="product-grid">
          {product.map((product) => (
            <Productfurniture key={product.id} product={product} />
          ))}
        </div>
      </div>

      <CardList />



      <div className="luxurious-container">
        <div className="luxurious-left">
          <h1>
          Luxurious Furniture Starts with the Best Quality Materials
          </h1>
          <p>Donec et odio pellentesque diam volutpat commodo amet consectetur adipiscing elit ut aliquam purus vitae et leo duis ut diam quam nulla porttitor. Sodales ut eu sem integer vitae justo eget magna.</p>

          <button>Learn More</button>
        </div>
        <div className="luxurious-right"></div>
      </div>
    </div>
  );
}
