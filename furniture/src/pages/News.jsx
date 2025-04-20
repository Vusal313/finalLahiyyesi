import React from "react";
import "./News.scss";
import banner from "../assets/blog-hero-image.webp";
import img1 from "../assets/article-image-5-768x589.webp";
import img2 from "../assets/article-image-9-768x589.webp";
import img3 from "../assets/article-image-8-768x589.webp";
import img4 from "../assets/article-image-7-1-768x589.webp";
import img5 from "../assets/article-image-6-768x589.webp";
import img6 from "../assets/article-image-4-768x589.webp";
import img7 from "../assets/article-image-7-768x589.webp";
import img8 from "../assets/article-image-3-768x589.webp";
import img9 from "../assets/article-image-2-768x589.webp";
import product45 from "../assets/product-45.webp";
import product44 from "../assets/product-44.webp";
import product43 from "../assets/product-43.webp";
import product42 from "../assets/product-42.webp";
import product41 from "../assets/product-41.webp";
const data = [
  {
    img: img1,
    title: "InAccessories",
    subtitle: "Risus Pretium Quam Vulputate",
    text: "Augue neque gravida in fermentum et. Nec sagittis aliquam malesuada bibendum arcu.",
  },
  {
    img: img2,
    title: "InAccessories",
    subtitle: "Risus Pretium Quam Vulputate",
    text: "Risus quis varius quam quisque id diam vel quam elementum. Sit amet luctus venenatis…",
  },
  {
    img: img3,
    title: "InAccessories",
    subtitle: "Placerat Orci Nulla Dignissim Enim",
    text: "Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Cras sed felis eget…",
  },
  {
    img: img4,
    title: "InAccessories",
    subtitle: "Duifaucibus Ornare Quam Viverra",
    text: "Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Blandit volutpat maecenas volutpat…",
  },
  {
    img: img5,
    title: "InAccessories",
    subtitle: "Vestibulum Lorem Sed Risus",
    text: "Quisque egestas diam in arcu. Pretium vulputate sapien nec sagittis aliquam. Magna fermentum iaculis…",
  },
  {
    img: img6,
    title: "InHow To",
    subtitle: "Fames Turpis Egestas Maecenas",
    text: "Tempus iaculis urna id volutpat. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.…",
  },
  {
    img: img7,
    title: "InProcess",
    subtitle: "Ultricies Miquis Hendrerit Dolor",
    text: "Est ante in nibh mauris cursus mattis molestie a iaculis. Sed lectus vestibulum mattis…",
  },
  {
    img: img8,
    title: "InHow To",
    subtitle: "Maecenas Pharetra Convallis Posuere",
    text: "Convallis convallis tellus id interdum velit. Nisl tincidunt eget nullam non nisi est sit.…",
  },
  {
    img: img9,
    title: "InHow To",
    subtitle: "Fames Turpis Egestas Maecenas",
    text: "Eget aliquet nibh praesent tristique magna sit. Sed felis eget velit aliquet sagittis id…",
  },
];

const products = [
  { name: "Tellus Convallis", price: 1200, oldPrice: 1350, img: product45 },
  { name: "Hendre Quisque", price: 800, oldPrice: 950, img: product44 },
  { name: "Dolore Magna", price: 1000, img: product43 },
  { name: "Felis Vehicula", price: 740, img: product42 },
  { name: "Commodo Amcorper", price: 1250, img: product41 },
];
export default function News() {
  return (
    <div className="news">
      <div
        className="news__banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="news__overlay">
          <h1>NEWS</h1>
          <p>HOME {">"} NEWS</p>
        </div>
      </div>

      <div className="cardsItem">
        <div className="cardsLeft">
          <div className="cardsContainer">
            {data.map((card, index) => (
              <div className="card" key={index}>
                <img src={card.img} alt={`Card ${index + 1}`} />
                <div className="cardContent">
                  <h3>{card.title}</h3>
                  <h4>{card.subtitle}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="nextBtn">
            <div className="left">
              <button>1</button>
              <button>2</button>
          
            </div>
            <div className="right">
              <button>Next {">"}</button>
            </div>
          </div>
        </div>
        <div className="panelRight">
          <div className="subscribe">
            <div className="subscribeImg">
              <img
                src={require("../assets/newsletter-section-image-.webp")}
                alt="#"
              />
            </div>
            <div className="subscribeInfo">
              <h2>Subscribe now!</h2>
              <p>
                Enter your email address below and subscribe to our newsletter
              </p>
            </div>
            <div className="subscribeEmail">
              <input type="text" placeholder="Your Name" />
              <input type="Email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="catagorias">
            <h3>Categories</h3>
            <p>Accessories (2)</p>
            <p>Decoration (3)</p>
            <p>How To (3)</p>
            <p>Process (2)</p>
          </div>

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
      </div>
    </div>
  );
}
