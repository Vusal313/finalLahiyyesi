// Footer.jsx import React from "react"; import "../styles/Footer.scss";

import React from "react";
import "../components/Foother.scss";


const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      <div className="newsletter">
        {" "}
        <h3>Important updates waiting for you!</h3>{" "}
        <p>Subscribe and grab 20% OFF!</p>{" "}
        <div className="newsletter-input">
          {" "}
          <input type="email" placeholder="Your email *" />{" "}
          <button>Subscribe</button>{" "}
        </div>{" "}
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Get in touch with us</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            <strong>Address:</strong> Street Name, NY 38954
          </p>
          <p>
            <strong>Phone:</strong> (321) 578 393 4937
          </p>
          <p>
            <strong>Opening hours:</strong> 9AM - 5PM / 10AM - 3PM
          </p>
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
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>Copyright &copy; 2025 - CreativeThemes</p>
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
