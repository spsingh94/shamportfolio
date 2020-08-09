import React from "react";
import Container from '../components/Container';
import Block from '../components/Block';
import Card from'../components/Card/Card';
import {CardCont} from'../components/Card/CardCont';
import { CardBod } from "../components/Card/CardBod";
import Navbar from "../components/Navbar";
import SocialFit from '../images/app_thumbs/soc-fit.jpg';
import WorkBooks from '../images/app_thumbs/workbooks-1.jpg';
import MCLAReact from '../images/app_thumbs/Screen Shot 2020-08-07 at 1.18.41 AM.png';
import { Title } from "../components/Title";
import Clouds from "../images/red_clouds.jpg";
import Hero from "../components/Hero";

function Portfolio() {
  return (
  <Hero backgroundImage={Clouds}>
        <div>
      <Navbar/>
      <Title>Portfolio</Title>
    <Container style={{paddingBottom:"175px"}}>
      <CardCont>
      <Card src={WorkBooks} alt="workbooks">
        <CardBod>
        <h1>Work Books</h1>
        </CardBod>
      </Card>
      <Card src={SocialFit} alt="socialfit">
        <CardBod>
        <h1>Social Fit</h1>
        </CardBod>
      </Card>
      <Card src={MCLAReact} alt="mcla">
        <CardBod>
        <h1>MCLA React</h1>
        </CardBod>
      </Card>
      </CardCont>
    </Container>
    </div>
  </Hero>

  );
}

export default Portfolio;
