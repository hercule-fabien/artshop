const { Router } = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');

const registerRouter = new Router();

registerRouter.get('/', (req, res) => {
  renderTemplate(Register, { title: 'Регистрация' }, res);
  // const register = React.createElement(Register, { title: 'Register' });
  // const html = ReactDOMServer.renderToStaticMarkup(register);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
});

module.exports = registerRouter;
