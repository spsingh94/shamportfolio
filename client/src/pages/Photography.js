import React, { useRef } from "react";
import { Title } from "../components/Title";
import { Grid } from "../components/Grid";
import Hero from "../components/Hero";
import { Center } from "../components/Center";
import HeroBack from "../images/blacksand.jpg";
import { useNavbarJS } from "./js/ScrollNavbarBg";
import Navbar from "../components/Navbar";

function Photography() {
  const photographySection = useRef(null);
  const navbarBg = useNavbarJS(photographySection);

  return (
    <div>
      <Navbar bgColor={navbarBg} />
      <Hero backgroundImage={HeroBack}>
        <Center>
          <Title id="page-title">Photography</Title>
        </Center>
      </Hero>
      <section className="photography-section" ref={photographySection} >
        <Grid />
      </section>
    </div>
  );
}

export default Photography;
