const React = require('react');

module.exports = function CartItem({ cart, isAdmin }) {
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h2>{cart.Product.productName}</h2>
        <p>
          <span className="cart-item-price">
            {cart.price}
            {' '}
            &#x20bd;
          </span>
        </p>
      </div>

      <div className="cart-item-management">
        <button className="btn btn-alt delete" data-cartid={cart.id}>Удалить</button>
      </div>
    </article>
  );
};
