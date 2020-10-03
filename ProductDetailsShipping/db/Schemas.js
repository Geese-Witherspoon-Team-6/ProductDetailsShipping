const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema({
  _id: Number,
  productName: String,
  price: Number,
  totalSales: Number,
  reviews: Number,
  inStock: Boolean,
  creator: String,
  creatorImgUrl: String,
  quantity: Number,
  handmade: Boolean,
  description: String,
  ready: String,
  from: String,
})

const CountryShippingSchema = new mongoose.Schema({
  _id: Number,
  ready: String,
  from: String,
  to: String,
  zipCode: Number,
  cost: Number,
})

const Product = mongoose.model('Product', ProductSchema);

const CountryShipping = mongoose.model('CountryShipping', CountryShippingSchema);

module.exports = {Product, CountryShipping};