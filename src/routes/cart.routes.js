const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const CartView = require('../views/customer/cart/CartView');

const router = express.Router();
const { Cart, User, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  const { uid, isAdmin } = req.session;
  const cart = req.session.cart || [];
  const cartLength = cart.length;
  try {
    const user = await User.findByPk(uid);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const carts = await Cart.findAll({
      where: { userId: user.id },
      attributes: ['id', 'userId', 'productId', 'price', 'quantity', 'createdAt', 'updatedAt'],
      include: [
        { model: User },
        { model: Product },
      ],
    });

    const cartItems = carts.map((cartItem) => cartItem.id);
    req.session.cart = cartItems;
    req.session.save();

    const modifiedCarts = carts.map((cartItem) => ({ ...cartItem.toJSON(), id: cartItem.id }));

    renderTemplate(CartView, {
      title: 'Корзина',
      uid,
      isAdmin,
      carts: modifiedCarts,
      cartLength: cartItems.length,
    }, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const {
    userId, productId, price, quantity,
  } = req.body;

  try {
    const cart = req.session.cart || [];

    const cartItem = await Cart.create({
      userId, productId, price, quantity,
    });

    cart.push(cartItem.id);
    req.session.cart = cart;

    req.session.save(() => {
      res.status(201).json(cartItem);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.patch('/:productId', async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    const cartItem = await Cart.findOne({ where: { productId } });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/', async (req, res) => {
  const { cartId } = req.body;
  console.log('THE ID!=>>>', cartId);

  try {
    const cartItem = await Cart.findOne({ where: { id: cartId } });
    console.log('CART ITEM', cartItem);

    if (!cartItem) {
      return res.status(404).json({ error: 'Элемент корзины не найден' });
    }

    const cart = req.session.cart || [];
    const index = cart.indexOf(cartItem.id);
    if (index > -1) {
      cart.splice(index, 1);
      req.session.cart = cart;
    }

    await cartItem.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
