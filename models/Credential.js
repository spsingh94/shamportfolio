const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const credentialSchema = new Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true }
});

const Credential = mongoose.model("Credential", credentialSchema);

module.exports = Credential;
