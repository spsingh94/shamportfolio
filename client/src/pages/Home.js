import React from "react";
import Hero from "../components/Hero";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { Center } from "../components/Center";
import Row from "../components/Row";
import Col from "../components/Col";
import BizDash from "../images/bizdash.png";
import HeroBack from "../images/blacksand.jpg";
import MWDLogo from "../images/MWD-logo.png";
import Backpack from "../images/backpacklogo.png";
import Container from "../components/Container";
import Card from "../components/Card/Card";
import { CardCont } from "../components/Card/CardCont";
import { CardBod } from "../components/Card/CardBod";

function Home() {
  return (
    // Upper portion of page
    <div>
      <Hero backgroundImage={HeroBack}>
        <div className="homepage-text-container">
          <span id="h1-tag-display-top"></span>
          <h1 className="hero-intro">My Name is Shaminder Singh</h1>
          <div className="h1-tag-display-container">
            <span id="h1-tag-display-bottom"></span>
          </div>
          <p className="hero-desc">Web Developer • Creator • Problem Solver</p>
        </div>
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
                <Card src={MWDLogo} alt="mcla">
                  <CardBod>
                    <p className="project-name">Mr. Wheel Deal</p>
                    <p className="project-descript">
                      The Mr. Wheel Deal goal is to provide customers with a personalized wheel buying experience they’d
                      find at a local shop – mixed with the selection and pricing offered by a national retailer.
                    </p>
                    <p className="project-role">
                      Front-End & Back-End
                    </p>
                  </CardBod>
                  <Center>
                    <Button
                      onClick={() => {
                        window.open("https://mrwheeldeal.com");
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
      </Container>
      <Title id="about-title" style={{ textAlign: "center", borderTop: "2px black solid" }}>
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
