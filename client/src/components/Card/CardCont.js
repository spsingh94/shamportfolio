import React from "react";
import "./CardCont.css";

export function CardCont(props) {
  return <div className="card-group card-cont">{props.children}</div>;
}
