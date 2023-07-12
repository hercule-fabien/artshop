const React = require('react');
const { locals } = require('express/lib/application');

module.exports = function Header({ title, uid }) {
  console.log(locals);
  return (
    <header>
      <div><a href="/">AFMS</a></div>
      {title === 'Авторизоваться' || title === 'Регистрация' || title === 'Ошибка сервера' ? (
        <nav>
          <ul>
            <li />
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            {uid ? (
              <li>
                <form action="/logout" method="POST">
                  <button>Выйти</button>
                </form>
                {/* <a href="/logout"><button>Выйти</button></a> */}
              </li>
            ) : (
              <li>
                <a href="/login"><button>Войти</button></a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};
