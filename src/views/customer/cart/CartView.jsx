const React = require('react');
const Layout = require('../../common/Layout');
const CartItem = require('./includes/CartItem');

module.exports = function CartView({
  title, uid, isAdmin, carts, cartLength,
}) {
  const totalPrice = carts.reduce((accumulator, cart) => {
    const productPrice = Number(cart.price);
    return accumulator + productPrice;
  }, 0);
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin} cartLength={cartLength}>
      <link rel="stylesheet" href="/css/cart.css" />
      <h1>{title}</h1>
      <ul id="cart-items">
        {carts.map((cart) => (
          <li>
            <CartItem cart={cart} isAdmin={isAdmin} />
          </li>
        ))}
      </ul>
      <div id="cart-total">
        <p>Всего къ оплате: {totalPrice} &#8381;</p>
        <button className="btn">Оплатить</button>
      </div>
    </Layout>
  );
};
