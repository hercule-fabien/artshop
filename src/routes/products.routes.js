const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');

const productsRouter = new Router();

productsRouter.get('/', (req, res) => {
  const { uid } = req.session;
  renderTemplate(AllProducts, { title: 'Все товары', uid }, res);
});

module.exports = productsRouter;
