const React = require('react');
const Layout = require('../../common/Layout');
const ProductItem = require('../../common/includes/ProductItem');

module.exports = function AllOrders({
  title, uid, isAdmin, orders,
}) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <link rel="stylesheet" href="/css/products.css" />
      <script defer src="/js/productManagement.js" />
      <h1>{title}</h1>
      <ul id="products-grid">
        {
          orders.map((order) => (
            <li key={order.id}>
              <ProductItem order={order} isAdmin={isAdmin} />
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};
