const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URI);
const initModels = require('./init-models');

module.exports = initModels(sequelize);
