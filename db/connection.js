const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(database);

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  return sequelize;
};

module.exports = {
  sequelize,
  testDbConnection,
};
