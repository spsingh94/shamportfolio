const router = require("express").Router();
const Credential = require("../models/credential.js");


router.get("/api/credential", (req, res) => {
  Credential.find({})
    .sort({ date: -1 })
    .then(dbCredential => {
      res.json(dbCredential);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
