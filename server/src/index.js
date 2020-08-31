const express = require("express");
const app = express();
const port = 4000;

const data = require("./mock");
var cors = require("cors");
app.use(cors());

app.get("/list", (req, res) => {
  res.json({ data });
});

app.listen(port, () => {
  console.log(`PizzaApp listening at http://localhost:${port}`);
});
