var faker = require('faker');

var sampleData = [];

for(var i = 70; i < 101; i++) {
  var object = {
    _id: i,
    productName: faker.lorem.words(),
    price: faker.random.number(),
    totalSales: faker.random.number(),
    reviews: faker.random.number({'min': 0, 'max': 5}),
    inStock: faker.random.boolean(),
    creator: faker.name.findName(),
    quantity: faker.random.number(),
    handmade: faker.random.boolean(),
    description: faker.lorem.sentences(),
    ready: `${faker.date.soon()}`,
    from: faker.address.city()
  };
  sampleData.push(object);
}

console.log(sampleData);