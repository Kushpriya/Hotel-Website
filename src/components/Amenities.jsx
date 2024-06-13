import React from "react";
import "../assets/css/amenities.css";
import Banner from "../assets/images/amenities.jpg";
import WifiIcon from "../assets/icons/wifi.png";
import BedIcon from "../assets/icons/bed.png";
import BathIcon from "../assets/icons/bath.png";
import ServiceIcon from "../assets/icons/service.png";
import BarIcon from "../assets/icons/bar.png";
import CoffeeIcon from "../assets/icons/coffee.png";
import RefrigeratorIcon from "../assets/icons/r.jpeg";
import MicrowaveIcon from "../assets/icons/micro.png";
import SpaIcon from "../assets/icons/spa.png";

const amenities = [
  { icon: WifiIcon, name: 'Free Wi-Fi' },
  { icon: BedIcon, name: 'King Sized Beds' },
  { icon: BathIcon, name: 'Bathtub' },
  { icon: ServiceIcon, name: 'Room Service' },
  { icon: BarIcon, name: 'Minibar' },
  { icon: CoffeeIcon, name: 'Coffee Machine' },
  { icon: RefrigeratorIcon, name: 'Refrigerator' },
  { icon: MicrowaveIcon, name: 'Microwave' },
  { icon: SpaIcon, name: 'Spa & Saloon' },
];

const Amenities = () => {
  return (
    <div>
      <div className="banner">
        <img src={Banner} alt="Hotel" className="img"/>
        <div className="text">
          <h1>Amenities</h1>
        </div>
      </div>

      <div className="amenities">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity">
            <img src={amenity.icon} alt={amenity.name} className="amenity-icon" />
            <p className="amenity-name">{amenity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
