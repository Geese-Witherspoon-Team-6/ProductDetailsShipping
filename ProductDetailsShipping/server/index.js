const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Product = require('../db/Products.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.options('*', cors());
app.use(express.static(__dirname + '/../dist'));

app.get('/listing', function(req, res) {
  Product.find({}, function(err, data) {
    if(err) throw err;
    res.json(data);
  })
});

console.log(__dirname + '/../..');

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

