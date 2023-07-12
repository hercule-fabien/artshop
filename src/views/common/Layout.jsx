const React = require('react');
const Head = require('./Head');
const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ children, title, uid }) {
  return (
    <html lang="en">
      <Head title={title} />
      <body>
        <Header title={title} uid={uid} />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};
