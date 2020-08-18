const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const credentialSchema = new Schema({
  gmail: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
    },
});

const Credential = mongoose.model("Credential", credentialSchema);

module.exports = Credential;
