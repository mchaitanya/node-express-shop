const path = require("path");

const express = require("express");

const router = express.Router();

const { products } = require("./admin");

// The use method does a prefix match on the path.
// But the get, post etc. methods do a full match.
router.get("/", (req, res, next) => {
  // Send back the shop html page.
  // __dirname is a global variable that points to the directory that contains the file it is used in i.e. 'routes'
  // `require.main.path` returns the directory path of the entry module
  //   res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  // console.log("shop.js: " + JSON.stringify(products));
  // res.sendFile(path.join(require.main.path, "views", "shop.html"));

  // Render the shop template.
  res.render("shop", { pageTitle: "My Shop", path: "/", prods: products });
});

module.exports = router;
