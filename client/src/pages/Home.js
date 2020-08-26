import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Button from "../components/Button";
import { Center } from "../components/Center";
import logo from "../images/newlogo7.png";
// import { Arrow } from "../components/Arrow";

import Background from "../images/darkblueclouds.jpg";
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
        {/* <Center>
          <img src={logo} alt="center-logo" style={{height:"190px"}}/>
        </Center> */}
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
                      Maintain important financial data in regards to stocks,
                      cryptocurrency, or currency conversion rates. Web Books is
                      an organizational tool for entrepreneurs and business
                      owners to better assess their investments and prospects.
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
                    <br/>
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
                    <br/>
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
        Learn More About Me
      </Title>
      <Center>
        <Button to="/about">About Me</Button>
      </Center>
      <br />
    </div>
  );
}

export default Home;
