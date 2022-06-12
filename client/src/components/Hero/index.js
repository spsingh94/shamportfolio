import React, {useState} from 'react';
import "./style.css";

const useMove = () => {
  const [state, setState] = useState({x: 0, y: 0})

  const handleMouseMove = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
  }
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  }
}

function Hero(props) {
  const {x, y, handleMouseMove} = useMove();
    return (
      <div className="hero parallax" onMouseMove={handleMouseMove} style={{ backgroundImage: `url(${props.backgroundImage})`, height:props.height, backgroundSize:props.backgroundSize}} {...props}>
        <div className="hero-content-container">
          {props.children}
        </div>
        <div className="animated-cursor" style={{left:`${x}px`, top:`${y}px`}}></div>
      </div>
    );
  }
  
  export default Hero;