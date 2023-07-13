const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const CartView = require('../views/customer/cart/CartView');

const router = express.Router();
const { Cart, User, Product } = require('../../db/models');

// Get all cart items
router.get('/', async (req, res) => {
  const { uid, isAdmin } = req.session;
  const cart = req.session.cart || [];
  const cartLength = cart.length;
  try {
    const user = await User.findByPk(uid);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find all cart items based on the product IDs in the cart
    const carts = await Cart.findAll({
      where: { userId: user.id },
      include: [
        { model: User },
        { model: Product },
      ],
    });

    // console.log('CARTS ===>', carts);

    const summedPrices = {};

    // Iterate over the carts and sum the prices for each product ID
    carts.forEach((cartItem) => {
      const { productId, price, quantity } = cartItem;
      if (summedPrices[productId]) {
        summedPrices[productId] += price * quantity;
      } else {
        summedPrices[productId] = price * quantity;
      }
    });

    // Create a new array with the summed prices
    const summedCarts = Object.keys(summedPrices).map((productId) => {
      const cartItems = carts.filter((cartItem) => cartItem.productId === parseInt(productId, 10));
      const productName = cartItems[0]?.Product?.dataValues?.productName || 'Unknown'; // Access productName from the first cart item
      const totalQuantity = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0); // Calculate the total quantity
      return {
        productId: parseInt(productId, 10),
        productName,
        price: summedPrices[productId],
        totalQuantity,
      };
    });

    renderTemplate(CartView, {
      title: 'Корзина', uid, isAdmin, cartLength, carts: summedCarts,
    }, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new item to the cart
router.post('/', async (req, res) => {
  const {
    userId, productId, price, quantity,
  } = req.body;

  try {
    // Get the cart from the session or initialize an empty cart
    const cart = req.session.cart || [];

    // Create a new cart item
    const cartItem = await Cart.create({
      userId, productId, price, quantity,
    });

    cart.push(cartItem.id);
    req.session.cart = cart;

    // Add the new cart item ID to the cart in the session
    req.session.save(() => {
      res.status(201).json(cartItem);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a cart item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { price, quantity } = req.body;

  try {
    const cartItem = await Cart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Update the cart item
    cartItem.price = price;
    cartItem.quantity = quantity;
    await cartItem.save();

    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a cart item
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await Cart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Remove the cart item ID from the cart in the session
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
