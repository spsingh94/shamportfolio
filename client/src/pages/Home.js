import React from "react";
import Hero from "../components/Hero";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { Center } from "../components/Center";
import { mwdProjectSections as MWD, bizProjectSections as Biz, bpProjectSections as BackPack } from "../components/projectSections";
import HeroBack from "../images/blacksand.jpg";

function Home() {
  return (
    // Upper portion of page
    <div>
      <Hero backgroundImage={HeroBack}>
        <div className="homepage-text-container">
          <span id="h1-tag-display-top"></span>
          <h1 className="hero-intro">My Name is Shaminder Singh</h1>
          <div className="h1-tag-display-container">
            <span id="h1-tag-display-bottom"></span>
          </div>
          <p className="hero-desc">Web Developer • Creator • Problem Solver</p>
          <div className="desc-underline"></div>
        </div>
      </Hero>
      {/* Upper portion of page */}
      <div>
        <Title id="about-title" style={{ textAlign: "center" }}>
          Projects
        </Title>
        <MWD />
        <Biz/>
        <BackPack/>
      </div>
      <br />
      <Title id="about-title" style={{ textAlign: "center", borderTop: "2px black solid" }}>
        Learn More
      </Title>
      <Center>
        <Button to="/about">About</Button>
      </Center>
      <br />
    </div>
  );
}

export default Home;
