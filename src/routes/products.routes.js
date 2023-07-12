const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');

const productsRouter = new Router();

productsRouter.get('/', (req, res) => {
  const { uid, isAdmin } = req.session;
  renderTemplate(AllProducts, { title: 'Все товары', uid, isAdmin }, res);
});

module.exports = productsRouter;
