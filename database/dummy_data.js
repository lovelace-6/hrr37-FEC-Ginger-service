var faker = require('faker');

var name = faker.name.findName();

var details = faker.lorem.paragraphs();

var title = faker.commerce.productName();

module.exports = {
  name, details, title
}
