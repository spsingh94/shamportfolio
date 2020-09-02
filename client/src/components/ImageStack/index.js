import React from "react";
import "./style.css";
import Soc1 from "../../images/imagestack/sshome.png";
import Soc2 from "../../images/imagestack/sfacc2.png";
import MCLA1 from "../../images/imagestack/mcla1.png";
import MCLA2 from "../../images/imagestack/ttt.png";
import work1 from "../../images/imagestack/workbook.png";
import work2 from "../../images/imagestack/stocks.png";

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
          src={Soc2}
          alt="accolades"
        />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          src={Soc1}
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
          src={work2}
          className="stack-image"
          alt="toolspage"
          />
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img
          className="stack-image"
          src={work1}
          alt="savedinfopage"
        />
      </div>
    </div>
  );
}
