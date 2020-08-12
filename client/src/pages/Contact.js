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
  var fields = {};

  document.addEventListener("DOMContentLoaded", function () {
    fields.firstName = document.getElementById("firstName");
    fields.lastName = document.getElementById("lastName");
    fields.email = document.getElementById("email");
    fields.message = document.getElementById("message");
  });

  function isNotEmpty(value) {
    if (value == null || typeof value == "undefined") return false;
    return value.length > 0;
  }

  function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value);
    if (!isFieldValid) {
      field.className = "placeholderRed";
    } else {
      field.className = "";
    }

    return isFieldValid;
  }

  function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
  }


  const scrollToMap = () => {
    window.scrollTo({top: 1600, behavior:"smooth"})
};


  return (
    <>
      <Hero backgroundImage={Ocean} height="690px">
        <Navbar />
        <br />
        <br />
        <Title id="page-title">Contact</Title>
        <Arrow />
      </Hero>
      <form onSubmit="return false">
        <ContactCard>
          <Container>
            <br/>
            <Center>
            <Title id="sub-title">Lets Connect!</Title>
            </Center>
            <p style={{textAlign:"center"}}>Provide me with some of your information and a short message and I will get back to you at my earliest convenience.</p>
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
                <h5>First Name:</h5>
                <Input
                  type="text"
                  placeholder="Enter First Name"
                  id="firstName"
                ></Input>
              </Row>
              <Row>
                <h5>Last Name:</h5>
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  id="lastName"
                ></Input>
              </Row>
              <Row>
                <h5>Email:</h5>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                ></Input>
              </Row>
              <Row>
                <h5>Message:</h5>
                <textarea
                  placeholder="Enter Message"
                  id="message"
                  rows="9"
                  cols="110"
                  style={{
                    marginLeft: "20px",
                    width: "85%",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                />
              </Row>
            </div>
            <Center>
              <Button style={{ width: "75%", color: "white" }}>Submit</Button>
              {/* <Button style={{width:"75%"}} onClick={sendContact()}>Submit</Button> */}
            </Center>
            <br />
          </Container>
        </ContactCard>
          <Title id="my-location">
            Find Shaminder Singh Here -
          </Title>
        <Center>
          <iframe
            title="google-maps"
            width="95%"
            height="650"
            frameborder="0"
            style={{ border: "0", marginBottom:"40px" }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQWp02Hlr-1mIloSuvvTIlSNxkTWBy2NU
    &q=New+York,NewYork+NY"
            allowfullscreen
          />
        </Center>
      </form>
    </>
  );
}

export default Contact;
