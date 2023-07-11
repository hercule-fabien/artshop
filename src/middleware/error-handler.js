const renderTemplate = require('../lib/renderTemplate');
const Error = require('../views/common/500');

function handleErrors(error, req, res, next) {
  console.log(error);
  renderTemplate(Error, {}, res);
}

module.exports = handleErrors;
