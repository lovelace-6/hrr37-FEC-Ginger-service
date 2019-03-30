const faker = require('faker');

let name = faker.name.findName;
let details = faker.lorem.paragraphs;
let title = faker.commerce.productName;
let description = faker.lorem.paragraphs;
let year = faker.random.number;
let profilePic = faker.image.avatar;

module.exports = {
  name, details, title, description, year, profilePic
}
