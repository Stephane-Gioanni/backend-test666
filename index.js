const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.json("kikoo");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(4000, () => {
  console.log("server has started");
});
