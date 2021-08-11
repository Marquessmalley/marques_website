if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
// DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
// Get Route
const apiRouter = require("./routes/api");

// Mongooose/MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Mongoose connected to DB.");
});

// Middleware
app.use(morgan("tiny"));
app.use("/api", apiRouter);

// Create server
app.listen(process.env.PORT || 3001, () => {
  console.log("Server successfully started");
});
