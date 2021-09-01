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

router.post("/", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    };

    const newContact = await new Contact();

    newContact.collection.insertOne(data, (err, docs) => {
      if (err) {
        return console.error(err);
      } else {
        console.log("Form Saved");
      }
    });
  } catch (err) {
    conole.error(err);
  }
});

module.exports = router;
