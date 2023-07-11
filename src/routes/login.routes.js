const bcrypt = require('bcrypt');
const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/customer/auth/Login');
const { User } = require('../../db/models');

const loginRouter = new Router();

loginRouter.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});
loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.email = email;
        req.session.fullname = user.fullname;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        res.json({ err: 'Пароль неверный' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден' });
    }
  } catch (error) {
    res.send('Чтото пошло не так', error);
  }
});

module.exports = loginRouter;
