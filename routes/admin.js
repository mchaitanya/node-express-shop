const path = require("path");

const express = require("express");

const router = express.Router();

// GET /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

// POST /admin/add-product
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
