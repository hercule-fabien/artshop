const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const AllProducts = require('../views/customer/products/AllProducts');
const { Product } = require('../../db/models');
const ProductItem = require('../views/customer/products/ProductDetails');

const productsRouter = new Router();

productsRouter.get('/', async (req, res) => {
  const { uid, isAdmin } = req.session;
  const cart = req.session.cart || [];
  const cartLength = cart.length;
  try {
    const products = await Product.findAll({ raw: true });
    renderTemplate(AllProducts, {
      title: 'Все товары', uid, isAdmin, products, cartLength,
    }, res);
  } catch (error) {
    console.error(error);
  }
});

productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { uid, isAdmin } = req.session;
  const cart = req.session.cart || [];
  const cartLength = cart.length;
  try {
    const product = await Product.findByPk(id);
    renderTemplate(ProductItem, {
      title: 'Описание товара',
      uid,
      isAdmin,
      product,
      cartLength,
    }, res);
  } catch (error) {
    console.error(error);
  }
});

module.exports = productsRouter;
