const React = require('react');
const Layout = require('../../common/Layout');

module.exports = function NewProduct({ title, uid, isAdmin }) {
  const handleReset = () => {
    const form = document.getElementById('updateProductForm');
    form.reset();
  };
  return (
    <Layout title={title} uid={uid} isAdmin={isAdmin}>
      <link rel="stylesheet" href="/css/forms.css" />
      <script defer src="/js/imagePreview.js" />
      <h1>{title}</h1>
      <form action="/admin/products" method="POST" encType="multipart/form-data">
        <p>
          <label htmlFor="productName">Название</label>
          <input type="text" id="productName" name="productName" required />
        </p>

        <div id="image-upload-control">
          <p>
            <label htmlFor="image">Изображение</label>
            <input type="file" id="image" name="image" accept="/image/png,image/jpg" required />
          </p>
          <img src="" alt="selected image" />
        </div>
        <p>
          <label htmlFor="summary">Краткое описание</label>
          <input type="text" id="summary" name="summary" required />
        </p>
        <p>
          <label htmlFor="price">Цена</label>
          <input type="number" id="price" name="price" min="50" step="50" required />
        </p>
        <p>
          <label htmlFor="description">Описание</label>
          <textarea id="description" name="description" rows="7" required />
        </p>
        <p>
          <button type="reset" className="btn btn-alt" onClick={handleReset}>Сбросить</button>
          <button type="submit" className="btn">Сохранить</button>
        </p>
      </form>
    </Layout>
  );
};
