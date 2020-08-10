import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Background from "../images/unsplash_hike.jpg";
import Navbar from "../components/Navbar";
import Thumbnail from "../images/pumpkin.jpg";
import { Title } from "../components/Title";
import Row from "../components/Row";
import Button from "../components/Button";
import { Center } from "../components/Center";
import Sketching from "../images/about_gifs/sketching.gif";

function Home() {
  return (
    <div>
      <Hero backgroundImage={Background} height="700px">
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
              style={{
                position: "absolute",
                right: "10",
                bottom: "95px",
                color: "peachpuff",
                opacity: "75%",
              }}
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
        <Title>
          Get To Know Me
        </Title>
        <h5
          style={{
            fontFamily: "'Permanent Marker', cursive",
            textAlign: "center",
            paddingTop: "0",
          }}
        >
          Shaminder Singh is a <bold>Junior Front-End Web Developer</bold> Based
          in the Greater New York City area.
        </h5>
        <Center style={{ borderRadius: "50%" }}>
          <img
            src={Thumbnail}
            height="250px"
            alt="thumbnail"
            style={{ borderRadius: "30%" }}
          />
        </Center>
        <Center style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Button href="https://drive.google.com/file/d/1InZBAxp6Y7TBqMZRgLD-miXIdR8fwYEo/view?usp=sharing">
            View Resume
          </Button>
        </Center>
        <div style={{ textAlign: "center" }}>
          <p>
            Shaminder has always enjoyed creating. Even at a young age he
            created his own story books and board games. He also enjoyed
            sketching cartoons and actual people. In high school he was
            recognized for his ability to create interesting stories in his
            writing class and creating sketches of others in art class.
          </p>
          <img src={Sketching} alt="sketching" height="213" width="340" />
          <p>
            A few years ago Shaminder found a new found love for photography and
            photo editing. He began to make himself familiar with Photoshop and
            enjoyed working on projects from photoshoots. It was a new found
            opportunity to re-explore his creativity.
          </p>
          <p>
            While in the process of furthering his knowledge of photoshop and
            photography, Shaminder began to create a portfolio to showcase his
            work. While creating a portfolio he enjoyed the aspect of designing
            and creating a website. This would lead Shaminder towards a new
            career path, web development. Shaminder's desire to create would
            eventually help him find what he was meant to do. Front-end web
            development allows Shaminder to create and design like he always did
            as a child. Today, he has worked hard on projects with small and
            large teams and is certified as a Full Stack Web Developer from
            Columbia University in the Columbia Engineering Coding Boot Camp Pr
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
