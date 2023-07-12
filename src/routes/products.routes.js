const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');

const productsRouter = new Router();

productsRouter.get('/', (req, res) => {
  renderTemplate(AllProducts, null, res);
});

module.exports = productsRouter;
