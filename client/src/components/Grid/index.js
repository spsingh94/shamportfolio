import React from "react";
import "./style.css";
import Bird from "../../images/bird.jpg";
import Dusk from "../../images/dusk.jpg";
import DarkSkies from "../../images/darkskies.jpg";
import PinkHorizon from "../../images/newdim.jpg";
import OrangeSun from "../../images/orangesunset.jpg";
import RedClouds from "../../images/red_clouds.jpg";

export function Grid(props) {

  return (
    <div class="grid-row">
      <div class="grid-column">
        <img src={Bird} alt="img1"/>
        <img src={Dusk} alt="img2"/>
        <img src={DarkSkies} alt="img3"/>
        <img src={PinkHorizon} alt="img4"/>
        <img src={Bird} alt="img5"/>
        <img src={OrangeSun} alt="img6"/>
        <img src={RedClouds} alt="img7"/>
      </div>
      <div class="grid-column">
      <img src={Bird} alt="img1"/>
        <img src={Dusk} alt="img2"/>
        <img src={DarkSkies} alt="img3"/>
        <img src={PinkHorizon} alt="img4"/>
        <img src={Bird} alt="img5"/>
        <img src={OrangeSun} alt="img6"/>
        <img src={RedClouds} alt="img7"/>
      </div>
      <div class="grid-column">
      <img src={Bird} alt="img1"/>
        <img src={Dusk} alt="img2"/>
        <img src={DarkSkies} alt="img3"/>
        <img src={PinkHorizon} alt="img4"/>
        <img src={Bird} alt="img5"/>
        <img src={OrangeSun} alt="img6"/>
        <img src={RedClouds} alt="img7"/>
      </div>
      <div class="grid-column">
      <img src={Bird} alt="img1"/>
        <img src={Dusk} alt="img2"/>
        <img src={DarkSkies} alt="img3"/>
        <img src={PinkHorizon} alt="img4"/>
        <img src={Bird} alt="img5"/>
        <img src={OrangeSun} alt="img6"/>
        <img src={RedClouds} alt="img7"/>
      </div>
    </div>
  );
}
