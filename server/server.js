const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const compression = require('compression');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const apiKey = '';
const searchRequest = {
    term: 'Bars',
    latitude: 40.7260188,
    longitude: -74.0076649,
    price: '1, 2',
    open_now: true
};
const client = yelp.client(apiKey);
const connection = require("../database/database.js");

app.use(compression());
app.use(bodyParser.json());
app.use(`/:name`, express.static(path.join(__dirname, "/../client/dist")));

app.get('/api/bars', function (req, res) {
    client.search(searchRequest)
    .then(response => {
        const results = response.jsonBody.businesses;
        results.forEach(bar => {
            connection.query(
                `INSERT IGNORE INTO bars (name) VALUES (?)`,[bar.name],
                (err) => {
                  if (err) {
                    console.log(err)
                  } 
                }
              );
        })
        res.send(results);
    })
    .catch(e => {
        console.log(e);
    })
})

app.post('/api/user', function (req, res) {
    console.log(req.body.vote);
    console.log(req.body.user);
    connection.query(
        `INSERT IGNORE INTO users (name) VALUES (?)`,[req.body.user],
        (err) => {
          if (err) {
            console.log(err)
          } 
        }
      );
    res.send('POST request to the homepage')
})


app.listen(port, err => {
    if (err) {
        console.log("Failure connecting to server");
    } else {
        console.log(`Listening on port ${port}!`);
    }
});