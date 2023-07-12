const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function AllProductsAdmin({ title, uid, isAdmin }) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <h1>{title}</h1>
      <section>
        <h2>Управлять товарами</h2>
        <p>
          <a href="/admin/products/new" className="btn">Добавить товар</a>
        </p>
      </section>
      <section><p>Список товаров...</p></section>
    </Layout>
  );
};
