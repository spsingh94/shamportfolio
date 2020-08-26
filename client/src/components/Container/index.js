import React from "react";
import "./style.css"

function Container(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`} {...props}>{props.children}</div>
  );
}

export default Container;
