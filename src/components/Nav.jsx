
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";

function Nav() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Ocean Hotel</h1>
          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/rooms">ROOMS</Link></li>
              <li><Link to="/amenities">AMENITIES</Link></li>
              <li><Link to="/gallery">GALLERY</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
              <button id="book">BOOK NOW</button>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Nav;
