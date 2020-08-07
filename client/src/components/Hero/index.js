import React from 'react';
import "./style.css";

function Hero(props) {
    return (
      <div className="hero parallax" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
    );
  }
  
  export default Hero;