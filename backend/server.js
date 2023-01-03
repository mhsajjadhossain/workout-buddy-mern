/**
 * Title: Main Server File
 * Description: Main server file.where the app is served
 * Author: M.h Sajjad Hossain Ripon
 * Data: Wed,2022-12-14
 * Time: 17:15:30.000-05:00
 */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => res.json({ hello: "Hello World!" }));

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`App listening on port ${process.env.PORT}!`)
    );
  })
  .catch((err) => {
    console.log("error from db connect:-------", err);
  });
