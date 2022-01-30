const express = require("express");

const router = express.Router();

// GET /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.send(`
  <form action="/admin/add-product" method="POST">
    <input name="title"/><button type="submit">Add product</button>
  </form>`);
});

// POST /admin/add-product
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
