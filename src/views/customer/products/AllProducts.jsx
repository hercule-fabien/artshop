const React = require('react');
const Layout = require('../../common/Layout');
const ProductItem = require('../../common/includes/ProductItem');

module.exports = function AllProducts({
  title, uid, isAdmin, products,
}) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <link rel="stylesheet" href="/css/products.css" />
      <script defer src="/js/productManagement.js" />
      <h1>{title}</h1>
      <ul id="products-grid">
        {
            products.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} isAdmin={isAdmin} />
              </li>
            ))
          }
      </ul>
    </Layout>
  );
};
