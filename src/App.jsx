import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


class App extends React.Component{
  render(){
    return ( <div>
    {/* <Nav/> */}
    {/* <About/> */}
    {/* <Rooms/> */}
    {/* <Amenities/> */}
    <Gallery/>
    <Contact/>
    </div>
  )
  }
  
}
export default App;