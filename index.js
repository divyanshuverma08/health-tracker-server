const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const registerRoute = require("./routes/registerRoute");
const doctorRoute = require("./routes/doctorRoute");
const adminRoutes = require("./routes/adminRoutes");
const logoutRoute = require("./routes/logoutRoute");

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbURI = process.env.DATABASE;
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to db and listening at port 5000");
  })
  .catch((err) => {
    app.listen(port);
    app.get("/", (req, res) => {
      res.send(
        "Something Went Wrong! Please Try again after some time, if problem persists please contact us."
      );
    });
  });

  app.get("/", (req, res) => res.send("server listening at 5000 port!"));
app.use(authRoutes);
app.use(registerRoute);
app.use(doctorRoute);
app.use(patientRoutes);
app.use(adminRoutes);
app.use(logoutRoute);