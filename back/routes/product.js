var express = require('express');
var productController = require('../controllers/ProductController');
var api = express.Router();

api.post('/product/register',productController.register_product);
api.get('/products/:product_name?',productController.list_product);
api.put('/product/stock/:id',productController.update_stock); 
module.exports = api;