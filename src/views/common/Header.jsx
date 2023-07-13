const React = require('react');
const NavItems = require('./NavItems');

module.exports = function Header({
  title, uid, isAdmin, cartLength,
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/navigation.css" />
      <header id="main-header">
        <div id="logo"><a href="/">AFMS</a></div>
        {title === 'Авторизоваться' || title === 'Регистрация' || title === 'Ошибка сервера' ? (
          <nav>
            <ul>
              <li />
            </ul>
          </nav>
        ) : (
          <NavItems uid={uid} isAdmin={isAdmin} cartLength={cartLength} />
        )}
        <button id="mobile-menu-btn">
          <span />
          <span />
          <span />
        </button>
      </header>
      <aside id="mobile-menu">
        <NavItems uid={uid} isAdmin={isAdmin} cartLength={cartLength} />
      </aside>
    </>
  );
};
