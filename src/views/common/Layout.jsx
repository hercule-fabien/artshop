const React = require('react');
const Head = require('./Head');
const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ children, title, uid, isAdmin, cartLength }) {
  return (
    <html lang="en">
      <Head title={title} />
      <body>
        <Header title={title} uid={uid} isAdmin={isAdmin} cartLength={cartLength} />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};
