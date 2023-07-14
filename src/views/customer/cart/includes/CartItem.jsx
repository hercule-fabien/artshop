const React = require('react');

module.exports = function CartItem({ cart, isAdmin }) {
  console.log('CART ID ===>', cart.id);
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

      <form className="cart-item-management">
        <button className="btn btn-alt" data-productid={cart.id}>Удалить</button>
      </form>
    </article>
  );
};
