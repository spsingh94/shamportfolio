import React from "react";
import "./style.css";
import MCLA from "../../images/work_images/MCLA.png";
import Soc from "../../images/work_images/soc-fit.jpg";
import SocHome from "../../images/work_images/Soc-home.png";
import Invaders from "../../images/photography_grid/mathposter.jpg";
import {Title} from "../Title";

export function Slider() {
    return(
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={MCLA} className="d-block w-98" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <Title id="sub-title">Morse Code Learning Academy</Title>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Invaders} className="d-block w-98" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <Title id="sub-title">Morse Code Learning Academy</Title>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Soc} className="d-block w-98" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <Title id="sub-title">Social Fit</Title>
      </div>
    </div>
    <div class="carousel-item">
      <img src={SocHome} className="d-block w-98" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <Title id="sub-title">Social Fit</Title>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}