const faker = require('faker');

<<<<<<< Updated upstream
let name = faker.name.findName;
let details = faker.lorem.paragraphs;
let title = faker.commerce.productName;
let description = faker.lorem.paragraphs;
let year = faker.random.number;
let profilePic = faker.image.avatar;

module.exports = {
  name, details, title, description, year, profilePic
}
=======
const name = faker.name.findName;
const details = faker.lorem.paragraphs;
const title = faker.commerce.productName;
const description = faker.lorem.paragraphs;
const year = faker.random.number;
const profilePic = faker.image.avatar;
const author_id = faker.random.number;

module.exports = {
  name, details, title, description, year, profilePic, author_id
};
>>>>>>> Stashed changes
