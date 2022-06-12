import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { NavbarJS } from "./js/Scroll";
import Hero from "../components/Hero";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { Center } from "../components/Center";
import { mwdProjectSections as MWD, bizProjectSections as Biz, bpProjectSections as BackPack } from "../components/projectSections";
import HeroBack from "../images/blacksand.jpg";

function Home() {
  const projectsSection = useRef(null);
  const navbarBg = NavbarJS(projectsSection);
  return (
    <div>
      <Navbar bgColor={navbarBg} />
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
      <section className="project-showcase" ref={projectsSection}>
        <Title id="about-title" style={{ textAlign: "center" }}>
          Projects
        </Title>
        <MWD />
        <Biz />
        <BackPack />
      </section>
    </div>
  );
}

export default Home;
