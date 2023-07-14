const React = require('react');
const Layout = require('./Layout');

module.exports = function page401() {
  return (
    <Layout title="Ошибка сервера">
      <h1>Войдите со своими учетными данными</h1>
      <p>Вы не авторизованы на сайте</p>
      <p><a className="btn" href="/">Назад на главную страницу</a></p>
    </Layout>
  );
};
