import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import Ocean from "../images/blueocean.jpg";
import { Input } from "../components/Input";
import { ContactForm } from "../components/ContactForm";
import Container from "../components/Container";
import Row from "../components/Row";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import { Maps } from "../components/Maps";
import Button from "../components/Button";
import Alternate from "../components/AlternateForm";

function Contact() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API;

  const mapsSource =
    "https://www.google.com/maps/embed/v1/place?key=" +
    API_KEY +
    "&q=New+York,NewYork+NY";

  // const scrollToMap = () => {
  //   window.scrollTo({ top: 1730, behavior: "smooth" });
  // };

  return (
    <>
      <Hero backgroundImage={Ocean} height="830px">
        <Navbar />
        <Title id="page-title">Contact</Title>
      </Hero>
      {/* <ContactForm>
          <Container>
            <br />
            <Center>
              <Title id="sub-title">Lets Connect!</Title>
            </Center>
            <p style={{ textAlign: "center" }}>
              Provide me with some of your information and a short message and I
              will get back to you at my earliest convenience.
            </p>
            <Center>
              <a href="mailto:spsingh94.ss@gmail.com">
                <Icons>email</Icons>
              </a>
              <Icons onClick={scrollToMap}>add_location</Icons>
              <a href="tel:+4144002564">
                <Icons>phone</Icons>
              </a>
            </Center>
            <div>
              <Row>
                <h5>Name:</h5>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                />
              </Row>
              <Row>
                <h5>Email:</h5>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="name"
                />
              </Row>
              <Row>
                <h5>Message:</h5>
                <textarea
                  type="message"
                  placeholder="Enter Message"
                  rows="9"
                  cols="110"
                  style={{
                    marginLeft: "20px",
                    width: "85%",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                  name="message"
                />
              </Row>
            </div>
            <Center>
              <Button style={{ width: "75%", color: "white" }}>Submit</Button>
            </Center>
            <br />
          </Container>
        </ContactForm> */}
      <Center>
        <Title id="sub-title">Lets Connect!</Title>
      </Center>
      <Center>
        <p style={{ textAlign: "center" }}>
          Provide me with some of your information and a short message and I
          will get back to you at my earliest convenience.
        </p>
      </Center>
      <Center>
      <Alternate />
      </Center>
      <Title id="my-location">Find Shaminder Singh Here -</Title>
      <Center>
        <Maps src={mapsSource} />
      </Center>
    </>
  );
}

export default Contact;
