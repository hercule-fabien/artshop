const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function Register({ title, uid }) {
  return (
    <Layout title={title} uid={uid}>
      <h1>{title}</h1>
      <p>Список товаров...</p>
    </Layout>
  );
};
