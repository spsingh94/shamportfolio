import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/smallimages/newlogo8.png";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: props.bgColor}}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" id="sandwhich-pages">
          <li className="nav-item active">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              <p className="locName">Projects</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              <p className="locName">About</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              <p className="locName">Contact</p>
            </Link>
          </li>
          <li className="social-media">
            <a href="https://www.facebook.com/shamindersingh512/" className="fa fa-facebook">{null}</a>
            <a href="https://www.linkedin.com/in/ssingh512/" className="fa fa-linkedin">{null}</a>
            <a href="https://www.instagram.com/sherm512/" className="fa fa-instagram">{null}</a>
          </li>
        </ul>
      </div>
      <Link className="navbar-brand" to="/">
        <img src={logo} className="logo-nav rotate" alt="logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
