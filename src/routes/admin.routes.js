const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const AllProductsAdmin = require('../views/admin/products/AllProducts');
const NewProduct = require('../views/admin/products/NewProduct');
const UpdateProduct = require('../views/admin/products/UpdateProduct');
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

adminRouter.get('/products/update/:id', async (req, res) => {
  const { id } = req.params;
  const { uid, isAdmin } = req.session;
  try {
    const product = await Product.findByPk(id);
    renderTemplate(UpdateProduct, {
      title: 'Изменить товар',
      uid,
      isAdmin,
      product,
    }, res);
  } catch (error) {
    console.error(error);
  }
});

adminRouter.post('/products/update/:id', async (req, res) => {
  const { id } = req.params;
  const {
    productName, summary, price, description,
  } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.sendStatus(404);
    }

    product.productName = productName;
    product.summary = summary;
    product.price = price;
    product.description = description;

    if (req.file) {
      if (product.image) {
        fs.unlinkSync(path.join('public', product.image));
      }
      product.image = `/images/${req.file.filename}`;
    }

    await product.save();

    return res.redirect('/admin/products');
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

adminRouter.get('/products/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.sendStatus(404);
    }

    await product.destroy();

    return res.redirect('/admin/products');
  } catch (error) {
    return res.json({ msg: 'Deleting error' });
  }
});

module.exports = adminRouter;
