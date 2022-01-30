const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send(`
<form action="/product" method="POST">
  <input name="title"/><button type="submit">Add product</button>
</form>`);
});

app.post("/product", (req, res) => {
  res.redirect("/");
});

// '/' matches all paths since all paths start with a '/'.
app.use("/", (req, res, next) => {
  res.send(`
<nav><a href="/">Home</a> | <a href="/add-product">Add product</a></nav>
<h1>Hello from Express</h1>`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
