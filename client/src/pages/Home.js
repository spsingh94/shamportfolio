import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { Center } from "../components/Center";
import Row from "../components/Row";
import Col from "../components/Col";
import BizDash from "../images/bizdash.png";
import HeroBack from "../images/colormain.jpg";
import MCLAReact from "../images/smallimages/spiderman.png";
import Backpack from "../images/backpacklogo.png";
import Container from "../components/Container";
import Card from "../components/Card/Card";
import { CardCont } from "../components/Card/CardCont";
import { CardBod } from "../components/Card/CardBod";

function Home() {
  return (
    // Upper portion of page
    <div>
      <Hero height="660px" backgroundImage={HeroBack}>
        <Navbar />
        <h1 className="hero-intro">My Name is Shaminder Singh</h1>
        <p className="hero-desc">
          Front-End Web Developer • Creator • Problem Solver
        </p>
        {/* <Center>
          <img src={logo} alt="center-logo" id="logo-id"/>
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
                <Card src={BizDash} alt="workbooks">
                  <CardBod>
                    <p className="project-name">Biz-Dashboard</p>
                    <p className="project-descript">
                      Biz-Dashboard is the businessman and entreprenuers
                      application. View top business related news, check the
                      weather, and catch up on stock prices, crypto currency
                      prices, and check currency conversion rates.
                    </p>
                    <p className="project-role">Front &amp; Back-End</p>
                  </CardBod>
                  {/* <Center>
                    <Button to="/biz" style={{ color: "white" }}>
                      Read More
                    </Button>
                  </Center> */}
                  <Center>
                    <Button
                      onClick={() => {
                        window.open("https://biz-dashboard.herokuapp.com/");
                      }}
                    >
                      View App
                    </Button>
                  </Center>
                </Card>
              </Col>
              <Col size="lg-4">
                <Card src={Backpack} alt="backpack">
                  <CardBod>
                    <p className="project-name">Backpack Travel</p>
                    <p className="project-descript">
                      Want to travel but unsure where to go? This application is
                      designed to help the user discover their next backpack
                      trip with a few clicks.
                    </p>
                    <br />
                    <p className="project-role">Front-End | UX/UI Design</p>
                  </CardBod>
                  {/* <Center>
                    <Button to="/backpack" style={{ color: "white" }}>
                      View
                    </Button>
                  </Center> */}
                  <Center>
                    <Button
                      onClick={() => {
                        window.open(
                          "https://backpack-travelplan.herokuapp.com/"
                        );
                      }}
                    >
                      View App
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
                    <br />
                    <p className="project-role">
                      UX Design | Usability Testing
                    </p>
                  </CardBod>
                  {/* <Center>
                    <Button to="/mcla" style={{ color: "white" }}>
                      View
                    </Button>
                  </Center> */}
                  <Center>
                    <Button
                      onClick={() => {
                        window.open("https://mclareact.herokuapp.com/");
                      }}
                    >
                      View App
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
        Learn More
      </Title>
      <Center>
        <Button to="/about">About</Button>
      </Center>
      <br />
    </div>
  );
}

export default Home;
