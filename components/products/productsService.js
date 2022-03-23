const { products } = require('../../models');

exports.list = async () => {
  return await products.findAll({raw: true});
};