import React from "react";
import "./Home.scss";
export default  function Home  (){
  return (
    <div className="home">
      <div className="home__left">
        <h1>
          Exquisite design <br /> combined with <br /> functionalities
        </h1>
        <p>
          Pellentesque ullamcorper dignissim condimentum volutpat consequat
          mauris nunc lacinia quis.
        </p>

        <div className="home__contact">
          <div className="avatars">
            <img src="../../public/img/Furniture_files/home-avatar-1.webp" alt="#" />
            <img src="../../public/img/Furniture_files/home-avatar-2.webp" alt="#" />
            <img src="../../public/img/Furniture_files/home-avatar-3.webp" alt="#" />
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
  );
};


