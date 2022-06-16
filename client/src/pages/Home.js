import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { useNavbarJS } from "./js/ScrollNavbarBg";
import { useImageAnimationJS } from "./js/ScrollProjectImageAnimation";
import Hero from "../components/Hero";
import { Title } from "../components/Title";
import { mwdProjectSections as MWD, bizProjectSections as Biz, bpProjectSections as BackPack } from "../components/projectSections";
import HeroBack from "../images/blacksand.jpg";

function Home() {
  // Activates black background behind Navbar when needed.
  const projectsSection = useRef(null);
  const navbarBg = useNavbarJS(projectsSection);
  
  // Grab every project showcased element
  const projectShowcaseMWD = useRef(null);
  const projectShowcaseBiz = useRef(null);
  const projectShowcaseBP  = useRef(null);

  // Get class for project show case sections to animate accordingly
  const projectAnimationMWD = useImageAnimationJS(projectShowcaseMWD);
  const projectAnimationBiz = useImageAnimationJS(projectShowcaseBiz);
  const projectAnimationBP  = useImageAnimationJS(projectShowcaseBP);

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
        <div ref={projectShowcaseMWD} >
          <MWD className={projectAnimationMWD} />
        </div>
        <div ref={projectShowcaseBiz} >
          <Biz className={projectAnimationBiz} />
        </div>
        <div ref={projectShowcaseBP} >
          <BackPack className={projectAnimationBP} />
        </div>
      </section>
    </div>
  );
}

export default Home;
