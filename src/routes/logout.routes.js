const { Router } = require('express');

const logoutRouter = new Router();

logoutRouter.get('/', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('sessionCookie');
    res.redirect('/');
  });
});

module.exports = logoutRouter;
