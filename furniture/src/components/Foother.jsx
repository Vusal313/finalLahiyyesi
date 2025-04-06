import React from "react";
import "../components/Foother.scss";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaXingSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      <div className="newsletter">
        {" "}
        <div className="newsletter_important">
          <img
            src="/img/subscribe-section-image.webp"
            alt="Subscribe illustration"
          />
          <div>
            <h3>Important updates waiting for you!</h3>
            <p>Subscribe and grab 20% OFF!</p>
          </div>
        </div>
        <div className="newsletter-input">
          {" "}
          <input type="email" placeholder="Your email *" />{" "}
          <button>Subscribe</button>{" "}
        </div>{" "}
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <div className="consectetur">
            <h3>Get in touch with us</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="address">
            <div className="icon ">
              <FaLocationArrow className="location-icon" />
              <p>
                <strong>Address:</strong> Street Name, NY 38954
              </p>
            </div>
            <div className="icon ">
              <FaPhone className="location-icon" />
              <p>
                <strong>Phone:</strong> (321) 578 393 4937
              </p>
            </div>
            <div className="icon  ">
              <FaClock className="location-icon" />
              <p>
                <strong>Opening hours:</strong> 9AM - 5PM / 10AM - 3PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="column">
            <h4>Shop Categories</h4>
            <ul>
              <li>Armchairs</li>
              <li>Beds</li>
              <li>Chairs</li>
              <li>Decor</li>
              <li>Sofas</li>
              <li>Storage</li>
              <li>Tables</li>
            </ul>
          </div>

          <div className="column">
            <h4>Useful Links</h4>
            <ul>
              <li>Careers</li>
              <li>Delivery</li>
              <li>Help Center</li>
              <li>Returns & Refunds</li>
              <li>Newsletter</li>
              <li>Status</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div className="column">
            <h4>Account</h4>
            <ul>
              <li>User Dashboard</li>
              <li>Wishlist</li>
              <li>Shipping & Delivery</li>
              <li>Affiliate Program</li>
              <li>Brand Assets</li>
              <li>Support</li>
              <li>Recommendations</li>
            </ul>
          </div>

          <div className="column">
            <h4>About Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Partners</li>
              <li>Locations</li>
              <li>Design Services</li>
              <li>How it Works</li>
              <li>Customers</li>
              <li>Other Info</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2025 - CreativeThemes</p>
        <div className="social-icons">
          <FaFacebook className="icone" />
          <FaXingSquare className="icone" />
          <FaTwitter className="icone" />
          <FaInstagram className="icone" />
          <FaLinkedin className="icone" />
          <FaEnvelope className="icone" />
        </div>

        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
