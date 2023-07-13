const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');
const { Product } = require('../../db/models');

const productsRouter = new Router();

productsRouter.get('/', async (req, res) => {
  const { uid, isAdmin } = req.session;
  try {
    const products = await Product.findAll({ raw: true });
    renderTemplate(AllProducts, {
      title: 'Все товары', uid, isAdmin, products,
    }, res);
  } catch (error) {
    console.error(error);
  }
});

module.exports = productsRouter;
