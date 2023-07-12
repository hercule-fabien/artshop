const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');

const indexRouter = new Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/products');
});

module.exports = indexRouter;
