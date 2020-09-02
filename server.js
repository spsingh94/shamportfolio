const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
var router = express.Router();
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
const PORT = process.env.NODE_ENV || 8080;

let getCreds = async function () {
  let response = await fetch("http://localhost:8080/api/credential");
  let data = await response.json();
  return data;
};

getCreds().then((results) => mailRunner(results));

function mailRunner(creds) {
  var transport = {
    service: "Outlook365",
    host: "smtp.office365.com", // Don’t forget to replace with the SMTP host of your provider
    port: 25,
    auth: {
      user: creds[0].cred,
      pass: creds[3].cred,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  router.post("/send", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
      from: name,
      to: creds[0].cred, // Change to email address that you want to receive messages on
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

// routes
app.use(require("./routes/api"));
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
