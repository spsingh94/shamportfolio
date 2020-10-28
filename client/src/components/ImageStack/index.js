import React from "react";
import "./style.css";
import Pack1 from "../../images/imagestack/backpack2.jpg";
import Pack2 from "../../images/imagestack/backpack1.jpg";
import MCLA1 from "../../images/imagestack/cla1.jpg";
import MCLA2 from "../../images/imagestack/cla2.jpg";
import Biz1 from "../../images/imagestack/biz2.jpg";
import Biz2 from "../../images/imagestack/biz1.jpg";

export function MCLAStack() {
  return (
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img
          className="stack-image"
          src={MCLA1}
          // style={{ height: "450px" }}
          alt="tictactoe"
        />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          // style={{ height: "450px", width: "300px" }}
          src={MCLA2}
          alt="gamespage"
        />
      </div>
    </div>
  );
}

export function FitStack() {
  return (
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img
          className="stack-image"
          src={Pack1}
          alt="accolades"
        />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          src={Pack2}
          alt="fithomepage"
        />
      </div>
    </div>
  );
}

export function BooksStack() {
  return (
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img
          src={Biz1}
          className="stack-image"
          alt="toolspage"
          />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          src={Biz2}
          alt="savedinfopage"
        />
      </div>
    </div>
  );
}
