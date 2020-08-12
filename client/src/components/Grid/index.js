import React from "react";
import "./style.css";
import Angels from "../../images/photography_grid/angels.jpg";
import Bench from "../../images/photography_grid/bench.jpg";
import Birdy from "../../images/photography_grid/birdy.jpg";
import Boardwalk from "../../images/photography_grid/boardwalk.jpg";
import Champagne from "../../images/photography_grid/champagne.jpg";
import Champagne2 from "../../images/photography_grid/champagne2.jpg";
import Cheers from "../../images/photography_grid/cheers.jpg";
import Cheers2 from "../../images/photography_grid/cheers2.jpg";
import Christmas from "../../images/photography_grid/christmas.jpg";
import ChristmasLights from "../../images/photography_grid/christmaslights.jpg";
import Couple from "../../images/photography_grid/couple1.jpg";
import Delux from "../../images/photography_grid/deluxblack.jpg";
import Dog from "../../images/photography_grid/dog.jpg";
import Fishing from "../../images/photography_grid/fishing.jpg";
import Flowers from "../../images/photography_grid/flowers.jpg";
import Goose from "../../images/photography_grid/goose.jpg";
import Hands from "../../images/photography_grid/hands.jpg";
import Hill from "../../images/photography_grid/hill.jpg";
import Love from "../../images/photography_grid/love.jpg";
import Flare from "../../images/photography_grid/newflare2.png";
import Pink from "../../images/photography_grid/pink.jpg";
import PersonalLogo from "../../images/photography_grid/portfoliologo.png";
import Reflection from "../../images/photography_grid/reflection.jpg";
import BrightLights from "../../images/photography_grid/rr_brightlights.jpg";
import RR1 from "../../images/photography_grid/rrangle.jpg";
import RR2 from "../../images/photography_grid/rrangle2.jpg";
import RR3 from "../../images/photography_grid/rrbridge.jpg";
import RR4 from "../../images/photography_grid/rrlogo.jpg";
import RR5 from "../../images/photography_grid/rrphantom.jpg";
import RR6 from "../../images/photography_grid/rrshine.jpg";
import RR7 from "../../images/photography_grid/rrtire.jpg";
import Spray from "../../images/photography_grid/spray2.jpg";
import StandTall from "../../images/photography_grid/standtall.jpg";
import TreePose from "../../images/photography_grid/treepose.jpg";
import TreePose2 from "../../images/photography_grid/treepose2.jpg";
import Trees from "../../images/photography_grid/trees.jpg";
import WaterFall from "../../images/photography_grid/waterfall.jpg";

export function Grid(props) {

  return (
    <div class="grid-row">
      <div class="grid-column">
        <img src={Angels} alt="img1"/>
        <img src={Christmas} alt="img2"/>
        <img src={ChristmasLights} alt="img3"/>
        <img src={RR7} alt="img3"/>
        <img src={Bench} alt="img4"/>
        <img src={RR4} alt="img4"/>
        <img src={Birdy} alt="img5"/>
        <img src={Boardwalk} alt="img6"/>
        <img src={WaterFall} alt="img7"/>
        <img src={RR6} alt="img7"/>
      </div>
      <div class="grid-column">
      <img src={TreePose} alt="img1"/>
        <img src={TreePose2} alt="img2"/>
        <img src={RR5} alt="img2"/>
        <img src={Trees} alt="img3"/>
        <img src={Champagne} alt="img4"/>
        <img src={Champagne2} alt="img5"/>
        <img src={Couple} alt="img6"/>
        <img src={RR1} alt="img7"/>
        <img src={Cheers} alt="img7"/>
      </div>
      <div class="grid-column">
      <img src={Cheers2} alt="img1"/>
        <img src={Flowers} alt="img2"/>
        <img src={Delux} alt="img3"/>
        <img src={Pink} alt="img4"/>
        <img src={Goose} alt="img5"/>
        <img src={Dog} alt="img6"/>
        <img src={Spray} alt="img7"/>
        <img src={Reflection} alt="img7"/>
        <img src={RR2} alt="img7"/>
      </div>
      <div class="grid-column">
      <img src={PersonalLogo} alt="img1"/>
        <img src={StandTall} alt="img3"/>
        <img src={Fishing} alt="img2"/>
        <img src={BrightLights} alt="img2"/>
        <img src={Hands} alt="img4"/>
        <img src={Hill} alt="img5"/>
        <img src={RR3} alt="img6"/>
        <img src={Love} alt="img6"/>
        <img src={Flare} alt="img7"/>
      </div>
    </div>
  );
}
