const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8000;

// unopinioned
// built in settings - but you still have to set it
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  // make a request to omdb
  // whats inside the input?? -
  // console.log(req.query.title);
  axios
    .get(`http://omdbapi.com/?s=${req.query.title}&apikey=2f6435d9`)
    .then(omdbResponse => {
      // console.log(omdbResponse.data);

      res.render("search", {
        Movies: omdbResponse.data.Search
      });
    });
});

app.get("/movie", (req, res) => {
  axios
    .get(`http://omdbapi.com/?i=${req.query.id}&apikey=2f6435d9`)
    .then(omdbResponse => {
      // console.log(omdbResponse.data);

      res.render("movie", {
        Movies: omdbResponse.data
      });
    });
});

app.get("/about", (req, res) => {
  res.end("about run CMD");
});

app.get("/*", (req, res) => {
  res.send("404 not found");
});
