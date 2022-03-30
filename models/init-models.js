var DataTypes = require("sequelize").DataTypes;
var _products = require("./products");
var _users = require("./users");

function initModels(sequelize) {
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
