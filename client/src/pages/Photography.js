import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import { Grid } from "../components/Grid";
import Hero from "../components/Hero";
import PhotoHero from "../images/birdyblue.jpg";
import { Center } from "../components/Center";

function Photography() {
  return (
    <div>
      <Hero>
      <Navbar />
        <Center>
        <Title id="page-title">Photography</Title>
        </Center>
      </Hero>
        <Grid/>
    </div>
  );
}

export default Photography;
