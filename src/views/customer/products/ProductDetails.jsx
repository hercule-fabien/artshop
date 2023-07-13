const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function AllProducts({
  title, uid, isAdmin, product,
}) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <link rel="stylesheet" href="/css/products.css" />
      <div id="product-details">
        <header>
          <img src={`${product.image}`} alt={product.productName} />
          <div id="product-info">
            <h1>{product.productName}</h1>
            <p>{product.summary}</p>
            <p>{product.price}</p>
            <button className="btn">В корзину</button>
          </div>
        </header>
        <p id="product-description">{product.description}</p>
      </div>
    </Layout>
  );
};
