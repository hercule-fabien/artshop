const React = require('react');
const Layout = require('./Layout');

module.exports = function ErrorHandler() {
  return (
    <>
      <Layout title="Ошибка сервера">

        <h1>Что-то пошло не так</h1>
        <p>К сожалению, что-то пошло не так, пожалуйста попробуйте зайти позже</p>
        <p><a className="btn" href="/">Назад на главную страницу</a></p>
      </Layout>
    </>
  );
};
