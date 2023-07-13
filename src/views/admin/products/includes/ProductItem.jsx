const React = require('react');

module.exports = function ProductItem({ product }) {
  return (
    <article className="product-item">
      <img src={`${product.image}`} alt="" />
      <div className="product-item-content">
        <h2>{product.productName}</h2>
        <div className="product-item-actions">
          <a className="btn btn-alt" href={`/admin/products/${product.id}`}>Просмотр и редактирование</a>
          <button className="btn btn-alt">Удалить</button>
        </div>
      </div>
    </article>
  );
};
