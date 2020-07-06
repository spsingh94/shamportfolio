import React from "react";
import "./style.css";

function Block(props) {
  return (
    <div
      className="block"
      style={{
        height: props.height,
        opacity: props.opacity,
        backgroundColor: props.backgroundColor
      }}
    >
      {props.children}
    </div>
  );
}

export default Block;
