const React = require('react');
const Layout = require('../../common/Layout');
const ProductItem = require('../../common/includes/ProductItem');

module.exports = function AllOrders({
  title, uid, isAdmin, products, cartLength,
}) {
  return (
    <article className="order-item">
      <header className="order-summary">
        <h2><span className="order-item-price">PRICE</span></h2>
        <p><span className="badge" /></p>
      </header>

      <section className="order-details">
        {isAdmin && (
        <address>
          <p><a href="mailto:<%= order.userData.email %>">USER NAME</a></p>
          <p>ADDRESS</p>
        </address>
        )}

        <ul>
          CYCLE of order
        </ul>
      </section>

    </article>
  );
};
