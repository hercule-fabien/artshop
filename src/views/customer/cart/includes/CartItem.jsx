const React = require('react');
const Layout = require('../../../common/Layout');

module.exports = function CartItem({ cart, isAdmin }) {
  console.log('===> CART', cart);
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h2>{cart.productName}</h2>
        <p>
          {cart.price}
          {' '}
          (
          {cart.totalQuantity} x {cart.price / cart.totalQuantity}
          )
        </p>
      </div>

      <div className="cart-item-management">
        <input type="number" value={cart.totalQuantity} required />
        <button className="btn btn-alt">Изменить</button>
      </div>
    </article>
  );
};
