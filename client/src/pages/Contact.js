import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
// import Wood from "../images/wood.jpg";
import OrangeSunset from "../images/orangesunset.jpg";

function Contact() {
  return (
    <>
      <Hero backgroundImage={OrangeSunset} height="662px">
        <Navbar />
        <Title>Contact</Title>
      <div style={{backgroundColor:"#f49482"}}>
        <h1>Whattap</h1>
      </div>
      </Hero>
    </>
  );
}

export default Contact;
