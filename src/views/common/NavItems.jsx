const React = require('react');

module.exports = function NavItems({ isAdmin, uid, cartLength }) {
  return (
    <nav>
      <ul className="nav-items">
        {!isAdmin && (
          <>
            <li><a href="/">В магазин</a></li>
            <li>
              <a href="/cart">
                Корзина
                <span className="badge">{cartLength}</span>
              </a>
            </li>
            {uid && (
              <li><a href="/orders">Заказы</a></li>
            )}
          </>
        )}
        {uid ? (
          <>
            {isAdmin && (
              <>
                <li><a href="/admin/products">Управлять товарами</a></li>
                <li><a href="/admin/orders">Управлять заказами</a></li>
              </>
            )}
            <li>
              <form action="/logout" method="GET">
                <button>Выйти</button>
              </form>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login">Войти</a>
            </li>
            <li><a href="/register">Регистрация</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};
