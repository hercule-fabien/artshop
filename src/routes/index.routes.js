const { Router } = require('express');

const indexRouter = new Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/products');
});


module.exports = indexRouter;
