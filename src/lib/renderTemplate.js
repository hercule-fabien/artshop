require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderTemplate(component, props, res) {
  const reactElement = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  res.send(`<!DOCTYPE html>${html}`);
  res.end();
}
module.exports = renderTemplate;
