import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import logo from "../../images/portfoliologo.png";

function Footer() {
  return (
    <div className="foot">
      <Container>
        <Row>
          <Col size="md-2">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo-footer" alt="logo" />
            </Link>
            <h6 className="catch-phrase">I Create.</h6>
          </Col>

          <Col size="md-2">
          <a
                href="https://www.facebook.com/shamindersingh512/"
                className="fa fa-facebook footer-icons"
              >
                {null}
              </a>
              <a
                href="https://www.linkedin.com/in/ssingh512/"
                className="fa fa-linkedin footer-icons"
              >
                {null}
              </a>
              <a
                href="https://www.instagram.com/sherm512/"
                className="fa fa-instagram footer-icons"
              >
                {null}
              </a>
          </Col>

          <Col size="md-8">
            <Row>
              <Col size="md-3">
                <Link className="navbar-brand" to="/">
                  <p className="foot-navcon">Home</p>
                </Link>
              </Col>
              <Col size="md-3">
                <Link className="navbar-brand" to="/work">
                  <p className="foot-navcon">Work</p>
                </Link>
              </Col>
              <Col size="md-3">
                <Link className="navbar-brand" to="/photography">
                  <p className="foot-navcon">Photography</p>
                </Link>
              </Col>
              <Col size="md-3">
                <Link className="navbar-brand" to="/contact">
                  <p className="foot-navcon">Contact</p>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="card-footer text-muted">
        2020 Shaminder Singh. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;