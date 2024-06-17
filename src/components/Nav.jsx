
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/nav.css";

function Nav() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Ocean Hotel</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/rooms" activeClassName="active">
                  ROOMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/amenities" activeClassName="active">
                  AMENITIES
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeClassName="active">
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  CONTACT US
                </NavLink>
              </li>
              <button id="book">BOOK NOW</button>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Nav;

           
//              <li><Link to="/">HOME</Link></li>
//               <li><Link to="/about">ABOUT US</Link></li>
//               <li><Link to="/rooms">ROOMS</Link></li>
//               <li><Link to="/amenities">AMENITIES</Link></li>
//               <li><Link to="/gallery">GALLERY</Link></li>
//               <li><Link to="/contact">CONTACT US</Link></li>
//               <button id="book">BOOK NOW</button> 
