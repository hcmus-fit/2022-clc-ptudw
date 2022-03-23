const { list } = require('./productsService');
const ITEMS_PER_PAGE = 9;

exports.list = async (req, res, next) => {
  let { page } = req.query;
  if (!page || isNaN(page)) page = 1;
  else
    page = parseInt(page);
  const { count, rows: products } = await list((page - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE);
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  const nextPage = page + 1;
  const previousPage = page - 1;
  res.render('product/list', {
    products, count, totalPages,
    pages: Array.from(Array(totalPages).keys()).map(i => i + 1),
    nextPage, previousPage,
  });
};

exports.details = (req, res, next) => {
  res.render('product/details');
};