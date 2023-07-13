const React = require('react');

module.exports = function ProductItem({ product, isAdmin }) {
  return (
    <article className="product-item">
      <img src={`${product.image}`} alt="" />
      <div className="product-item-content">
        <h2>{product.productName}</h2>
        <p>{product.summary}</p>
        <div className="product-item-actions">
          {
            isAdmin ? (
              <>
                <a className="btn btn-alt" href={`/admin/products/update/${product.id}`}>Редактировать</a>
                <button className="btn btn-alt" data-productid={product.id}>Удалить</button>
              </>
            ) : (
                <a className="btn btn-alt" href={`/products/${product.id}`}>Подробнее</a>
            )
          }
        </div>
      </div>
    </article>
  );
};
