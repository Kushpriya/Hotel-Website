import React from "react";
import "../assets/css/gallery.css";

import Banner from "../assets/images/Gallery/home.jpg";
import Image1 from "../assets/images/Gallery/img1.jpg";
import Image2 from "../assets/images/Gallery/img2.jpg";
import Image3 from "../assets/images/Gallery/img3.jpg";
import Image4 from "../assets/images/Gallery/img4.jpg";
import Image5 from "../assets/images/Gallery/img5.jpg";
import Image6 from "../assets/images/Gallery/img6.jpg";
import Image7 from "../assets/images/Gallery/img7.jpg";
import Image8 from "../assets/images/Gallery/img8.jpg";
import Image9 from "../assets/images/Gallery/img9.jpg";
import Image10 from "../assets/images/Gallery/img10.jpg";
import Image11 from "../assets/images/Gallery/img11.jpg";
import Image12 from "../assets/images/Gallery/img12.jpg";
import Image13 from "../assets/images/Gallery/img13.jpg";
import Image14 from "../assets/images/Gallery/img14.jpg";
import Image15 from "../assets/images/Gallery/img15.jpg";
import Image16 from "../assets/images/Gallery/img16.jpg";
import Image17 from "../assets/images/Gallery/img17.jpg";
import Image18 from "../assets/images/Gallery/img18.jpg";

const gallery = [
  { image: Image1 , alt: 'Image1'},
  { image: Image2 , alt: 'Image2'},
  { image: Image3 , alt: 'Image3'},
  { image: Image4 , alt: 'Image4'},
  { image: Image5 , alt: 'Image5'},
  { image: Image6 , alt: 'Image6'},
  { image: Image7 , alt: 'Image7'},
  { image: Image8 , alt: 'Image8'},
  { image: Image9 , alt: 'Image9'},
  { image: Image10 , alt: 'Image10'},
  { image: Image11 , alt: 'Image11'},
  { image: Image12 , alt: 'Image12'},
  { image: Image13 , alt: 'Image13'},
  { image: Image14 , alt: 'Image14'},
  { image: Image15 , alt: 'Image15'},
  { image: Image16 , alt: 'Image16'},
  { image: Image17 , alt: 'Image17'},
  { image: Image18 , alt: 'Image18'},
];

const Gallery = () => {
  return(
<div>
      <div className="banner">
        <img src={Banner} alt="Hotel" className="img"/>
        <div className="text">
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="gallery">
        {gallery.map((gallery,index) =>(
            <img  key = {index} src = {gallery.image} alt={gallery.alt} className="photos" />
        ))}
      </div>
 </div>     
  );
};

export default Gallery;