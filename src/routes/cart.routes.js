const express = require('express');

const router = express.Router();
const { Cart, User, Product } = require('../../db/models');

// Get all cart items
router.get('/', async (req, res) => {
  try {
    // Get the cart from the session
    const cart = req.session.cart || [];

    // Find all cart items based on the product IDs in the cart
    const carts = await Cart.findAll({
      where: { id: cart },
      include: [
        { model: User },
        { model: Product },
      ],
    });

    res.json(carts);
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
