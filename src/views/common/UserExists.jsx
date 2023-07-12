const React = require('react');
const Layout = require('./Layout');

module.exports = function UserExists() {
  return (
    <>
      <Layout title="Пользователь существует">
        <h1>Такой пользователь уже существует.</h1>
        <p>Войдите, используя учетные данные.</p>
        <p><a className="btn" href="/login">Войти</a></p>
      </Layout>
    </>
  );
};
