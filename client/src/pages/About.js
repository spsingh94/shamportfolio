import React from "react";
import Container from "../components/Container";
import Block from "../components/Block";
import Thumbnail from "../images/pumpkin.jpg";
import Clouds from "../images/red_clouds.jpg";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Title } from "../components/Title";

function About() {
  return (
    <>
      <Hero backgroundImage={Clouds}>
        <Navbar />
        <Title>About</Title>
        <Container>
          <img
            src={Thumbnail}
            height="400px"
            style={{
              float: "right",
              justifyContent: "center",
              paddingTop: "10px",
            }}
            alt="thumbnail"
          />
          <p
            style={{
              textAlign: "left",
              marginRight: "50px",
              fontFamily: "'Josefin Slab', serif",
              fontSize: "19px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum...Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
            dictum interdum... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum...Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
            dictum interdum... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum...Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
            dictum interdum... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
          </p>
        </Container>
        <Block height="110px" backgroundColor="white"></Block>
      </Hero>
    </>
  );
}

export default About;
