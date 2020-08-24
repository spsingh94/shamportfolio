import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Button from "../components/Button";
import { Center } from "../components/Center";
// import { Arrow } from "../components/Arrow";

import Background from "../images/mountain2.jpg";
import PhotoBanner from "../images/photonavimage.png";
import Row from "../components/Row";
import Col from "../components/Col";

import SocialFit from "../images/app_thumbs/soc-fit.jpg";
import WorkBooks from "../images/app_thumbs/workbooks-1.jpg";
import MCLAReact from "../images/app_thumbs/Screen Shot 2020-08-07 at 1.18.41 AM.png";

import Container from "../components/Container";
import Card from "../components/Card/Card";
import { CardCont } from "../components/Card/CardCont";
import { CardBod } from "../components/Card/CardBod";

function Home() {
  return (
        // Upper portion of page
        <div>
      <Hero backgroundImage={Background}>
        <Navbar />
        <h1 className="hero-intro">My Name is Shaminder Singh</h1>
        <p className="hero-desc">
          Front-End Web Developer • Creator • Problem Solver
        </p>
      </Hero>
        {/* Upper portion of page */}
        <Container>
          <div>
            <Title id="about-title" style={{ textAlign: "center" }}>
              Web Applications
            </Title>
          </div>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <CardCont>
              <Row>
                <Col size="lg-4">
                  <Card src={WorkBooks} alt="workbooks">
                    <CardBod>
                      <p className="project-name">Work Books</p>
                      <p className="project-descript">
                        Maintain employee records and financial data. Web Books is
                        an organizational tool for employers to better assess
                        their employees and financial records all at once.
                      </p>
                      <p className="project-role">Front &amp; Back-End</p>
                    </CardBod>
                    <Center>
                      <Button to="/workbooks" style={{ color: "white" }}>
                        View
                      </Button>
                    </Center>
                  </Card>
                </Col>
                <Col size="lg-4">
                  <Card src={SocialFit} alt="socialfit">
                    <CardBod>
                      <p className="project-name">Social Fit</p>
                      <p className="project-descript">
                        Motivate and encourage yourself to reach your fitness
                        goal. Social Fit allows its users to exceed their
                        expectations with the help of social media.
                      </p>
                      <p className="project-role">Front-End | UX/UI Design</p>
                    </CardBod>
                    <Center>
                      <Button to="/socfit" style={{ color: "white" }}>
                        View
                      </Button>
                    </Center>
                  </Card>
                </Col>
                <Col size="lg-4">
                  <Card src={MCLAReact} alt="mcla">
                    <CardBod>
                      <p className="project-name">Morse Code Learning Academy</p>
                      <p className="project-descript">
                        Dedicated to teaching students with learning disabilities.
                        Morse Code Learning Academy finds a new way to help
                        children in need.
                      </p>
                      <p className="project-role">
                        UX Design | Usability Testing
                      </p>
                    </CardBod>
                    <Center>
                      <Button to="/mcla" style={{ color: "white" }}>
                        View
                      </Button>
                    </Center>
                  </Card>
                </Col>
              </Row>
            </CardCont>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
        <Title id="about-title" style={{ textAlign: "center" }}>
          Also Checkout My Photo Work
        </Title>
        <Center>
          <img src={PhotoBanner} className="photo-banner" alt="banner" />
        </Center>
        <Center>
          <Button to="/photography">View Photos</Button>
        </Center>
        <br />
      </div>
  );
}

export default Home;

    // <div>
    //   <Hero backgroundImage={Background}>
    //     <Navbar />
    //     <h1 className="hero-intro">My Name is Shaminder Singh</h1>
    //     <p className="hero-desc">
    //       Front-End Web Developer • Creator • Problem Solver
    //     </p>
    //   </Hero>
    //     <Title id="about-title">Get To Know Me</Title>
    //     <h5
    //       style={{
    //         fontFamily: "'Permanent Marker', cursive",
    //         textAlign: "center",
    //         paddingTop: "0",
    //         fontSize: "20px"
    //       }}
    //     >
    //       Shaminder Singh is a Junior Front-End Web Developer Based
    //       in the Greater New York City area.
    //     </h5>
    //     <Center style={{ borderRadius: "50%" }}>
    //       <img
    //         src={Thumbnail}
    //         height="250px"
    //         alt="thumbnail"
    //         style={{ borderRadius: "30%" }}
    //       />
    //     </Center>
    //     <br />
    //     <Center>
    //       <Button href="https://drive.google.com/file/d/1InZBAxp6Y7TBqMZRgLD-miXIdR8fwYEo/view?usp=sharing">
    //         View Resume
    //       </Button>
    //     </Center>
    //     <Center
    //       style={{ paddingTop: "10px", paddingBottom: "10px" }}
    //       id="home-center"
    //     >
    //       <div style={{ textAlign: "center" }}>
    //         <p className="about-p">
    //           Shaminder has always enjoyed creating. Even at a young age he
    //           created his own story books and board games. He also enjoyed
    //           sketching cartoons and real people. In high school, he was
    //           recognized for his ability to create interesting stories in his
    //           writing class and creating sketches of others in art class.
    //         </p>
    //         <img src={Sketching} alt="sketching" height="170" width="240" />
    //         <p className="about-p">
    //           A few years ago, Shaminder found a new found love for photography
    //           and photo editing. He began to make himself familiar with
    //           Photoshop and enjoyed working on projects from photoshoots. It was
    //           a new found opportunity to re-explore his creativity.
    //         </p>
    //         <img src={Timeline} className="timeline-1" alt="timeline1" />
    //         <p className="about-p">
    //           While in the process of furthering his knowledge of photoshop and
    //           photography, Shaminder began to create a portfolio to showcase his
    //           work. While creating a portfolio he enjoyed the aspect of
    //           designing and creating a website. This would lead Shaminder
    //           towards a new career path of web development. Shaminder's desire
    //           to create would eventually help him find what he was meant to do.
    //         </p>
    //         <img
    //           src={AvatarProgram}
    //           className="avatar-program"
    //           alt="avatar-program"
    //         />
    //         <p className="about-p">
    //           Front-end web development allows Shaminder to create and design
    //           like he always did as a child. Today, he has worked hard on
    //           projects with small and large teams and is certified as a Full
    //           Stack Web Developer from Columbia University in the Columbia
    //           Engineering Coding Boot Camp Program.
    //         </p>
    //       </div>
    //     </Center>

    //     <Center>
    //       <Slider />
    //     </Center>
    //     <br/>
    //     <Center>
    //       <Button to="/work">
    //         View Projects
    //       </Button>
    //     </Center>
    //     <Center>
    //       <Button to="/contact">
    //         Contact Me
    //       </Button>
    //     </Center>
    //     <br />
    // </div>