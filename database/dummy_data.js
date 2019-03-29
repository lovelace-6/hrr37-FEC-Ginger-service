const faker = require('faker');

let name = faker.name.findName;
let details = faker.lorem.paragraphs;
let title = faker.commerce.productName();
let description = faker.lorem.paragraphs();
let year = faker.random.number({min:1920, max:2019});
let profilePic = faker.image.avatar();

const createAuthor = () => {
  console.log(name(), details())
}


module.exports = {
  createAuthor
}
