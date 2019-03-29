const Sequelize = require('sequelize');
const config = require('./config.js');
const data = require('./dummy_data.js');

const connect = new Sequelize(config.database, config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql'
});

connect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




