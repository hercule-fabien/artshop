const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function AllProducts({
  title, uid, isAdmin, product, cartLength,
}) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin} cartLength={cartLength}>
      <link rel="stylesheet" href="/css/products.css" />
      <script defer src="/js/cartManagement.js" />
      <div id="product-details">
        <header>
          <img src={`${product.image}`} alt={product.productName} />
          <div id="product-info">
            <h1>{product.productName}</h1>
            <p>{product.summary}</p>
            <p>{product.price}</p>
            <button
              className="btn"
              data-productid={product.id}
              data-userid={uid}
              data-price={product.price}
            >
              В корзину
            </button>
          </div>
        </header>
        <p id="product-description">{product.description}</p>
      </div>
    </Layout>
  );
};
