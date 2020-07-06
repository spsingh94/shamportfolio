import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import logo from "../../images/portfoliologo.png";

function Footer() {
  return (
    <div className="card">
      <Container>
        <Row>
          <Col size="md-2">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo-footer" alt="logo" />
            </Link>
            <h6 className="catch-phrase">I Create.</h6>
          </Col>

          <Col size="md-2">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-google"></a>
          </Col>

          <Col size="md-8">
            <Row>
              <Col size="md-3">
                <Link className="navbar-brand" to="/">
                  <p className="foot-navcon">Home</p>
                </Link>
              </Col>
              <Col size="md-3">
                <Link className="navbar-brand" to="/about">
                  <p className="foot-navcon">About</p>
                </Link>
              </Col>
              <Col size="md-3">
                <Link className="navbar-brand" to="/about">
                  <p className="foot-navcon">About</p>
                </Link>
              </Col>
              <Col size="md-3">
                <Link className="navbar-brand" to="/portfolio">
                  <p className="foot-navcon">Portfolio</p>
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

// <Link
// to="/"
// className={
//   window.location.pathname === "/"
//     ? "nav-link active"
//     : "nav-link"
// }
// >
