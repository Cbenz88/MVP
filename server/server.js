const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const compression = require('compression');
const yelp = require('yelp-fusion');
const apiKey = '9EkUgFcZLHucn0PQZXO-g8ePzBZMr_bhtR6GDvL1FmGL_95ReRcgD2wrT0LGpPUzq656QQ4qOFquH0npwQ3TMEDkskPEAeOq-J0ZEnPXM9MY4QheHpLmWrIaRrVUXHYx';
const searchRequest = {
  term:'Bars',
  latitude: 40.7260188,
  longitude: -74.0076649,
  price: '1, 2',
  open_now: true
};
const client = yelp.client(apiKey);

app.use(compression());
app.use(express.static(path.join(__dirname, "../client/dist")));

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
})




app.listen(port, err => {
    if (err) {
      console.log("Failure connecting to server");
    } else {
      console.log(`Listening on port ${port}!`);
    }
  });


