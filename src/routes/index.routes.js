const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');

const indexRouter = new Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/products');
});

indexRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('sessionCookie');
    res.redirect('/login');
  });
});

module.exports = indexRouter;
