import React from "react";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

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
