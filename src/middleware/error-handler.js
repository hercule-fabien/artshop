const renderTemplate = require('../lib/renderTemplate');
const ErrorHandler = require('../views/common/500');

function handleErrors(error, req, res, next) {
  console.log(error);
  renderTemplate(ErrorHandler, {}, res);
}

module.exports = handleErrors;
