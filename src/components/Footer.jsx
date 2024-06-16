import React from 'react';
import { Link } from 'react-router-dom';
import Call from "../assets/images/contact/call.png";
import Email from "../assets/images/contact/email.png";
import Location from "../assets/images/contact/location.png";
import FacebookIcon from "../assets/images/contact/facebook.png";
import TwitterIcon from "../assets/images/contact/twitter.png";
import InstagramIcon from "../assets/images/contact/insta.png";
import "../assets/css/contact.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Menu</h4>
          <div className="footer-menu-columns">
            <div>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/about">About Us</Link></p>
              <p><Link to="/rooms">Rooms</Link></p>
            </div>
            <div>
              <p><Link to="/amenities">Amenities</Link></p>
              <p><Link to="/gallery">Gallery</Link></p>
              <p><Link to="/contact">Contact Us</Link></p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-footer-info">
            <div className="footer-info-item">
              <img src={Call} alt="Phone" className="footer-img-icon" />
              <a href="tel:+9118002224545">+91 18002224545</a>
            </div>
            <div className="footer-info-item">
              <img src={Email} alt="Email" className="footer-img-icon" />
              <a href="mailto:info@oceanhotel.com">info@oceanhotel.com</a>
            </div>
            <div className="footer-info-item">
              <img src={Location} alt="Location" className="footer-img-icon" />
              <p>123 Fifth Avenue, New York, NY 10001, USA</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Ocean Hotel © 2024. All Rights Reserved.</p>
        <p>Website developed by Priya Kushawaha</p>
      </div>
    </footer>
  );
};

export default Footer;
