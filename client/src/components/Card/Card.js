import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div class="card">
      <img src={props.src} class="card-img-top" alt={props.alt}/>
      {props.children}
    </div>
  );
}

export default Card;
