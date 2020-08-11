import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import Ocean from "../images/blueocean.jpg";
import { Arrow } from "../components/Arrow";
import { Input } from "../components/Input";
import { ContactCard } from "../components/ContactCard";
import Container from "../components/Container";
import Row from "../components/Row";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import Button from "../components/Button";

function Contact() {
  return (
    <>
      <Hero backgroundImage={Ocean} height="662px">
        <Navbar />
        <br />
        <br />
        <Title id="page-title">Contact</Title>
        <Arrow />
      </Hero>
      <ContactCard>
        <Container>
          <Center>
            <Icons>email</Icons>
            <Icons>add_location</Icons>
            <Icons>phone</Icons>
          </Center>
          <div>
            <Row>
              <h5>First Name:</h5>
              <Input placeholder="John"></Input>
            </Row>
            <Row>
              <h5>Last Name:</h5>
              <Input placeholder="Doe"></Input>
            </Row>
            <Row>
              <h5>Email:</h5>
              <Input placeholder="example@example.com"></Input>
            </Row>
            <Row>
              <h5>Message:</h5>
              <textarea placeholder="hello" rows="9" cols="110" style={{marginLeft:"20px", width:"85%", marginTop:"10px", marginBottom:"20px"}}/>
            </Row>
          </div>
          <Center>
          <Button style={{width:"75%"}}>Submit</Button>
          </Center>
          <br/>
        </Container>
      </ContactCard>
    </>
  );
}

export default Contact;
