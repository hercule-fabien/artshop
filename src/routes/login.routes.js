const { Router } = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/customer/auth/Login');

const loginRouter = new Router();

loginRouter.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

module.exports = loginRouter;
