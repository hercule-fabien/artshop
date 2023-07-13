const bcrypt = require('bcrypt');
const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/customer/auth/Login');
const { User, Cart } = require('../../db/models');

const loginRouter = new Router();

loginRouter.get('/', (req, res) => {
  const { uid, isAdmin } = req.session;
  renderTemplate(Login, { title: 'Авторизоваться', uid, isAdmin }, res);
});

loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        // Update user session
        req.session.uid = user.id;
        req.session.isAdmin = user.isAdmin;
        req.session.email = email;
        req.session.fullname = user.fullname;

        // Update cart session if it's empty
        if (!req.session.cart || req.session.cart.length === 0) {
          const cartItems = await Cart.findAll({
            where: { userId: user.id },
            raw: true,
          });
          if (cartItems.length > 0) {
            req.session.cart = cartItems;
          }
        }

        req.session.save((error) => {
          if (error) {
            console.error('Session save error:', error);
            res.status(500).json({ error: 'Internal server error' });
          } else {
            res.json({ msg: 'OK' });
          }
        });
      } else {
        res.json({ err: 'Пароль неверный' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = loginRouter;
