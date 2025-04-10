import React from "react";
import "./CardList.scss";

const Card = ({ image, title, text, bgClass }) => {
  return (
    <div className={`card ${bgClass}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Browse Now</button>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      image: require("../../assets/offers-image-1.webp"),
      title: "Special Discount  30% OFF",
      text: "Aliquet sagittis purus faucibus egestas.",
      bgClass: "card-red",
    },
    {
      image: require("../../assets/offers-image-3.webp"),
      title: "Weekly Discount 25% OFF",
      text: "Nulla facilisi cras fermentum odio feugiat.",
      bgClass: "card-blue",
    },
    {
      image: require("../../assets/offers-image-2.webp"),
      title: "Birthday Discount 40% OFF",
      text: "Porta non pulvinar neque laoreet suspendisse.",
      bgClass: "card-green",
    },
  ];

  return (
    <div className="card-header">
      <div className="special">
        <div>
          <h2>Special offers</h2>
          <p>
            Quam elementum pulvinar etiam non quam tincidunt eget nullam non.
          </p>
        </div>
        <button>Sea All →</button>
      </div>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
