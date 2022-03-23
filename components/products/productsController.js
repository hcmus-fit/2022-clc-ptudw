const { list } = require('./productsService');

exports.list = async (req, res, next) => {
  const products = await list();
  res.render('product/list', {products});
}

exports.details = (req, res, next) => {
  res.render('product/details');
}