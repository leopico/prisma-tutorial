const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();

const app = express();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie middleware
app.use(cookieParser());

//for create user
const userRouter = require("./routes/userRoutes");
app.use("/api", userRouter);

//for posts
const postRouter = require("./routes/postRoutes");
app.use("/api", postRouter);

app.get("/", (req, res) => {
  res.send("Hi from youtube live!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
