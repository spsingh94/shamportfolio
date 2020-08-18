const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
var router = express.Router();
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8080;

var credentials;
console.log(credentials);
var user = credentials[0].gmail;
console.log(user);
var pass = credentials[1].gmail;
console.log(pass);

async function getCreds() {
  fetch("http://localhost:8080/api/credential")
    .then((response) => response.json())
    .then((res) => credentials = res)
    // .then((data) => console.log(data[0].gmail))
    // .then((data) => {return(user = data[0].gmail)})
    // .then((result) => console.log(result))
    .catch(function (error) {
      console.log(error);
    });
  await getCreds();
}

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

getCreds();

// routes
app.use(require("./routes/api"));
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
