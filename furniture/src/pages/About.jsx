import React, { useState } from "react";
import "./About.scss";
import banner from "../assets/armchairs-category-hero-image.webp";
import videoCover from "../assets/home-mask-image.webp";

import { FaPlay } from "react-icons/fa";
import img1 from "../assets/team-member-1.webp";
import img2 from "../assets/team-member-2.webp";
import img3 from "../assets/team-member-3.webp";
import img4 from "../assets/team-member-4.webp";
import img5 from "../assets/team-member-5.webp";
import img6 from "../assets/team-member-6.webp";

const images = [img1, img2, img3, img4, img5, img6];
const names = [
  "Libby Lynch",
  "Elvis Morgan",
  "Aron Bowers",
  "Melany Ellis",
  "Jordyn Beck",
  "Emilie Beck",
];

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };
  return (
    <div className="aboutUs">
      <div
        className="about__banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="about__overlay">
          <h1>About Us</h1>
          <p>HOME {">"} About Us</p>
        </div>
      </div>

      <div className="parturientTxt">
        <h1>
          Adipiscing ullamcorper ultricies massa scelerisque magnis quisque eget
          parturient nam
        </h1>

        <div className="parturientinfo">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Blandit at maecenas dui
              sed amet sit enim vitae. Amet purus dictum urna sagittis
              dignissim. At fermentum nisl ullamcorper orci. Pellentesque id
              tempor lacus aliquet tempus vitae nibh habitasse consectetur.
            </p>
            <p>
              Augue quis cras blandit habitant neque. Faucibus vestibulum id
              nisi ligula ultricies et vehicula. Et adipiscing mattis egestas mi
              placerat duis congue id. Scelerisque integer pulvinar justo sed
              eget.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Blandit at maecenas dui
              sed amet sit enim vitae. Amet purus dictum urna sagittis
              dignissim. At fermentum nisl ullamcorper orci. Pellentesque id
              tempor lacus aliquet tempus vitae nibh habitasse consectetur.
            </p>
            <p>
              Augue quis cras blandit habitant neque. Faucibus vestibulum id
              nisi ligula ultricies et vehicula.
            </p>
          </div>
        </div>
      </div>

      <div className="parturientVideo">
        {!showVideo ? (
          <div className="videoPlaceholder" onClick={handlePlayClick}>
            <img src={videoCover} alt="Video Cover" />
            <div className="playButton">
              <FaPlay size={30} color="#BBBDC1" />
            </div>
          </div>
        ) : (
          <div className="videoIframe">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/moPMVB-iVRw?si=ikEJpeKWm4t0lltP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="ourteamContainer">
        <h1>Our team</h1>
        <p>
          Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget
          nullam non nisi elementum sagittis vitae et leo duis ut diam quam.
        </p>
        <div className="ourTeam">
          {images.map((img, index) => (
            <div className="teamCard" key={index}>
              <img src={img} alt={`Team member ${index + 1}`} />
              <div className="teamInfo">
                <h4>{names[index]}</h4>
                <p>Seller</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lifetime">
        <div className="lifetimeLeft">
          <h2>Furniture that will last a lifetime</h2>
          <p>Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae imperdiet vulputate a eu. Aliquet ullamcorper leo mi vel sit pretium euismod eget libero. Nullam iaculis vestibulum arcu id urna. In pellentesque volutpat quis condimentum lectus</p>
          <button>Learn More →</button>
        </div>
        <div className="lifetimeRight">
        <img src={require("../assets/about-us-cta-image.webp")} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default About;
