const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/qtsy';

const db = mongoose.connect(mongoUri);

module.exports = db;