const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/ProductDetailsShipping';

const db = mongoose.connect(mongoUri);

module.exports = db;