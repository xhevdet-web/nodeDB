require("dotenv").config();
const express = require("express");
const app = express();
require("./config/db");
const cors = require("cors");

const bodyPareser = require("body-parser");

app.use(bodyPareser.json({ extended: true }));

app.use(cors());

app.use("/servertest", (res, req) => {
  req, send("Server is running");
});

app.use("/api/contact", require("./routes/contact"));
app.use("/api/shpalljet", require("./routes/shpalljet"));

const port = process.env.PORT || 5000;

app.listen(port);
console.log("Aplikacioni juaj u hap ne portin: " + port);
