const renderTemplate = require('../lib/renderTemplate');
const ErrorHandler = require('../views/common/500');

function handleErrors(error, req, res, next) {
  console.log(error);
  if (error.code === 404) {
    renderTemplate(ErrorHandler, { errTitle: 'shared/404' }, res);
    return res.status(404).render('shared/404');
  }
  renderTemplate(ErrorHandler, { errTitle: 'shared/500' }, res);
}

module.exports = handleErrors;
