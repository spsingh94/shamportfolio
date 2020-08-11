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

function Work() {
  return (
    // Upper portion of page
    <Hero backgroundImage={BlueClouds}>
      <div>
        <Navbar />
        <br />
        <br />
        <Title id="page-title">Web Applications</Title>
      </div>
      {/* Upper portion of page */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <Arrow />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <div>
          <Title id="sub-title" style={{ textAlign: "center" }}>
            Web Applications
          </Title>
        </div>
        <br />
        <Center>
          <CardCont>
            <Row>
              <Col size="lg-4">
                <a href="https://www.wwe.com">
                  <Card src={WorkBooks} alt="workbooks">
                    <CardBod>
                      <h1>Work Books</h1>
                    </CardBod>
                  </Card>
                </a>
              </Col>
              <Col size="lg-4">
                <a href="https://www.wwe.com">
                  <Card src={SocialFit} alt="socialfit">
                    <CardBod>
                      <h1>Social Fit</h1>
                    </CardBod>
                  </Card>
                </a>
              </Col>
              <Col size="lg-4">
                <a href="https://www.wwe.com">
                  <Card src={MCLAReact} alt="mcla">
                    <CardBod>
                      <h1>MCLA React</h1>
                    </CardBod>
                  </Card>
                </a>
              </Col>
            </Row>
          </CardCont>
        </Center>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* photography */}
        <Title id="sub-title" style={{ textAlign: "center" }}>
          Also Checkout Photography
        </Title>
        <Center>
        <a href="/photography">
        <img src={PhotoBanner} class="photo-banner" alt="banner" />
        </a>
        </Center>
        <br />
      </Container>
    </Hero>
  );
}

export default Work;
