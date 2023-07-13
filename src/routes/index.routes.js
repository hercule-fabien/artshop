const { Router } = require('express');
const Page401 = require('../views/common/401');
const Page403 = require('../views/common/403');
const renderTemplate = require('../lib/renderTemplate');

const indexRouter = new Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/products');
});

indexRouter.get('/401', (req, res) => {
  renderTemplate(Page401, {}, res);
});

indexRouter.get('/403', (req, res) => {
  renderTemplate(Page403, {}, res);
});

module.exports = indexRouter;
