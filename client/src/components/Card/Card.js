import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt={props.alt}/>
      {props.children}
    </div>
  );
}

export default Card;