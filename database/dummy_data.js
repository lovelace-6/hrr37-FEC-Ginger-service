const faker = require('faker');

const name = faker.name.findName;
const details = faker.lorem.paragraphs;
const title = faker.commerce.productName;
const description = faker.lorem.paragraphs;
const year = faker.random.number;
const profilePic = faker.image.avatar;

module.exports = {
  name, details, title, description, year, profilePic,
};
