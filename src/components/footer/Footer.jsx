import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media{" "}
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-twitter"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-link-item">
          <h3 className="footer-item-title">UseFull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authers</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
          </ul>
        </div>
        <div className="footer-link-item">
          <h3 className="footer-item-title">Contact information</h3>
          <div className="footer-address">
            <i className="bi bi-geo-alt-fill"></i>
            Cario - Egypt
          </div>
          <div className="footer-address">
            <i className="bi bi-telephone-fill"></i>
            (+20) 123-456-789
          </div>
          <div className="footer-address">
            <i className="bi bi-envelope-fill"></i>
            info@gmail.com
          </div>
        </div>
        <div className="footer-link-item">
          <h3 className="footer-item-title">About Us</h3>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit . Ea aperiam
            dignissimos similique autem. Ipsum, incidunt? Saepe voluptatibus
            veritatis non, placeat beatae laudantium mollitia laborum quaerat
            corrupti. Porro vitae provident magnam.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
