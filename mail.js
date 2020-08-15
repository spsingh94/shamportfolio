var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
// var fetch = require("node-fetch");

// var credentials = [];

let USER = process.env.GMAIL_USER;
let PASS = process.env.GMAIL_PASS;

console.log(USER);

// fetch("/api/credential")
//   .then((response) => response.json())
//   .then((data) => {
//     credentials = data;
//     populateCredentials();
//   });

// function populateCredentials() {
//   credentials.forEach((credential) => {
//     USER = credential.gmail;
//     PASS = credential.password;
//   });
// }

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

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
