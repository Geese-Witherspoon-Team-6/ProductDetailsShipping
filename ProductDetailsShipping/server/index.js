const express = require('express');
const bodyParser = require('body-parser');

const Product = require('../db/Products.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/birdmagnet', function(req, res) {
  Product.find({}, function(err, data) {
    if(err) throw err;
    res.json(data);
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

