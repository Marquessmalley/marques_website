const mongoose = require("mongoose");
// SCHEMA
const Schema = mongoose.Schema;
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

//   MODEL
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
