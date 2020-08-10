import React from "react";
import Container from '../components/Container';
import Card from'../components/Card/Card';
import {CardCont} from'../components/Card/CardCont';
import { CardBod } from "../components/Card/CardBod";
import Navbar from "../components/Navbar";
import SocialFit from '../images/app_thumbs/soc-fit.jpg';
import WorkBooks from '../images/app_thumbs/workbooks-1.jpg';
import MCLAReact from '../images/app_thumbs/Screen Shot 2020-08-07 at 1.18.41 AM.png';
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import {Arrow} from "../components/Arrow";
import BlueClouds from "../images/blueclouds2.jpg";

function Portfolio() {
  return (
  <Hero backgroundImage={BlueClouds}>
        <div>
      <Navbar/>
      <br/>
      <br/>
      <Title id="page-title">Portfolio</Title>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Arrow/>
    <br/>
    <br/>
    <br/>
    <Container>
      <div>
    <Title id="sub-title">Web Applications</Title>
      </div>
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
      <br/>
      <br/>
      <br/>
      <br/>
      {/* photography */}
      <Title id="sub-title">Photography</Title>
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
      <br/>
      <br/>
      <br/>
    </Container>
  </Hero>
  );
}

export default Portfolio;
