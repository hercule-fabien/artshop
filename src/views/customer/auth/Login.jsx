const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function Login({ title, uid, isAdmin }) {
  return (
    <>
      <link rel="stylesheet" href="/css/auth.css" />
      <link rel="stylesheet" href="/css/forms.css" />
      <link rel="stylesheet" href="/css/styles.css" />
      <Layout title={title} uid={uid} isAdmin={isAdmin}>
        <script defer src="/js/login.js" />
        <h1>{title}</h1>
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
          <button type="submit" className="btn">Войти</button>
          <p id="switch-form">
            Нет аккаунта?
            <a href="/register"> Зарегистрироваться</a>
          </p>
        </form>
      </Layout>
    </>
  );
};
