const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function Register({ title }) {
  return (
    <>
      <link rel="stylesheet" href="/css/auth.css" />
      <link rel="stylesheet" href="/css/forms.css" />
      <Layout title={title}>

        <h1>Войдите</h1>
        <form action="/login" method="POST">
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
          <button className="btn">Войти</button>
          <p id="switch-form">
            Нет аккаунта?
            <a href="/register"> Зарегистрироваться</a>
          </p>
        </form>
      </Layout>
    </>
  );
};
