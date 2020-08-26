import React from "react";
import "./style.css";
import MCLA from "../../images/work_images/MCLA.png";
import Soc from "../../images/work_images/soc-fit.jpg";
import SocHome from "../../images/work_images/Soc-home.png";

export function Slider() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={MCLA} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Soc} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={SocHome} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://drive.google.com/uc?export=view&id=1V0xnZZtIdeHbZU63tLoE0uTvfDN9M7ZX" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
