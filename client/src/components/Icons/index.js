import React from "react";
import "./style.css";

export function Icons(props) {
  return (
    <i className="material-icons" {...props}>
      {props.children}
    </i>
  );
}
