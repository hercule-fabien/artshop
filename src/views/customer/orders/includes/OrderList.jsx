const React = require('react');
const Layout = require('../../common/Layout');
const OrderItem = require('./OrderItem');

module.exports = function AllOrders({
  title, uid, isAdmin, orders, cartLength,
}) {
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin} cartLength={cartLength}>
      <ol>
        {orders.map((order) => (
          <li key={order.id}>
            <OrderItem  />
          </li>
        ))}

      </ol>
    </Layout>
  );
};
