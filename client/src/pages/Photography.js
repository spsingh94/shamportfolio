import React from "react";
import Navbar from "../components/Navbar";
import { CardCont } from "../components/Card/CardCont";
import Card from "../components/Card/Card";
import Wood from "../images/wood.jpg";
import Summa from "../images/summa.png";
import RedClouds from "../images/red_clouds.jpg";
import Sunset from "../images/orangesunset.jpg";
import { Title } from "../components/Title";
import Container from "../components/Container";

function Photography() {
  return (
    <div>
      <Navbar />
      <Title>Photo Table 1</Title>
        <div>
      <Container>
          <CardCont>
            <Card src={Sunset}></Card>
            <Card src={RedClouds}></Card>
            <Card src={Summa}></Card>
            <Card src={Wood}></Card>
          </CardCont>
        </Container>
      </div>
    </div>
  );
}

export default Photography;
