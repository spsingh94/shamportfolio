import React from "react";
import Container from "../components/Container";
import Block from "../components/Block";
import Thumbnail from "../images/pumpkin.jpg";
import Clouds from "../images/red_clouds.jpg";
import Row from "../components/Row";
import Col from "../components/Col";

// style={{float:"right"}}

function About() {
  return (
    <div>
      <Block height="110px" backgroundColor="white">
        <div className="connect-header">
          <h1>About</h1>
        </div>
      </Block>
      <Container>
        <Row>
          <Col size="sm-12" style={{ overflow: "auto" }} backgroundImage={Clouds}>
            <img
              src={Thumbnail}
              height="400px"
              style={{ float: "right", justifyContent: "center", paddingTop:"10px" }}
            />
            <p style={{ textAlign: "left", marginRight: "50px", fontFamily:"'Josefin Slab', serif", fontSize:"19px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum...Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
              interdum...Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
              nulla et dictum interdum... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
              interdum... Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
              nulla et dictum interdum...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus imperdiet, nulla et dictum
              interdum...Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus imperdiet, nulla et dictum interdum... Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
              nulla et dictum interdum... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
              interdum...Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus imperdiet, nulla et dictum interdum...Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
              nulla et dictum interdum...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum...
            </p>
          </Col>
        </Row>
      </Container>
      <Block height="110px" backgroundColor="white"></Block>
    </div>
  );
}

export default About;
