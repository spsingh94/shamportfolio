import React from "react";
import { Title } from "../components/Title";
import { Grid } from "../components/Grid";
import Hero from "../components/Hero";
import { Center } from "../components/Center";
import HeroBack from "../images/blacksand.jpg";

function Photography() {
  return (
    <div>
      <Hero backgroundImage={HeroBack}>
        <Center>
          <Title id="page-title">Photography</Title>
        </Center>
      </Hero>
      <Grid />
    </div>
  );
}

export default Photography;
