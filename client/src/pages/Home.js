import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Container from "../components/Container";
import Background from "../images/unsplash_hike.jpg";
import Navbar from "../components/Navbar"
// import Block from "../components/Block";

function Home() {
  return (
    <div>
      <Hero backgroundImage={Background}>
      <Navbar/>
        <h1 className="hero-intro">My Name is Shaminder Singh</h1>
        <p className="hero-desc">
        Front-End Web Developer • Creator • Problem Solver
        </p>
      </Hero>
      <Container>
        <Row>
        
        </Row>
      </Container>
    </div>
  );
}

export default Home;
