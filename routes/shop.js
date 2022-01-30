const express = require("express");

const router = express.Router();

// The use method does a prefix match on the path.
// But the get, post etc. methods do a full match.
router.get("/", (req, res, next) => {
  res.send(`
  <nav><a href="/">Home</a> | <a href="/add-product">Add product</a></nav>
  <h1>Hello from Express</h1>`);
});

module.exports = router;
