const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { routes: adminRoutes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// Built-in middleware that allows access to static files in the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
// Parses the url-encoded data in the request body
app.use(bodyParser.urlencoded({ extended: false }));

// The router object can be plugged in as a middleware.
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Catch-all handler at the end to send back 404 errors
app.use((req, res) => {
  // res
  //   .status(404)
  //   .sendFile(path.join(__dirname, "views", "page-not-found.html"));
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Page Not Found", path: undefined });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
