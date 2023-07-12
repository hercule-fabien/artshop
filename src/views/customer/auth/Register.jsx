const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function Register({ title, uid }) {
  return (
    <>
      <link rel="stylesheet" href="/css/auth.css" />
      <link rel="stylesheet" href="/css/forms.css" />
      <Layout title={title} uid={uid}>
        <script defer src="/js/register.js" />
        <h1>Зарегистрируйтесь</h1>
        <form action="/register" method="POST">
          <p>
            <label htmlFor="email">Электронная почта</label>
            <input type="email" id="email" name="email" />
          </p>
          <p>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              minLength="6"
            />
          </p>
          <hr />
          <p>
            <label htmlFor="fullname">Имя, Фамилия</label>
            <input type="text" id="fullname" name="fullname" />
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
            <label htmlFor="zipCode">Почтовый индекс</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
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
    </>
  );
};
