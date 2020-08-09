import React from "react";
import Container from "../components/Container";
import Block from "../components/Block";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import Wood from "../images/wood.jpg";

function Contact() {
  return (
    <>
      <Hero backgroundImage={Wood}>
        <Navbar />
        <Title style={{ paddingBottom: "0px" }}>Contact</Title>
        <p style={{ textAlign: "center", fontStyle: "oblique" }}>
          Allow me to get a firm understanding on what you have in mind and I
          will take care of the rest.
        </p>
        <Container>
          <Block height="600px" backgroundColor="peachpuff"></Block>
        </Container>
      </Hero>
    </>
  );
}

export default Contact;
