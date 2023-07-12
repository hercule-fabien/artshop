const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function AllProducts({ title, uid, isAdmin }) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <h1>{title}</h1>
      <p>Список товаров...</p>
    </Layout>
  );
};
