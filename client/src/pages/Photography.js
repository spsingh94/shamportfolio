import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import { Grid } from "../components/Grid";
import Hero from "../components/Hero";
import PhotoHero from "../images/rrphotography.jpg";
import { Center } from "../components/Center";

function Photography() {
  return (
    <div>
      <Hero backgroundImage={PhotoHero}>
      <Navbar />
        <Center>
        <Title id="page-title">Photography</Title>
        </Center>
        <Center>
        <p className="hero-desc">
          Photos | Photoshop Creations | Edits
        </p>
        </Center>
      </Hero>
        <Grid/>
    </div>
  );
}

export default Photography;
