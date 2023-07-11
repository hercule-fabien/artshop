const bcrypt = require('bcrypt');
const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/customer/auth/Register');
const { User } = require('../../db/models');

const registerRouter = new Router();

registerRouter.get('/', (req, res, next) => {
  renderTemplate(Register, { title: 'Регистрация' }, res);
});

registerRouter.post('/', async (req, res) => {
  const {
    email, password, fullname, street, city, zipCode,
  } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ err: 'Такой пользователь существует' });
    } else {
      const newUser = await User.create({
        email,
        password: hash,
        fullname,
        street,
        city,
        zipCode,
      });
      req.session.email = newUser.email;
      req.session.fullname = newUser.fullname;
      req.session.save(() => {
        res.redirect('/login');
      });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = registerRouter;
