import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import Ocean from "../images/blueocean.jpg";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import { Maps } from "../components/Maps";
import ContactForm from "../components/ContactForm";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

function Contact() {

  const app = express();
  var router = express.Router();
  
  
  let USER = process.env.REACT_APP_GMAILU;
  let PASS = process.env.REACT_APP_GMAILP;
  
  console.log(USER);
  
  const transport = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: USER,
      pass: PASS,
    },
  };
  
  const transporter = nodemailer.createTransport(transport);
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });
  
  router.post("/send", (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;
  
    var mail = {
      from: name,
      to: USER,
      subject: "New Message from Contact Form",
      text: content,
    };
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
  });
  
  app.use(cors());
  app.use(express.json());
  app.use("/", router);
  app.listen(3002);



  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

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
      <ContactForm />
      </Center>
      <Title id="my-location">Find Shaminder Singh Here -</Title>
      <Center>
        <Maps src={mapsSource} />
      </Center>
    </>
  );
}

export default Contact;
