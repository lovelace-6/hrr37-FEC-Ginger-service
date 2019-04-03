const faker = require('faker');
const sdk = require('aws-sdk');
const config = require('../database/s3config.js')

const s3 = new sdk.S3({
  region: 'us-west-2',
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey
});

const name = faker.name.findName;
const details = faker.lorem.paragraphs;
const title = faker.commerce.productName;
const description = faker.lorem.paragraphs;
const year = faker.random.number;
const profilePic = faker.image.avatar;


module.exports = {
  name, details, title, description, year, profilePic
};
