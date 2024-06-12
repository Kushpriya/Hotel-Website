
import React from "react";
import "../assets/css/about.css";
import Us from "../assets/images/abouts/us.jpg";
import Home from "../assets/images/abouts/home.jpg";
import Foods from "../assets/images/abouts/foods.jpeg";
import Pizza from "../assets/images/abouts/pizza.jpeg";
import Interior from "../assets/images/abouts/interior.jpg";
import Game from "../assets/images/abouts/game.jpg";
import Spa from "../assets/images/abouts/spa.jpg";
import Swim from "../assets/images/abouts//swim.jpg";
function About(){
  return(
    
    <div>
       <div className="section">
        <img src={Us} alt="Hotel" className="hero-img"/>
        <div className="hero-txt">
         <h2>About Us</h2>
      </div>
       </div>

      <div className="about">
      <img src={Home} alt="Hotel" className="hero"/>
      <div>
      <h1>About Us</h1>
      <h2>A Best Place To Enjoy</h2>
      <p>Best budget hotel located in the New York, Ocean Hotels
        offers a clean and quiet place to begin and end your day
        at a value price.
      </p>
      <p>
         Each of our unique hotel rooms provides a sense of 
         comfort and tranquility with added amenities.There are
         wonderful views from our Garden and Terrace.
       </p>
      </div>
     
    </div>

    <div className="hotel-img">
        <img src={Foods} alt="Hotel" className="hero-image"/>
        <img src={Pizza} alt="Hotel" className="hero-image"/>
        <img src={Interior} alt="Hotel" className="hero-image"/>
        <img src={Game} alt="Hotel" className="hero-image"/>
        <img src={Spa} alt="Hotel" className="hero-image"/>
        <img src={Swim} alt="Hotel" className="hero-image"/>
       
    </div>
      </div>
      
  );
}
export default About;