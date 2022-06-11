import React from 'react';
import "./style.css";

function Hero(props) {
    return (
      <div className="hero parallax" style={{ backgroundImage: `url(${props.backgroundImage})`, height:props.height, backgroundSize:props.backgroundSize}} {...props}>
        <div className="hero-content-container">
          {props.children}
        </div>
      </div>
    );
  }
  
  export default Hero;