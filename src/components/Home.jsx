
import React, { useState } from 'react';
import Homeimg from '../assets/images/home.jpg';

const Home = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleCheckInChange = (e) => setCheckIn(e.target.value);
  const handleCheckOutChange = (e) => setCheckOut(e.target.value);
  const handleRoomTypeChange = (e) => setRoomType(e.target.value);

  return (
    <div>
      <div className="hero">
        <img src={Homeimg} alt="Hotel" className="hero-image" />
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
    </div>
  );
};

export default Home;
