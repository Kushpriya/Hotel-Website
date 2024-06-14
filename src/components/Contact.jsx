import "../assets/css/contact.css";
import Banner from "../assets/images/contact.jpg";

const Contact = () => {
  return(
<div>
      <div className="banner">
        <img src={Banner} alt="Hotel" className="img"/>
        <div className="text">
          <h1>Contact</h1>
        </div>
      </div>
      </div>     
  );
};

export default Contact;