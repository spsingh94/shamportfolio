import React from "react";
import "./CardBod.css";

export function CardBod(props) {
  return (
    <div class="card-body">
        {props.children}
    </div>
  );
}
