import React from "react";
import Map from '../contactUs/Map';
import ContactForm from "../components/ContactForm";

function Header(props) {
  return (
    <div className="w-100">
      <div style={imgStyle} className="img-fluid">
        <h1 style={h1Style}>
          Contact Us 
        </h1>
        <h3 style={h3Style}>we ensure that your enquiry is addressed within 24 hours</h3>
      </div>
      <div className="col-6 mt-5 px-5">
      <ContactForm />
      </div>
      {/* <Map /> */}
    </div>
  );
}

const imgStyle = {
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2)), URL("https://www.equinoxlab.com/wp-content/uploads/contact-Us-1.jpg")',
  width: "100%",
  height: "auto",
  padding: "1rem 1rem 1rem 1rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  transition: "opacity 0.2s ease 0s",
};

const h1Style = {
  maxWidth: "550px",
  fontSize: "32px",
  lineHeight: "45px",
  margin: "5rem auto",
  textAlign: "center",
  color: "white",
};



const h3Style = {
    maxWidth: "auto",
    fontSize: "24px",
    lineHeight: "25px",
    margin: "5rem auto",
    textAlign: "center",
    color: "white",
  };
export default Header;