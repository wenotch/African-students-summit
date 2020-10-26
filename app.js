const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});
app.get("/activities", function (req, res) {
    res.sendFile(__dirname + "/activities.html");
  });
  
app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
  });
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
