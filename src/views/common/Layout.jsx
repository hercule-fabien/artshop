const React = require('react');
const Head = require('./Head');
const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <Head title={title} />
      <body>
        <Header />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};
