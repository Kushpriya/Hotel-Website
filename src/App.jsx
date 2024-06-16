
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Homeimg from "./assets/images/home.jpg"; // Add this import

const Home = () => {
  const [checkIn, setCheckIn] = React.useState("");
  const [checkOut, setCheckOut] = React.useState("");
  const [roomType, setRoomType] = React.useState("");

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
            <select id="roomType" value={roomType} onChange={handleRoomTypeChange}>
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

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
