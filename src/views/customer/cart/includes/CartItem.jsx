const React = require('react');
const Layout = require('../../../common/Layout');

module.exports = function CartItem({ cart, isAdmin }) {
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h2>{cart.productName}</h2>
        <p>
          {cart.price}
          {' '}
          <span className="cart-product-price">
            (
            {cart.totalQuantity}
            {' '}
            x
            {cart.price / cart.totalQuantity}
            )
          </span>
        </p>
      </div>

      <div className="cart-item-management">
        <input type="number" value={cart.totalQuantity} required />
        <button className="btn btn-alt">Изменить</button>
      </div>
    </article>
  );
};
