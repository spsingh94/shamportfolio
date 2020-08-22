import React from "react";
import Container from "../components/Container";
import Card from "../components/Card/Card";
import { CardCont } from "../components/Card/CardCont";
import { CardBod } from "../components/Card/CardBod";
import Navbar from "../components/Navbar";
import SocialFit from "../images/app_thumbs/soc-fit.jpg";
import WorkBooks from "../images/app_thumbs/workbooks-1.jpg";
import MCLAReact from "../images/app_thumbs/Screen Shot 2020-08-07 at 1.18.41 AM.png";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import { Arrow } from "../components/Arrow";
import BlueClouds from "../images/blueclouds2.jpg";
import PhotoBanner from "../images/photonavimage.png";
import Row from "../components/Row";
import Col from "../components/Col";
import { Center } from "../components/Center";
import Button from "../components/Button";

function Work() {
  return (
    // Upper portion of page
    <>
    <Hero backgroundImage={BlueClouds}>
      <div>
        <Navbar />
        <Title id="page-title">Web Applications</Title>
      </div>
    </Hero>
      {/* Upper portion of page */}
      <Container>
        <div>
          <Title id="sub-title" style={{ textAlign: "center" }}>
            Web Applications
          </Title>
        </div>
        <br />
        <div style={{display:"flex", flexWrap:"wrap"}}>
          <CardCont>
            <Row>
              <Col size="lg-4">
                  <Card src={WorkBooks} alt="workbooks">
                    <CardBod>
                      <p className="project-name">Work Books</p>
                      <p className="project-descript">Maintain employee records and financial data all on one application.</p>
                      <p className="project-role">Front &amp; Back-End</p>
                    </CardBod>
                    <Center>
                    <Button to="/workbooks" style={{color:"white"}}>View</Button>
                    </Center>
                  </Card>
              </Col>
              <Col size="lg-4">
                  <Card src={SocialFit} alt="socialfit">
                    <CardBod>
                    <p className="project-name">Social Fit</p>
                      <p className="project-descript">Maintain employee records and financial data all on one application.</p>
                      <p className="project-role">Front-End | UX/UI Design</p>
                    </CardBod>
                    <Center>
                    <Button to="/socfit" style={{color:"white"}}>View</Button>
                    </Center>
                  </Card>
              </Col>
              <Col size="lg-4">
                  <Card src={MCLAReact} alt="mcla">
                    <CardBod>
                    <p className="project-name">Morse Code Learning Academy</p>
                      <p className="project-descript">Maintain employee records and financial data all on one application.</p>
                      <p className="project-role">UX Design | Usability Testing</p>
                    </CardBod>
                    <Center>
                    <Button to="/mcla" style={{color:"white"}}>View</Button>
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
        <Title id="sub-title" style={{ textAlign: "center" }}>
          Also Checkout Photography
        </Title>
        <Center>
          <Row>
        <a href="/photography">
        <img src={PhotoBanner} className="photo-banner" alt="banner" />
        </a>
          </Row>
        </Center>
        <br />
        </>
  );
}

export default Work;
