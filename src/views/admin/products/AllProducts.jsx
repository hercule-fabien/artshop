const React = require('react');
const Layout = require('../../common/Layout');
const ProductItem = require('./includes/ProductItem');

module.exports = function AllProductsAdmin({
  title, uid, isAdmin, products,
}) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <h1>{title}</h1>
      <section>
        <h2>Управлять товарами</h2>
        <p>
          <a href="/admin/products/new" className="btn">Добавить товар</a>
        </p>
      </section>
      <section>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  );
};
