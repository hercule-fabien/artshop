const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <>
      <link rel="stylesheet" href="/css/auth.css" />
      <link rel="stylesheet" href="/css/forms.css" />
      <Layout title="Ошибка сервера">

        <h1>Что-то пошло не так</h1>
        <p>К сожалению, что-то пошло не так, пожалуйста попробуйте зайти позже</p>
        <p><a className="btn" href="/">Назад на главную страницу</a></p>
      </Layout>
    </>
  );
};
