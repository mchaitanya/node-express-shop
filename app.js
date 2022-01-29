const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h1>The 'Add Product' Page</h1>");
});

// '/' matches all paths since all paths start with a '/'.
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
