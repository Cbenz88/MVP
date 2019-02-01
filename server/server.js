const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const compression = require('compression');

app.use(compression());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, err => {
    if (err) {
      console.log("Failure connecting to server");
    } else {
      console.log(`Listening on port ${port}!`);
    }
  });