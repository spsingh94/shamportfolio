import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/portfoliologo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="logo-nav" alt="logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <p className="locName">Home</p>
              </Link>
          </li>
          <li class="nav-item">
          <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <p className="locName">About</p>
              </Link>
          </li>
          <li class="nav-item">
          <Link
                to="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <p className="locName">Portfolio</p>
              </Link>
          </li>
          <li class="nav-item">
          <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <p className="locName">Contact</p>
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
