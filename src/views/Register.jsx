const React = require('react');
const Layout = require('./Layout');

module.exports = function Register({ title }) {
  return (
    <Layout title={title}>
      <h1>Зарегистрируйтесь</h1>
      <form action="" method="POST">
        <p>
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="6"
            required
          />
        </p>
        <hr />
        <p>
          <label htmlFor="fullname">Имя, Фамилия</label>
          <input type="text" id="fullname" name="fullname" required />
        </p>
        <p>
          <label htmlFor="street">Улица (с номером дома и квартиры)</label>
          <input
            type="text"
            id="street"
            name="street"
            required
          />
        </p>
        <p>
          <label htmlFor="city">Город</label>
          <input
            type="text"
            id="city"
            name="city"
            required
          />
        </p>
        <p>
          <label htmlFor="zip-code">Почтовый индекс</label>
          <input
            type="text"
            id="zip-code"
            name="zip-code"
            minLength="5"
            maxLength="6"
            required
          />
        </p>
        <button className="btn">Создать аккаунт</button>
        <p id="switch-form">
          Есть аккаунт?
          <a href="/login"> Войти</a>
        </p>
      </form>

    </Layout>
  );
};