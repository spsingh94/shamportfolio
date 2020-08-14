import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import Ocean from "../images/blueocean.jpg";
import { Input } from "../components/Input";
import { ContactForm } from "../components/ContactForm";
import Container from "../components/Container";
import Row from "../components/Row";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import { Maps } from "../components/Maps";
import Button from "../components/Button";
import Alternate from "../components/AlternateForm";

function Contact() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API;

  const mapsSource =
    "https://www.google.com/maps/embed/v1/place?key=" +
    API_KEY +
    "&q=New+York,NewYork+NY";

  // const scrollToMap = () => {
  //   window.scrollTo({ top: 1730, behavior: "smooth" });
  // };

  return (
    <>
      <Hero backgroundImage={Ocean} height="830px">
        <Navbar />
        <Title id="page-title">Contact</Title>
      </Hero>
      <Center>
        <Title id="sub-title">Lets Connect!</Title>
      </Center>
      <Center>
        <p style={{ textAlign: "center" }}>
          Provide me with some of your information and a short message and I
          will get back to you at my earliest convenience.
        </p>
      </Center>
      <Center>
      <Alternate />
      </Center>
      <Title id="my-location">Find Shaminder Singh Here -</Title>
      <Center>
        <Maps src={mapsSource} />
      </Center>
    </>
  );
}

export default Contact;
