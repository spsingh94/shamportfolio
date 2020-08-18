const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
var router = express.Router();
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
const PORT = process.env.NODE_ENV || 8080;

let credentials;
var credentialArr = [];

async function getCreds(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

getCreds("http://localhost:8080/api/credential", { answer: 42 }).then(
  (data) => {
    credentials = data;
    initSeperate();
  }
);


function initSeperate() {
  credentials.forEach((credential) => {
    credentialArr.push(credential.cred);
  });
  let user = credentialArr[0];
  let pass = credentialArr[1];

  const transport = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: user,
      pass: pass,
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
      to: user,
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
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/port_credentials",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
// getCreds();

// routes
app.use(require("./routes/api"));
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
