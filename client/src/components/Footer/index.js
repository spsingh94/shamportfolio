import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import logo from "../../images/newlogo7.png";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="foot">
      <Row>
        <Col size="md-4">
          <Link className="navbar-brand" to="/" onClick={scrollTop}>
            <img src={logo} className="logo-footer" alt="logo" />
          </Link>
          <h6 className="catch-phrase">SHAMINDER SINGH</h6>
          <p className="catch-phrase-desc">Software Developer | Photographer</p>
        </Col>

        <Col size="md-2" style={{ paddingTop: "15px" }}>
          <a
            href="https://www.facebook.com/shamindersingh512/"
            className="fa fa-facebook"
            style={{ color: "white" }}
          >
            {null}
          </a>
          <a
            href="https://www.linkedin.com/in/ssingh512/"
            className="fa fa-linkedin"
            style={{ color: "white" }}
          >
            {null}
          </a>
          <a
            href="https://www.instagram.com/sherm512/"
            className="fa fa-instagram"
            style={{ color: "white" }}
          >
            {null}
          </a>
        </Col>

        <Col size="md-6">
          <Row>
            <Col size="md-3">
              <Link className="navbar-brand" to="/" onClick={scrollTop}>
                <p className="foot-navcon">Projects</p>
              </Link>
            </Col>
            <Col size="md-3">
              <Link className="navbar-brand" to="/photography" onClick={scrollTop}>
                <p className="foot-navcon">Photography</p>
              </Link>
            </Col>
            <Col size="md-3">
              <Link className="navbar-brand" to="/about" onClick={scrollTop}>
                <p className="foot-navcon">About</p>
              </Link>
            </Col>
            <Col size="md-3">
              <Link
                className="navbar-brand"
                to="/contact"
                onClick={scrollTop}
              >
                <p className="foot-navcon">Contact</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="card-footer text-muted">
        2022 Shaminder Singh. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
