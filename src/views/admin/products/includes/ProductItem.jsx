const React = require('react');

module.exports = function ProductItem({ product }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/admin/products/delete/${product.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.href = '/admin/products';
      } else {
        console.log('Deleting error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="product-item">
      <img src={`${product.image}`} alt="" />
      <div className="product-item-content">
        <h2>{product.productName}</h2>
        <div className="product-item-actions">
          <a className="btn btn-alt" href={`/admin/products/update/${product.id}`}>Редактировать</a>
          {/*<a className="btn btn-alt" id="delete-button" href={`/admin/products/delete/${product.id}`}>Удалить</a>*/}
          <button className="btn btn-alt" data-productid={product.id}>Удалить</button>
        </div>
      </div>
    </article>
  );
};
