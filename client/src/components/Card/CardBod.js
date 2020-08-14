import React from "react";
import "./CardBod.css";

export function CardBod(props) {
  return (
    <div className="card-body">
        {props.children}
    </div>
  );
}
