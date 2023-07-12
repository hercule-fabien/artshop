const React = require('react');

module.exports = function ProductItem({ product }) {
  return (
    <article className="product-item">
      <img src={`${product.image}`} alt="" />
      <h2>{product.productName}</h2>
      <div>
        <a className="btn btn-alt" href={`/admin/products/${product.id}`}>Просмотр и редактирование</a>
        <button className="btn btn-alt">Удалить</button>
      </div>
    </article>
  );
};
