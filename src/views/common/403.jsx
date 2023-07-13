const React = require('react');
const Layout = require('./Layout');

module.exports = function page403() {
  return (
    <Layout title="Ошибка сервера">
      <h1>Вы не авторизованы</h1>
      <p>Вы пытаетесь войти на защищенную страницу, если вы видите это сообщение, это значит что у вас нет прав доступа администратора.</p>
      <p><a className="btn" href="/">Назад на главную страницу</a></p>
    </Layout>
  );
};
