import React from "react";
import "../assets/css/room.css";
import Banner from "../assets/images/rooms/banner.jpeg";
import Single from "../assets/images/rooms/singleroom.jpg";
import Double from "../assets/images/rooms/doubleroom.jpg";
import Quad from "../assets/images/rooms/quadroom.jpg";
import Suite from "../assets/images/rooms/suiteroom.jpeg";
import Deluxe from "../assets/images/rooms/deluxe.jpeg";
import Semideluxe from "../assets/images/rooms/semideluxe.jpg";

const rooms = [
  { image: Single, name: 'Single Room' },
  { image: Double, name: 'Double Room' },
  { image: Quad, name: 'Quad Room' },
  { image: Suite, name: 'Suite Room' },
  { image: Deluxe, name: 'Deluxe Room' },
  { image: Semideluxe, name: 'Semi Deluxe Room' },
];

const Rooms = () => {
  return (
    <div>
      <div className="section">
        <img src={Banner} alt="Hotel" className="hero-img" />
        <div className="hero-txt">
          <h2>Rooms</h2>
        </div>
      </div>

      <div className="hotel-list">
        {rooms.map((room, index) => (
          <div key={index} className="hotel-card">
            <div className="hotel-info">
              <img src={room.image} alt={room.name} className="hero-image" />
              <h3>{room.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
