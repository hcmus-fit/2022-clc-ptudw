const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

/* GET home page. */
router.get('/', productController.list);

router.get('/:productId', productController.details);


module.exports = router;
