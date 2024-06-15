import React from "react";
import "../assets/css/contact.css";
import Banner from "../assets/images/contact/banner.jpg";
import Call from "../assets/images/contact/call.png";
import Email from "../assets/images/contact/email.png";
import Location from "../assets/images/contact/location.png";
import FacebookIcon from "../assets/images/contact/facebook.png";
import TwitterIcon from "../assets/images/contact/twitter.png";
import InstagramIcon from "../assets/images/contact/insta.png";

const Contact = () => {
  return (
    <div>
      <div className="banner">
        <img src={Banner} alt="Hotel" className="img" />
        <div className="text">
          <h1>Contact</h1>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <div >
              <img src={Call} alt="Phone" className="img-icon" />
            </div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>+91 18002224545</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <img src={Email} alt="Email" className="img-icon" />
            </div>
            <div className="info-text">
              <h4>Email</h4>
              <p>info@oceanhotel.com</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <img src={Location} alt="Location" className="img-icon" />
            </div>
            <div className="info-text">
              <h4>Location</h4>
              <p>D-113, International Trade Center, Majura Gate, Surat, Gujarat 395002</p>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <h2>Send Message</h2>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Your phone" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <footer className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Menu</h4>
            <div className="footer-menu-columns">
              <div>
                <p>Home</p>
                <p>About Us</p>
                <p>Rooms</p>
              </div>
              <div>
                <p>Amenities</p>
                <p>Gallery</p>
                <p>Contact Us</p>
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
                <p>D-113, International Trade Center, Majura Gate, Surat, Gujarat, India</p>
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
    </div>
  );
};

export default Contact;
