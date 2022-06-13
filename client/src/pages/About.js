import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { useNavbarJS } from "./js/Scroll";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import { Center } from "../components/Center";
import { Button } from "../components/Button";
import { OtherButton } from "../components/Button";
import Thumbnail from "../images/IMG_0257.JPG";
import HeroBack from "../images/blacksand.jpg";
import Sketching from "../images/about_gifs/sketching.gif";
import Timeline from "../images/timeline/timeline1.png";
import AvatarProgram from "../images/timeline/av3program.png";
import Container from "../components/Container";

function About() {
  const aboutSection = useRef(null);
  const navbarBg = useNavbarJS(aboutSection);
  return (
    <div>
      <Navbar bgColor={navbarBg} />
      <Hero backgroundImage={HeroBack}>
        <div>
          <Title id="page-title">About</Title>
        </div>
      </Hero>
      <section className="about-section" ref={aboutSection}>
        <Title id="about-title">Welcome To Shaminder Singh's Portfolio</Title>
        <h5
          style={{
            fontFamily: "'Permanent Marker', cursive",
            textAlign: "center",
            paddingTop: "0",
            fontSize: "20px",
          }}
        >
          Shaminder Singh is Currently a Scrum Master & Web Developer
        </h5>
        <Center style={{ borderRadius: "50%" }}>
          <img
            src={Thumbnail}
            height="250px"
            alt="thumbnail"
            style={{ borderRadius: "30%" }}
          />
        </Center>
        <br />
        <Center id="lefty">
          <OtherButton onClick={() => {
            window.open("https://drive.google.com/file/d/1hMnllqvLKnZhBQO4vNH-XW0KsnyfaYFb/view?usp=sharing")
          }}>
            View Resume
          </OtherButton>
        </Center>
        <Center>
          <Title id="about-title" style={{ fontSize: "40px" }}>
            Shaminder Singh's Story
          </Title>
        </Center>
        <Container>
          <Center
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            id="home-center"
          >
            <div style={{ textAlign: "center" }}>
              <p className="about-p">
                Shaminder has always enjoyed creating. Even at a young age he
                created his own story books and board games. He also enjoyed
                sketching cartoons and real people. In high school, he was
                recognized for his ability to create interesting stories in his
                writing class and creating sketches of others in art class.
              </p>
              <img src={Sketching} alt="sketching" height="170" width="240" />
              <p className="about-p">
                A few years ago, Shaminder found a new found love for photography
                and photo editing. He began to make himself familiar with
                Photoshop and enjoyed working on projects from photoshoots. It was
                a new found opportunity to re-explore his creativity.
              </p>
              <img src={Timeline} className="timeline-1" alt="timeline1" />
              <p className="about-p">
                While in the process of furthering his knowledge of photoshop and
                photography, Shaminder began to create a portfolio to showcase his
                work. While creating a portfolio he enjoyed the aspect of
                designing and creating a website. This would lead Shaminder
                towards a new career path of web development. Shaminder's desire
                to create would eventually help him find what he was meant to do.
              </p>
              <img
                src={AvatarProgram}
                className="avatar-program"
                alt="avatar-program"
                style={{ height: "150px" }}
              />
              <p className="about-p">
                Web development allows Shaminder to create and design
                like he always did as a child. Today, he has worked hard on
                project's with small and large team's and is certified as a Full
                Stack Web Developer from Columbia University in the Columbia
                Engineering Coding Boot Camp Program.
              </p>
              <p className="about-p">
                Web development allows Shaminder to create and design
                like he always did as a child. Today, he has worked hard on
                project's with small and large team's and is certified as a Full
                Stack Web Developer from Columbia University in the Columbia
                Engineering Coding Boot Camp Program.
              </p>
            </div>
          </Center>
        </Container>
        <br />
        <Center>
          <Button to="/">View Projects</Button>
        </Center>
        <Center>
          <Button to="/contact">Contact Me</Button>
        </Center>
        <br />
      </section>
    </div>
  );
}

export default About;
