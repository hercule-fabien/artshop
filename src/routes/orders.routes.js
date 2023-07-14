const express = require('express');

const renderTemplate = require('../lib/renderTemplate');

const router = express.Router();
const { Order } = require('../../db/models');
const AllOrders = require('../views/customer/orders/AllOrders');

router.get('/', async (req, res) => {
  const { uid, isAdmin } = req.session;
  const cart = req.session.cart || [];
  try {
    const orders = await Order.findAll();
    renderTemplate(AllOrders, {
      title: 'Все заказы', uid, isAdmin, orders,
    }, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
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
    const order = await Order.create({
      userId, productId, price, quantity,
    });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    userId, productId, price, quantity,
  } = req.body;
  try {
    const order = await Order.findByPk(id);
    if (order) {
      order.userId = userId;
      order.productId = productId;
      order.price = price;
      order.quantity = quantity;
      await order.save();
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (order) {
      await order.destroy();
      res.json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
