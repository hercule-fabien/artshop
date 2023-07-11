const React = require('react');

module.exports = function Head({ title }) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
    </head>
  );
};
