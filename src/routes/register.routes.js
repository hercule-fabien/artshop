const bcrypt = require('bcrypt');
const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const ErrorHandler = require('../views/common/500');
const UserExists = require('../views/common/UserExists');
const Register = require('../views/customer/auth/Register');
const { User } = require('../../db/models');

const registerRouter = new Router();

registerRouter.get('/', (req, res, next) => {
  const { uid } = req.session;
  renderTemplate(Register, { title: 'Регистрация', uid }, res);
});

registerRouter.post('/', async (req, res) => {
  const {
    email, password, fullname, street, city, zipCode,
  } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    const user = await User.findOne({ where: { email } });
    if (user) {
      renderTemplate(UserExists, {}, res);
    } else {
      const newUser = await User.create({
        email,
        password: hash,
        fullname,
        street,
        city,
        zipCode,
      });
      req.session.uid = newUser.id;
      req.session.isAdmin = newUser.isAdmin;
      req.session.email = newUser.email;
      req.session.fullname = newUser.fullname;
      req.session.save(() => {
        res.json({ msg: 'OK' });
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ err: 'Ошибка регистрации' });
  }
});

module.exports = registerRouter;
