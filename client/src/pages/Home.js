import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Background from "../images/unsplash_hike.jpg";
import Navbar from "../components/Navbar";
import Thumbnail from "../images/pumpkin.jpg";
import { Title } from "../components/Title";
import Row from "../components/Row";

// import Block from "../components/Block";

function Home() {
  return (
    <div>
      <Hero backgroundImage={Background}>
        <Navbar />
        <h1 className="hero-intro">My Name is Shaminder Singh</h1>
        <p className="hero-desc">
          Front-End Web Developer • Creator • Problem Solver
        </p>
        {/* Arrow Key */}
        <Container>
                  <Row>
                 <svg
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          class="bi bi-arrow-down-circle-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{position:"absolute", right:"10", bottom:"95px", color:"peachpuff", opacity:"75%"}}
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
          />
        </svg>
        {/* Arrow Key */} 
        </Row>
        </Container>


      </Hero>
      <Container>
        <Title style={{ paddingTop: "50px" }}>Get To Know Me</Title>
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
          Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus imperdiet, nulla et dictum interdum... Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
          nulla et dictum interdum...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum...Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
          interdum... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum... Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum...Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
          nulla et dictum interdum...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum...
        </p>
      </Container>
    </div>
  );
}

export default Home;
