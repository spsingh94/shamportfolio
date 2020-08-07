import React from "react";
import Container from '../components/Container';
import Block from '../components/Block';
import Cards from'../components/Cards';
import Clouds from '../images/red_clouds.jpg';

function Portfolio() {
  return (
    <div>
    <Block height='110px' backgroundColor='white'>
    <div className='connect-header'>
    <h1>Portfolio</h1>
    </div>
    </Block>
    <Container>
<Cards></Cards>
<Cards></Cards>
    </Container>
    <Block height="110px" backgroundColor="white">
      </Block>
    </div>
  );
}

export default Portfolio;
