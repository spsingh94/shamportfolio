import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { NavbarJS } from "./js/Scroll";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import { Maps } from "../components/Maps";
import HeroBack from "../images/blacksand.jpg";

function Contact() {
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const mapsSource =
    "https://www.google.com/maps/embed/v1/place?key=" +
    API_KEY +
    "&q=New+York,NewYork+NY";

  const scrollToMap = () => {
    window.scrollTo({ top: 505, behavior: "smooth" });
  };

  const googleMapsSection = useRef();
  const navbarBg = NavbarJS(googleMapsSection);
  
  return (
    <div>
      <Navbar bgColor={navbarBg} />
      <Hero backgroundImage={HeroBack}>
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
          <p style={{ textAlign: "center", paddingTop: "45px", color: "white", fontFamily: "Alata, sans-serif", fontSize: "15px" }}>
            For emails please provide me with some of your information and a short message and I
            will get back to you at my earliest convenience.
          </p>
        </Center>
      </Hero>
      <section className="google-maps-section" ref={googleMapsSection}>
        <Title id="my-location">Find Shaminder Singh Here -</Title>
        <Center>
          <Maps src={mapsSource} />
        </Center>
      </section>
    </div>
  );
}

export default Contact;
