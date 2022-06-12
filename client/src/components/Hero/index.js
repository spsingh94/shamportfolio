import React, {useState, useEffect} from 'react';
import "./style.css";

const useMove = () => {
  const [state, setState]     = useState({x: 0, y: 0});
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    const timer = setTimeout(() => setDisplay("none"), 500);
    return () => clearTimeout(timer);
  })  

  const handleMouseMove = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
    setDisplay("initial");
  }
  return {
    x: state.x,
    y: state.y,
    cursor: display,
    handleMouseMove,
  }
}

function Hero(props) {
  const {x, y, cursor, handleMouseMove} = useMove();
    return (
      <div className="hero parallax" onMouseMove={handleMouseMove} style={{ backgroundImage: `url(${props.backgroundImage})`, height:props.height, backgroundSize:props.backgroundSize}} {...props}>
        <div className="hero-content-container">
          {props.children}
        </div>
        <div className="animated-cursor" style={{display: cursor, left:`${x}px`, top:`${y}px`}}></div>
      </div>
    );
  }
  
  export default Hero;