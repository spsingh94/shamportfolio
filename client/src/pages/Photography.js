import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import { Grid } from "../components/Grid";
import Hero from "../components/Hero";
import PhotoHero from "../images/photography3.jpg";
import { Center } from "../components/Center";

function Photography() {
  return (
    <div>
      <Hero backgroundImage={PhotoHero} height="660px">
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
