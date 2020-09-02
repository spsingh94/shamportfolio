const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
var router = express.Router();
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
const PORT = process.env.NODE_ENV || 8080;

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
