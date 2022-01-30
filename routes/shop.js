const path = require("path");

const express = require("express");

const router = express.Router();

// The use method does a prefix match on the path.
// But the get, post etc. methods do a full match.
router.get("/", (req, res, next) => {
  // __dirname is a global variable that points to the directory that contains the file it is used in i.e. 'routes'
  // `require.main.path` returns the directory path of the entry module
  //   res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  res.sendFile(path.join(require.main.path, "views", "shop.html"));
});

module.exports = router;
