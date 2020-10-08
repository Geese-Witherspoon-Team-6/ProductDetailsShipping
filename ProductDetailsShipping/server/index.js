const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Schemas = require('../db/Schemas.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.options('*', cors());
app.use('/listing/:_id', express.static(__dirname + '/../dist'));

app.get('/api/product/:_id', function(req, res) {
  Schemas.Product.find({_id: req.params._id}, function(err, data) {
    if(err) throw err;
    res.json(data);
  })
});

app.get('/api/shipping/:to/:zipCode', function(req, res) {
  console.log(req.params);
  Schemas.CountryShipping.find({to: req.params.to, zipCode: req.params.zipCode}, function(err, data) {
    if(err) throw err;
    res.json(data);
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

