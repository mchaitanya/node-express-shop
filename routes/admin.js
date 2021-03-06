const path = require("path");

const express = require("express");

const router = express.Router();

const products = [];

// GET /admin/add-product
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(require.main.path, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// POST /admin/add-product
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
