const { products } = require('../../models');

exports.list = async (offset = 0, limit = 9) => {
  return await products.findAndCountAll({raw: true, offset, limit});
};