const express = require("express");
const router = express.Router();
const Contact = require("../model/Contact");

router.get("/", (req, res) => {
  Contact.find({})
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.post("/save", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };

  console.log(data);

  const newContact = new Contact();

  newContact.collection.insertOne(data, (err, docs) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("Form Saved");
    }
  });
});

module.exports = router;
