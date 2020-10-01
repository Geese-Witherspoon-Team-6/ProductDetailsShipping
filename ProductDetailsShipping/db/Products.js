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
  quantity: Number,
  handmade: Boolean,
  description: String,
  ready: String,
  from: String,
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;