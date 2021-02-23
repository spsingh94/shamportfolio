import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import { Maps } from "../components/Maps";
import ColorRest from "../images/colorrest.jpg";

function Contact() {
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const mapsSource =
    "https://www.google.com/maps/embed/v1/place?key=" +
    API_KEY +
    "&q=New+York,NewYork+NY";

  const scrollToMap = () => {
    window.scrollTo({ top: 505, behavior: "smooth" });
  };

  return (
    <div>
      <Hero backgroundImage={ColorRest} height="660px">
      <Navbar />
      <Center>
        <Title id="about-title">Lets Connect!</Title>
      </Center>
      <Center>
        <a href="tel:+14144002564">
      <Icons>local_phone</Icons>
        </a>
      <Icons onClick={scrollToMap}>add_location</Icons>
      <a href="mailto:spsinghm05@gmail.com">
      <Icons>email</Icons>
      </a>
      </Center>
      <Center>
        <p style={{ textAlign: "center", paddingTop:"45px", color:"white" , fontFamily: "Alata, sans-serif", fontSize: "15px"}}>
          For emails please provide me with some of your information and a short message and I
          will get back to you at my earliest convenience.
        </p>
      </Center>
      </Hero>
      <Title id="my-location">Find Shaminder Singh Here -</Title>
      <Center>
        <Maps src={mapsSource} />
      </Center>
    </div>
  );
}

export default Contact;
