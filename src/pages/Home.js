import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Container from "../components/Container";
import Background from "../images/unsplash_hike.jpg";
import Block from "../components/Block";

function Home() {
  return (
    <div>
      <Hero backgroundImage={Background}>
        <h1>My Name is Shaminder Singh</h1>
        <p>
          A Front End Web Developer certified in Full Stack Web Development from
          Columbia University.
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
