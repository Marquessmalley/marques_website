const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

require("dotenv").config();

const app = express();
// DATA PARSING
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

// step 1 deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2: deploy
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
// Get Route
const apiRouter = require("./routes/api");

// Middleware
app.use(morgan("tiny"));
app.use("/api", apiRouter);

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

// Create server
app.listen(PORT, () => {
  console.log("Server successfully started");
});
