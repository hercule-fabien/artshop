const { Router } = require('express');
const AllProductsAdmin = require('../views/admin/products/AllProducts');
const NewProduct = require('../views/admin/products/NewProduct');
const renderTemplate = require('../lib/renderTemplate');
const { Product } = require('../../db/models');

const adminRouter = new Router();

adminRouter.get('/products', async (req, res) => {
  const { uid, isAdmin } = req.session;
  try {
    const products = await Product.findAll({ raw: true });
    console.log(products);
    renderTemplate(AllProductsAdmin, {
      title: 'Управление товарами', uid, isAdmin, products,
    }, res);
  } catch (error) {
    console.error(error);
  }
});

adminRouter.get('/products/new', (req, res) => {
  const { uid, isAdmin } = req.session;
  renderTemplate(NewProduct, { title: 'Добавить товар', uid, isAdmin }, res);
});

adminRouter.post('/products', async (req, res) => {
  const {
    productName, summary, price, description,
  } = req.body;
  const imagePath = req.file.path;
  const imageRelativePath = imagePath.replace('public', '');
  try {
    const newProduct = await Product.create({
      productName,
      price,
      image: imageRelativePath,
      description,
      summary,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.redirect('/admin/products');
  } catch (error) {
    console.error(error);
  }
});

module.exports = adminRouter;
