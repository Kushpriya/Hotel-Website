import React, { useState } from 'react';
import Slider from 'react-slick';
import "../assets/css/about.css";
import "../assets/css/room.css";
import "../assets/css/amenities.css";
import "../assets/css/gallery.css";
import "../assets/css/home.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Homeimg from '../assets/images/home/home.jpg';
import Hometwo from "../assets/images/home/home2.jpg";
import Homethree from "../assets/images/home/home3.jpg";
import Homefour from "../assets/images/home/home4.jpg";

import Aboutus from "../assets/images/abouts/home.jpg";
import Single from "../assets/images/rooms/singleroom.jpg";
import Double from "../assets/images/rooms/doubleroom.jpg";
import Quad from "../assets/images/rooms/quadroom.jpg";

import WifiIcon from "../assets/icons/wifi.png";
import BedIcon from "../assets/icons/bed.png";
import BathIcon from "../assets/icons/bath.png";
import ServiceIcon from "../assets/icons/service.png";
import BarIcon from "../assets/icons/bar.png";
import CoffeeIcon from "../assets/icons/coffee.png";

import Image1 from "../assets/images/home/image1.png";
import Image2 from "../assets/images/home/image2.png";
import Image3 from "../assets/images/home/image3.png";
import Image4 from "../assets/images/home/image4.png";
import Image5 from "../assets/images/home/image5.png";
import Image6 from "../assets/images/home/image6.png";

const rooms = [
  { image: Single, name: 'Single Room' },
  { image: Double, name: 'Double Room' },
  { image: Quad, name: 'Quad Room' }
];

const amenities = [
  { icon: WifiIcon, name: 'Free Wi-Fi' },
  { icon: BedIcon, name: 'King Sized Beds' },
  { icon: BathIcon, name: 'Bathtub' },
  { icon: ServiceIcon, name: 'Room Service' },
  { icon: BarIcon, name: 'Minibar' },
  { icon: CoffeeIcon, name: 'Coffee Machine' }
];

const images = [
  { image: Image1, alt: "img1" },
  { image: Image2, alt: "img2" },
  { image: Image3, alt: "img3" },
  { image: Image4, alt: "img4" },
  { image: Image5, alt: "img5" },
  { image: Image6, alt: "img6" }
];

const Home = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleCheckInChange = (e) => setCheckIn(e.target.value);
  const handleCheckOutChange = (e) => setCheckOut(e.target.value);
  const handleRoomTypeChange = (e) => setRoomType(e.target.value);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100
  };

  return (
    <div>
      <div className="hero">
        <Slider {...sliderSettings}>
          <div>
            <img src={Homeimg} alt="Hotel" className="hero-image" />
          </div>
          <div>
            <img src={Hometwo} alt="Hotel" className="hero-image" />
          </div>
          <div>
            <img src={Homethree} alt="Hotel" className="hero-image" />
          </div>
          <div>
            <img src={Homefour} alt="Hotel" className="hero-image" />
          </div>
        </Slider>

        <div className="hero-text">
          <h2>A Delightful Stay At Hotel</h2>
          <h1>Welcome to Ocean Hotel</h1>
          <button className="btn">BOOK NOW</button>
        </div>
      </div>

      <div className="booking-form">
        <form>
          <div className="form-group">
            <label htmlFor="checkIn">Check-In:</label>
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={handleCheckInChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOut">Check-Out:</label>
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={handleCheckOutChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomType">Room Type:</label>
            <select
              id="roomType"
              value={roomType}
              onChange={handleRoomTypeChange}
            >
              <option value="">Select a room type</option>
              <option value="single">Deluxe Room</option>
              <option value="double">Executive Room</option>
              <option value="suite">Premium Room</option>
            </select>
          </div>
          <button type="submit" className="btn">BOOK NOW</button>
        </form>
      </div>

      <div className="about">
        <img src={Aboutus} alt="Hotel" className="hero" />
        <div>
          <h1>About Us</h1>
          <h2>A Best Place To Enjoy</h2>
          <p>
            Best budget hotel located in New York, Ocean Hotels offers a clean and quiet place to begin and end your day at a value price.
          </p>
          <p>
            Each of our unique hotel rooms provides a sense of comfort and tranquility with added amenities. There are wonderful views from our Garden and Terrace.
          </p>
        </div>
      </div>

      <div>
        <h1 className='txt'>Our Rooms</h1>
        <h2 className='head-txt'>Discover Our Rooms</h2>
        <div className="hotel-lis">
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

      <div>
        <h1 className='txt'>Our Services</h1>
        <h2 className='head-txt'>What We Offer You</h2>
        <div className="amenitie">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity">
              <img src={amenity.icon} alt={amenity.name} className="amenity-icon" />
              <p className="amenity-name">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='phot'>
        <h1 className='txts'>Gallery</h1>
        <div className="galler">
          {images.map((images, index) => (
            <img key={index} src={images.image} alt={images.alt} className="home-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
