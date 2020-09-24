const db  = require('./index.js');
const Product = require('./Products.js');

const sampleProducts = [
  {
    productName: 'The Risk I Took Magnet - Bird - Math - Humor - Animal - Nature - Gift - Stocking Stuffer',
    price: 4.50,
    totalSales: 34173,
    creator: 'MincingMockingbird',
    quantity: 563,
    handmade: true,
    description: 'What\'s the square root of "Oh, sh-t?" \n\n 2.125" x 3.125" \n\n Metal shell \n\n Mylar/UV protective cover \n\n Flat magnetic back \n\n ©2017 The Mincing Mockingbird™ \n\n mm754ris',
    ready: '1-2 Business Days',
    from: 'United States',
  }
];

const insertSampleProducts = function() {
  Product.create(sampleProducts)
    .then(() => db.disconnect());
};

insertSampleProducts();