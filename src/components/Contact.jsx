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
              <p>123 Fifth Avenue, New York, NY 10001, USA</p>
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
    </div>
  );
};

export default Contact;
